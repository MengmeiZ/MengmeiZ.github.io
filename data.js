/* =============================================================================
   主页内容 — 你以后只需要改这一个文件，不用碰 index.html
   -----------------------------------------------------------------------------
   规则只有三条：
   1) 中英文成对：{zh:"中文", en:"English"}。只写一种语言也行，另一边会显示空。
      纯符号内容（人名、会议名、年份）直接写字符串，不用成对。
   2) 每一项用大括号 { } 包住，项与项之间用逗号隔开，最后一项后面可以不加逗号。
   3) 引号里如果要用双引号，写成 \" ；要换行/加粗，可以用 HTML：<br> <strong>粗</strong>
   改完保存 → 推到 GitHub → 30 秒后主页自动更新。
   ============================================================================= */

const T = {

  /* ---- 你的名字（作者列表里出现这个名字时会自动加粗高亮）---- */
  me: "Mengmei Zhang",

  /* ---- 左栏：姓名、单位、按钮 ---- */
  name:     {zh:"张梦玫",         en:"Mengmei Zhang"},
  nameAlt:  {zh:"Mengmei Zhang", en:"张梦玫"},
  affil:    {zh:"<strong>中国电信 · 数据发展中心（支付）</strong><br>博士后研究员 · 大模型与图智能",
             en:"<strong>China Telecom · Data Development Center (Payment)</strong><br>Postdoctoral Researcher — Large language models &amp; graph intelligence"},
  langBtn:  {zh:"EN", en:"中文"},
  themeBtn: {zh:"深色", en:"Dark"},

  /* ---- 左栏联系方式。href 写 "#" 表示还没填链接 ---- */
  contact: [
    // {k:{zh:"邮箱",en:"Email"},      v:"mgwave87@gmail.com", href:"mailto:mgwave87@gmail.com"},
    {k:"Scholar",    v:"8Qokm1IAAAAJ",    href:"https://scholar.google.com/citations?user=8Qokm1IAAAAJ&hl=en"},
    {k:"DBLP",       v:"234/4670",        href:"https://dblp.org/pid/234/4670"},
    {k:"OpenReview", v:"~Mengmei_Zhang1", href:"https://openreview.net/profile?id=~Mengmei_Zhang1"},
    {k:"GitHub",     v:"github.com/MengmeiZ", href:"https://github.com/MengmeiZ"},
    {k:{zh:"所在地",en:"Based in"}, v:{zh:"中国 · 北京",en:"Beijing, China"}}
  ],

  /* ---- 章节标题。删掉某一节 = 把它从这里和下面的内容里一起删掉 ---- */
  sections: {
    about:     {zh:"关于",     en:"About",        sub:"About"},
    interests: {zh:"研究方向", en:"Research",     sub:"Research"},
    news:      {zh:"动态",     en:"News",         sub:"News"},
    pubs:      {zh:"论文",     en:"Publications", sub:"Publications"},
    service:   {zh:"学术服务", en:"Service",      sub:"Service"},
    talks:     {zh:"报告",     en:"Talks",        sub:"Talks"},
    exp:       {zh:"经历",     en:"Experience",   sub:"Experience"}
  },

  /* ---- 关于：一段一个字符串，中英各一组 ---- */
  about: {
    zh: [
      "我的方向是<strong>大模型与图智能</strong>",
      "近年以第一/共同第一作者提出 <strong>GraphTranslator</strong>（图模型与大语言模型对齐框架，WWW 2024）与 <strong>FRiskGPT</strong>（生成式基座模型，WWW 2026）。两项工作都发表在 CCF A 类会议 WWW：前者把图节点表征翻译成大模型可读的 token，让冻结的 LLM 直接在图上做开放式问答，代码已开源；后者把用户行为统一成「行为语言」做自回归预测，一个基座覆盖多类下游任务、无需分任务微调，已在金融风险检测场景上线。",
      "研究起点是 NLP 的<strong>信息抽取与观点挖掘</strong>，博士期间图机器学习的鲁棒性、公平性与自监督理论，再回到大模型时代的图-文对齐、多模态信息抽取与生成式基座。累计发表 17 项成果，其中 <strong>CCF A 类顶会顶刊 12 篇</strong>，第一或共同第一作者 8 项。",
      "目前在中国电信数据发展中心（支付）从事博士后研究，业务上围绕 <strong>Data Agent</strong> 与<strong>智能监督</strong>展开。"
    ],
    en: [
      "I work on <strong>large language models and graph intelligence</strong> — getting an LLM to read structured data and act on it, and doing the research and the deployment together.",
      "As first or co-first author I proposed <strong>GraphTranslator</strong> (the first graph-model-to-LLM alignment framework, WWW 2024) and <strong>FRiskGPT</strong> (a generative foundation model, WWW 2026). Both appeared at WWW, a CCF-A venue. GraphTranslator turns node representations into tokens a frozen LLM can read, enabling open-ended question answering over graphs; the code is open-source. FRiskGPT unifies user behavior into a &ldquo;behavior language&rdquo; and models it autoregressively, so one pre-trained base covers many downstream tasks with no per-task fine-tuning; it is deployed in financial risk detection.",
      "The research started in NLP — information extraction and opinion mining — moved into robustness, fairness and self-supervised theory for graph machine learning, and came back to graph-text alignment, multimodal extraction and generative foundation models in the LLM era. 17 published works in total, <strong>12 of them at CCF-A venues</strong>, 8 as first or co-first author.",
      "I am currently a postdoctoral researcher at the Data Development Center (Payment), China Telecom, working on <strong>data agents</strong> and <strong>intelligent supervision</strong>."
    ]
  },

  /* ---- 研究方向。g:"research" 或 g:"applied"，同组的会自动归在一起 ---- */
  interestGroups: {research:{zh:"研究",en:"Research"}, applied:{zh:"业务",en:"Applied"}},

  interests: [
    {g:"research", t:{zh:"生成式基座模型与行为序列建模",en:"Generative foundation models & behavior sequence modeling"},
     d:{zh:"把多场景多任务统一为自回归的行为预测，一个基座覆盖全生命周期；以及检索增强的智能体流水线。已在金融风险检测场景验证。",
        en:"Unifying multi-scenario, multi-task modeling into autoregressive behavior prediction under a single base model, plus retrieval-augmented agent pipelines. Validated in financial risk detection."}},
    {g:"research", t:{zh:"图模型与大语言模型对齐 · 图基础模型",en:"Graph–LLM alignment & graph foundation models"},
     d:{zh:"把图结构翻译成大模型可读的表示，支持开放式任务；图指令微调、图 tokenization，以及图基础模型的范式梳理。",
        en:"Translating graph structure into representations an LLM can read for open-ended tasks; graph instruction tuning, graph tokenization, and the paradigm survey of graph foundation models."}},
    {g:"research", t:{zh:"多模态预训练与信息抽取（NLP）",en:"Multimodal pre-training & information extraction (NLP)"},
     d:{zh:"图结构与文本描述的细粒度对齐预训练；大模型时代的多模态命名实体识别、知识图谱表示学习与观点抽取。",
        en:"Fine-grained alignment pre-training between graph structure and text; multimodal named entity recognition in the era of large pre-trained models, KG representation learning and opinion extraction."}},
    {g:"research", t:{zh:"模型安全、鲁棒与可信",en:"Security, robustness & trustworthiness"},
     d:{zh:"最小预算拓扑攻击、异构图对抗鲁棒、数据免提取攻击，以及用大模型为图模型做加固与可证明公平性。",
        en:"Minimum-budget topology attacks, adversarially robust heterogeneous graphs, data-free model extraction, plus LLM-assisted hardening and provable fairness for graph models."}},
    {g:"research", t:{zh:"图自监督、联邦与推荐",en:"Self-supervision, federated learning & recommendation"},
     d:{zh:"图对比学习的可证明训练目标；联邦推荐在稀疏聚合下的拜占庭鲁棒性。",
        en:"Provable training objectives for graph contrastive learning; Byzantine robustness of federated recommendation under sparse aggregation."}},
    {g:"applied", t:{zh:"Data Agent",en:"Data agents"},
     d:{zh:"让智能体直接在企业的关系型数据上工作，以及背后的数据理解与口径对齐。",
        en:"Agents that work directly on relational enterprise data, and the data understanding that has to happen underneath."}},
    {g:"applied", t:{zh:"智能监督",en:"Intelligent supervision"},
     d:{zh:"非结构化材料的结构化解析、关联关系下的异常识别，以及结论的可追溯与可解释。",
        en:"Structuring unstructured material, spotting anomalies in relational context, and keeping conclusions traceable and explainable."}}
  ],

  /* ---- 论文区顶部的四个数字。改数字就改 n ---- */
  stats: [
    {n:"17", l:{zh:"正式发表成果",en:"Publications"}},
    {n:"12", l:{zh:"CCF A 类顶会顶刊",en:"CCF-A venues"}},
    {n:"8",  l:{zh:"第一 / 共同第一作者",en:"First / co-first author"}},
    {n:"890", id:"citations", l:{zh:"Google Scholar 被引 · h-index 12",en:"Citations · h-index 12"}}
  ],
  /* statNote：抓不到 scholar.json 时显示（比如本地双击打开）
     statNoteAuto：读到 scholar.json 时显示，{date} 会被替换成实际更新日期 */
  statNote:    {zh:"被引数据为手工填写",              en:"Citation figures entered by hand"},
  statNoteAuto:{zh:"被引数据自动更新于 {date}",        en:"Citation figures auto-updated {date}"},
  citedLabel:  {zh:"被引 {n}",                       en:"{n} citations"},

  /* ---- 动态。d 是日期，新的放最上面 ---- */
  news: [
    {d:"2026.07", t:{zh:"担任 <strong>WWW 2026</strong> Industry Session 主席（Session Chair），并现场报告 FRiskGPT。",
                     en:"Served as <strong>Session Chair</strong> for Industry Session 7 at <strong>WWW 2026</strong>, and presented FRiskGPT."}},
    {d:"2026", t:{zh:"两篇论文被 <strong>WWW 2026</strong> 接收：FRiskGPT（共同第一作者）与 Graph-Tokenizing LLMs。<em>补录用月份</em>",
                  en:"Two papers accepted to <strong>WWW 2026</strong>: FRiskGPT (co-first author) and Graph-Tokenizing LLMs. <em>fill in month</em>"}},
    {d:"2025", t:{zh:"图基础模型综述被 <strong>IEEE TPAMI</strong> 接收；两篇论文被 <strong>KDD 2025</strong> 接收。",
                  en:"Our graph foundation model survey was accepted to <strong>IEEE TPAMI</strong>; two papers accepted to <strong>KDD 2025</strong>."}},
    {d:"2024.12", t:{zh:"一篇论文被 <strong>AAAI 2025</strong> 接收（共同第一作者）。<em>核对月份</em>",
                     en:"One paper accepted to <strong>AAAI 2025</strong> (co-first author). <em>check month</em>"}},
    {d:"2024.05", t:{zh:"GraphTranslator 在 <strong>WWW 2024</strong> 作 Oral 报告，代码已开源。",
                     en:"Presented GraphTranslator as an oral at <strong>WWW 2024</strong>; code is open-source."}},
    {d:"2023.09", t:{zh:"于北京邮电大学获得博士学位，导师石川教授。",
                     en:"Received my PhD from Beijing University of Posts and Telecommunications, advised by Prof. Chuan Shi."}}
  ],

  /* ---- 作者角色标签的文字，一般不用改 ---- */
  roles: {
    sole:{zh:"唯一第一作者",en:"Sole first author"},
    co:{zh:"共同第一作者",en:"Co-first author"}
  },

  /* ---- 论文两个分组的小标题（篇数改了记得同步）---- */
  pubHeads: {
    a:{zh:"CCF A 类顶会与顶刊 · 12 篇",en:"CCF-A conferences & journals · 12"},
    b:{zh:"其他论文与著作 · 5 项",en:"Other papers & book chapter · 5"}
  },

  /* ===========================================================================
     论文（主列表，大卡片）。加一篇 = 复制一整个 { ... } 块改内容。
       v     会议/期刊简称（左侧大字）      y  年份
       rank  资质标签，如 "CCF-A"，不写就不显示
       role  "sole"=唯一一作 / "co"=共同一作，不写就不显示标签
       t     标题                          a  作者数组（你的名字会自动高亮）
       s     补充行（卷期页码等，可选）     note 一句话说明（可选，带竖线强调）
       flag  橙色状态标签（可选）           l    链接数组，[] 表示暂无
     =========================================================================== */
  pubs: [
    {v:"WWW", y:"2026", rank:"CCF-A", role:"co",
     t:"FRiskGPT: A Generative Foundation Model for Financial Risk Detection",
     a:["Zhongjian Zhang","Mengmei Zhang","Dehua Xu","Rongjun Shi","Jianfeng Liu","Fuli Meng","Huajian Xu","Xiao Wang","Ruijia Wang","Junze Chen","Minwei Tang","Chuan Shi"],
     s:{zh:"《ACM Web Conference 2026 论文集》, pp. 7733–7744",en:"Proceedings of the ACM Web Conference 2026, pp. 7733–7744"},
     note:{zh:"把用户行为统一为「行为语言」做自回归预测，一个基座覆盖多类下游任务，无需分任务微调；已在生产环境上线。",
           en:"Unifies user behavior into a “behavior language” modeled autoregressively; one base covers many downstream tasks without per-task fine-tuning. Running in production."},
     flag:{zh:"已上线 · 生产环境",en:"Deployed · In production"},
     l:[{l:"DOI",h:"https://doi.org/10.1145/3774904.3792832"}]},

    {v:"WWW", y:"2026", rank:"CCF-A",
     t:"Toward Graph-Tokenizing Large Language Models with Reconstructive Graph Instruction Tuning",
     a:["Zhongjian Zhang","Xiao Wang","Mengmei Zhang","Jiarui Tan","Chuan Shi"],
     l:[{l:"DOI",h:"https://doi.org/10.1145/3774904.3792077"}]},

    {v:"TPAMI", y:"2025", rank:"CCF-A",
     t:"Graph Foundation Models: Concepts, Opportunities and Challenges",
     a:["Jiawei Liu","Cheng Yang","Zhiyuan Lu","Junze Chen","Yibo Li","Mengmei Zhang","Ting Bai","Yuan Fang","Lichao Sun","Philip S. Yu","Chuan Shi"],
     s:{zh:"IEEE Transactions on Pattern Analysis and Machine Intelligence",en:"IEEE Transactions on Pattern Analysis and Machine Intelligence"},
     note:{zh:"系统梳理以图结构为底座的图基础模型范式。",
           en:"Systematic account of the graph foundation model paradigm."},
     l:[{l:"DOI",h:"https://doi.org/10.1109/TPAMI.2025.3548729"},{l:"arXiv",h:"https://arxiv.org/abs/2310.11829"}]},

    {v:"KDD", y:"2025", rank:"CCF-A",
     t:"Advancing Molecular Graph-Text Pre-training via Fine-grained Alignment",
     a:["Yibo Li","Yuan Fang","Mengmei Zhang","Chuan Shi"],
     l:[]},

    {v:"KDD", y:"2025", rank:"CCF-A",
     t:"Can Large Language Models Improve the Adversarial Robustness of Graph Neural Networks?",
     a:["Zhongjian Zhang","Xiao Wang","Huichi Zhou","Yue Yu","Mengmei Zhang","Cheng Yang","Chuan Shi"],
     l:[]},

    {v:"AAAI", y:"2025", rank:"CCF-A", role:"co",
     t:"Rethinking Byzantine Robustness in Federated Recommendation from Sparse Aggregation Perspective",
     a:["Zhongjian Zhang","Mengmei Zhang","Xiao Wang","Lingjuan Lyu","Bo Yan","Junping Du","Chuan Shi"],
     l:[]},

    {v:"WWW", y:"2024", rank:"CCF-A", role:"sole",
     t:"GraphTranslator: Aligning Graph Model to Large Language Model for Open-ended Tasks",
     a:["Mengmei Zhang","Mingwei Sun","Peng Wang","Shen Fan","Yanhu Mo","Xiaoxiao Xu","Hong Liu","Cheng Yang","Chuan Shi"],
     s:{zh:"《ACM Web Conference 2024 论文集》, pp. 1003–1014",en:"Proceedings of the ACM Web Conference 2024, pp. 1003–1014"},
     note:{zh:"图模型与大语言模型的跨模态对齐框架：Translator 把节点表征翻译成 LLM 可读的 token，Producer 自动构造图-文本对齐数据，使冻结的 LLM 能做开放式图问答。",
           en:"A cross-modal alignment framework between graph models and LLMs: a Translator turns node representations into tokens the LLM can read, and a Producer builds graph-text alignment data automatically, so a frozen LLM can answer open-ended questions over graphs."},
     l:[{l:"DOI",h:"https://doi.org/10.1145/3589334.3645682"},{l:"arXiv",h:"https://arxiv.org/abs/2402.07197"},{l:{zh:"代码",en:"Code"},h:"https://github.com/alibaba/GraphTranslator"}]},

    {v:"WWW", y:"2024", rank:"CCF-A", role:"co",
     t:"Endowing Pre-trained Graph Models with Provable Fairness",
     a:["Zhongjian Zhang","Mengmei Zhang","Yue Yu","Cheng Yang","Jiawei Liu","Chuan Shi"],
     l:[{l:"DOI",h:"https://doi.org/10.1145/3589334.3645703"},{l:"arXiv",h:"https://arxiv.org/abs/2402.12161"},{l:{zh:"代码",en:"Code"},h:"https://github.com/BUPT-GAMMA/GraphPAR"}]},

    {v:"USENIX", y:"2024", rank:"CCF-A",
     t:"Unveiling the Secrets without Data: Can Graph Neural Networks Be Exploited through Data-Free Model Extraction Attacks?",
     a:["Yuanxin Zhuang","Chuan Shi","Mengmei Zhang","Jinghui Chen","Lingjuan Lyu","Pan Zhou","Lichao Sun"],
     s:{zh:"USENIX Security Symposium",en:"USENIX Security Symposium"},
     l:[]},

    {v:"NeurIPS", y:"2023", rank:"CCF-A",
     t:"Provable Training for Graph Contrastive Learning",
     a:["Yue Yu","Xiao Wang","Mengmei Zhang","Nian Liu","Chuan Shi"],
     l:[{l:"arXiv",h:"https://arxiv.org/abs/2309.13944"},{l:{zh:"代码",en:"Code"},h:"https://github.com/VoidHaruhi/POT-GCL"}]},

    {v:"WWW", y:"2023", rank:"CCF-A", role:"sole",
     t:"Minimum Topology Attacks for Graph Neural Networks",
     a:["Mengmei Zhang","Xiao Wang","Chuan Shi","Lingjuan Lyu","Tianchi Yang","Junping Du"],
     note:{zh:"只改动极少的关系边即可攻击图模型，说明图结构本身就是攻击面。",
           en:"Attacking a graph model by changing only a handful of edges — evidence that the structure itself is an attack surface."},
     l:[{l:"DOI",h:"https://doi.org/10.1145/3543507.3583509"},{l:"arXiv",h:"https://arxiv.org/abs/2403.02723"}]},

    {v:"AAAI", y:"2022", rank:"CCF-A", role:"sole",
     t:"Robust Heterogeneous Graph Neural Networks against Adversarial Attacks",
     a:["Mengmei Zhang","Xiao Wang","Meiqi Wang","Chuan Shi","Zhiqiang Zhang","Jun Zhou"],
     l:[]}
  ],

  /* ---- 其他论文与著作（紧凑列表，字段同上但没有 note/flag/链接）---- */
  minor: [
    {v:"Information Fusion", y:"2025", rank:"JCR Q1",
     t:"Multimodal Named Entity Recognition in the Era of Large Pre-trained Models: A Comprehensive Survey",
     a:["Mingying Xu","Fei Hou","Jie Liu","Mengmei Zhang","Lei Shi","Feifei Kou","Lei Guo","Philip S. Yu","Xuming Hu"]},
    {v:{zh:"专著章节",en:"Book chapter"}, y:"2022", role:"sole",
     t:"Fundamental Graph Neural Networks",
     s:{zh:"《Advances in Graph Neural Networks》",en:"In: Advances in Graph Neural Networks"},
     a:["Mengmei Zhang","Meiqi Zhu"]},
    {v:"Frontiers in AI", y:"2021",
     t:"Text-Graph Enhanced Knowledge Graph Representation Learning",
     a:["Linmei Hu","Mengmei Zhang","Shaohua Li","Jinghan Shi","Chuan Shi","Cheng Yang","Zhiyuan Liu"]},
    {v:"ICDM", y:"2020", rank:"CCF-B", role:"sole",
     t:"Adversarial Label-Flipping Attack and Defense for Graph Neural Networks",
     a:["Mengmei Zhang","Linmei Hu","Chuan Shi","Xiao Wang"]},
    {v:"WISA", y:"2018",
     t:"An Integrated Semantic-Syntactic SBLSTM Model for Aspect Specific Opinion Extraction",
     a:["Zhongming Han","Xin Jiang","Mengqi Li","Mengmei Zhang","Dagao Duan"]}
  ],

  /* ---------------------------------------------------------------------------
     【已隐藏】在投 / 预印本
     想重新显示：删掉本行上方的注释开头符号，以及下方 preprints 数组后面的注释
     结尾符号；然后在 index.html 里找到 "PREPRINTS" 标记，同样取消那段注释。
  -----------------------------------------------------------------------------
  preprintsHead: {zh:"在投 / 预印本 · 3 篇", en:"Under review / preprints · 3"},
  preprints: [
    {y:"2026", t:"Revisiting Graph-Tokenizing LLMs: A Systematic Evaluation of Graph Token Understanding"},
    {y:"2025", t:"Adaptive Tokenization: On the Hop-Overpriority Problem in Tokenized Graph Learning Models"},
    {y:"2025", t:"Data-centric Federated Graph Learning with Large Language Models"}
  ],
  --------------------------------------------------------------------------- */

  /* ---- 学术服务 ---- */
  service: [
    {w:{zh:"2026",en:"2026"}, t:{zh:"Session Chair · WWW 2026",en:"Session Chair · WWW 2026"},
     s:{zh:"ACM Web Conference，Industry Session 7。",en:"The ACM Web Conference, Industry Session 7."}},
    {w:{zh:"持续",en:"Ongoing"}, t:{zh:"程序委员会委员 / 审稿人",en:"Program committee member / reviewer"},
     s:{zh:"WWW、KDD、AAAI、IJCAI 等 CCF A 类会议。",en:"WWW, KDD, AAAI, IJCAI and other CCF-A venues."}}
  ],

  // /* ---- 报告 ---- */
  // talks: [
  //   {w:"2026.07", t:"FRiskGPT: A Generative Foundation Model for Financial Risk Detection",
  //    s:{zh:"WWW 2026 Industry Track，会议现场报告。",en:"WWW 2026 Industry Track, conference presentation."}},
  //   {w:"2024.05", t:"GraphTranslator: Aligning Graph Model to Large Language Model for Open-ended Tasks",
  //    s:{zh:"WWW 2024，Oral 报告。",en:"WWW 2024, oral presentation."}}
  // ],

  /* ---- 经历。w 是时间，t 是单位，s 是说明 ---- */
  exp: [
    {w:{zh:"至今",en:"Present"}, t:{zh:"中国电信 · 数据发展中心（支付）",en:"China Telecom · Data Development Center (Payment)"},
     s:{zh:"博士后研究员。方向：大模型与图智能、Data Agent、本体赋能穿透式监管。",
        en:"Postdoctoral researcher. LLMs and graph intelligence, data agents, intelligent supervision. <em>fill in start year and title</em>"}},
    {w:{zh:"实习",en:"Internship"}, t:{zh:"阿里巴巴集团",en:"Alibaba Group"},
     s:{zh:"研究实习生，GraphTranslator（WWW 2024）于实习期间完成。",
        en:"Research intern; GraphTranslator (WWW 2024) was completed during this internship. <em>fill in dates and team</em>"}},
    {w:"2022.02–2023.02", t:{zh:"新加坡国立大学",en:"National University of Singapore"},
     s:{zh:"联合培养博士生（国家公派）。",en:"Visiting PhD student, China Scholarship Council joint program."}},
    {w:"2018.09–2023.09", t:{zh:"北京邮电大学 · 计算机学院",en:"Beijing Univ. of Posts and Telecommunications · School of Computer Science"},
     s:{zh:"计算机科学与技术 博士，导师石川教授（GAMMA 实验室）。",en:"PhD in Computer Science, advised by Prof. Chuan Shi (GAMMA Lab)."}}
  ],

  /* ---- 页脚 ---- */
  footer:{zh:["© 2026 张梦玫","最后更新 2026.09"],en:["© 2026 Mengmei Zhang","Last updated 2026.09"]}
};
