# 个人主页

两个文件，放在仓库根目录：

| 文件 | 作用 | 你会动它吗 |
|---|---|---|
| `data.js` | **所有文字内容**（简介、论文、经历…），中英各一个字段 | 每次更新只改这个 |
| `index.html` | 版式、配色、渲染逻辑 | 基本不用动 |
| `avatar.jpg` | 头像，放同目录即可自动生效；没有就显示 MZ 字母块 | 换照片时 |

## 第一次上线

1. 在 GitHub 新建仓库，名字必须是 `MengmeiZ.github.io`，设为 Public。
2. 把 `index.html`、`data.js`（和 `avatar.jpg`）上传到仓库根目录。
3. Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main`，目录 `/ (root)`，Save。
4. 等 1–2 分钟，访问 `https://mengmeiz.github.io`。

自有域名：仓库根目录再加一个名为 `CNAME` 的文件，内容写域名（如 `mengmeizhang.com`），
然后在域名服务商加一条 CNAME 记录指向 `MengmeiZ.github.io`。

## 以后怎么改内容

**不用装任何东西，在浏览器里改：**

1. 打开 `https://github.com/MengmeiZ/MengmeiZ.github.io/blob/main/data.js`
2. 点右上角铅笔图标 ✏️
3. 改完点绿色的 `Commit changes`
4. 等约 30 秒，刷新主页就是新的

## 加一篇论文

在 `data.js` 的 `pubs: [` 里，复制任意一个 `{ ... }` 块贴在最前面，改字段：

```js
{v:"NeurIPS", y:"2026", rank:"CCF-A", role:"sole",
 t:"论文英文标题",
 a:["Mengmei Zhang","Co Author","Chuan Shi"],
 note:{zh:"一句话说明，可省略",en:"One-line note, optional"},
 l:[{l:"arXiv",h:"https://arxiv.org/abs/xxxx.xxxxx"}]},
```

- `role` 写 `"sole"` 是唯一第一作者，`"co"` 是共同第一作者，不写就不显示标签
- `a` 数组里凡是等于 `me`（文件开头定义的 `"Mengmei Zhang"`）的名字会自动加粗高亮
- `l:[]` 表示暂时没有链接
- 别忘了同步改上面 `stats` 里的数字和 `pubHeads` 里的篇数

## 引用数自动更新

`.github/workflows/scholar.yml` 每周一北京时间 11:17 跑一次，抓 Google Scholar 写进
`scholar.json`，主页加载时读它。你不用管，但要知道它怎么坏：

- **Google 会拦爬虫。** 从 GitHub 的 IP 抓 Scholar，被返回人机验证页是常态，不是偶发。
  脚本重试 3 次，仍失败就**什么都不写**，保留上一次的数字——绝不会把页面刷成 0。
- **怎么知道它停了？** 主页论文区上方那行小字写的是「被引数据自动更新于 YYYY-MM-DD」，
  日期直接来自 `scholar.json`。停更了页面自己就会显示一个很旧的日期，你一眼能看到。
- **仓库 60 天没提交，GitHub 会自动停掉定时任务**并发邮件通知你。去 Actions 页面点
  `Enable workflow` 恢复即可。
- **想立刻跑一次**：仓库 → Actions → 左侧选这个 workflow → 右上 `Run workflow`。
- 抓到的每篇论文被引数也会写进 `scholar.json`，主页论文卡片上会自动出现「被引 141」的标签。
  靠标题匹配（忽略大小写和标点），对不上就不显示，不会显示错的。

改 `SCHOLAR_ID`：在 `scholar.yml` 里改 `SCHOLAR_ID:` 那一行。

## 改坏了怎么办

改 `data.js` 最容易犯的错是**漏逗号**或**引号没配对**，症状是页面一片空白。
GitHub 上点 `data.js` 的 History，找到上一个版本恢复即可；
或者本地用浏览器打开 `index.html`，按 F12 看 Console 里的报错行号。
