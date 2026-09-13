#!/usr/bin/env python3
"""
抓取 Google Scholar 个人页的引用数据，写入 scholar.json。

为什么不用 scholarly 库：它依赖 bibtexparser v1，在 Python 3.12 上装不起来，
而且整条依赖链很长，任何一环升级都可能让这个定时任务悄悄挂掉。
这里直接请求 Scholar 页面自己解析，只依赖 requests + beautifulsoup4，
两个都是有通用 wheel 的稳定包。

设计原则：宁可不更新，也不写坏数据。
- 抓取失败 / 被 Google 拦 → 不动 scholar.json，脚本以 0 退出（不天天刷失败邮件）
- 新数字比旧的小 20% 以上 → 判定为残缺结果，同样不写
- scholar.json 里的 updated 会显示在主页上，所以长期抓不到时页面日期自己会露馅
"""

import json
import os
import re
import sys
import time
from datetime import datetime, timezone

import requests
from bs4 import BeautifulSoup

SCHOLAR_ID = os.environ.get("SCHOLAR_ID", "8Qokm1IAAAAJ")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "scholar.json")

URL = ("https://scholar.google.com/citations"
       "?hl=en&user={uid}&cstart={start}&pagesize=100")
HEADERS = {
    "User-Agent": ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
                   "(KHTML, like Gecko) Chrome/125.0 Safari/537.36"),
    "Accept-Language": "en-US,en;q=0.9",
}
RETRIES = 3
SHRINK_TOLERANCE = 0.8


def norm(title: str) -> str:
    """标题归一化，用于和 data.js 里的论文对应。"""
    return re.sub(r"[^a-z0-9]", "", title.lower())


def load_previous() -> dict:
    try:
        with open(OUT, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


def fetch_page(session: requests.Session, start: int) -> BeautifulSoup:
    resp = session.get(URL.format(uid=SCHOLAR_ID, start=start), headers=HEADERS, timeout=30)
    resp.raise_for_status()
    if "gs_captcha" in resp.text or "unusual traffic" in resp.text.lower():
        raise RuntimeError("被 Google 拦截（返回了人机验证页）")
    return BeautifulSoup(resp.text, "html.parser")


def fetch() -> dict:
    session = requests.Session()
    papers: dict[str, int] = {}
    indices: list[int] = []
    start = 0

    while True:
        soup = fetch_page(session, start)

        if start == 0:
            # 右侧统计表：总被引、近5年被引、h-index、近5年 h、i10、近5年 i10
            indices = [int(td.get_text(strip=True))
                       for td in soup.select("td.gsc_rsb_std")
                       if td.get_text(strip=True).isdigit()]
            if len(indices) < 5:
                raise RuntimeError(f"没解析到引用统计表（只拿到 {len(indices)} 个数字），页面结构可能变了")

        rows = soup.select("tr.gsc_a_tr")
        if not rows:
            if start == 0:
                raise RuntimeError("没解析到任何论文行，页面结构可能变了")
            break

        for row in rows:
            title_el = row.select_one("a.gsc_a_at")
            cite_el = row.select_one("a.gsc_a_ac")
            if not title_el:
                continue
            raw = (cite_el.get_text(strip=True) if cite_el else "")
            papers[norm(title_el.get_text(strip=True))] = int(raw) if raw.isdigit() else 0

        if len(rows) < 100:
            break
        start += 100
        time.sleep(2)

    return {
        "citedby": indices[0],
        "hindex": indices[2],
        "i10index": indices[4],
        "papers": papers,
        "updated": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
    }


def main() -> int:
    prev = load_previous()
    data = None
    last_err = None

    for attempt in range(1, RETRIES + 1):
        try:
            data = fetch()
            break
        except Exception as exc:                      # noqa: BLE001 — 任何异常都算抓取失败
            last_err = exc
            print(f"[尝试 {attempt}/{RETRIES}] 抓取失败：{exc}", file=sys.stderr)
            if attempt < RETRIES:
                time.sleep(30 * attempt)

    if data is None:
        print(f"::warning::Google Scholar 抓取失败，保留上一次的数据。最后错误：{last_err}")
        return 0

    if not data["citedby"]:
        print("::warning::抓到的被引数为 0，判定为异常，保留上一次的数据。")
        return 0

    old = prev.get("citedby", 0)
    if old and data["citedby"] < old * SHRINK_TOLERANCE:
        print(f"::warning::被引数从 {old} 掉到 {data['citedby']}，疑似抓取残缺，保留上一次的数据。")
        return 0

    if prev.get("citedby") == data["citedby"] and prev.get("papers") == data["papers"]:
        print(f"数据没变（被引 {data['citedby']}），不提交。")
        return 0

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2, sort_keys=True)
        f.write("\n")

    print(f"已更新：被引 {data['citedby']}（原 {old or '—'}），h-index {data['hindex']}，"
          f"收录论文 {len(data['papers'])} 篇。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
