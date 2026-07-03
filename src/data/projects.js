// ============================================================
// 作品数据文件
// 后续新增 / 修改 / 删除作品，只改这一个文件，不需要碰页面组件
// ============================================================
//
// ── contentBlocks 完整字段说明 ──────────────────────────────
//
//  {
//    title:      '模块标题',               // 必填
//    type:       'imageText',              // 可选，见下方类型说明
//    layout:     'left',                  // 兼容保留字段（历史遗留，当前不控制布局）
//                                         // imageText 统一渲染为"上文下图"，此字段不再生效
//    paragraphs: ['第一段。', '第二段。'],  // 正文段落，可多段，也可为 []
//    bullets:    ['要点一', '要点二'],     // 可选要点列表，可为 []
//    images: [                            // 图片数组，0张/1张/多张均可
//      { src: '/images/xxx.jpg', alt: '说明', caption: '图片下注' },
//    ],
//    tags:  ['标签1', '标签2'],           // 可选，可为 []
//    note:  '手写批注',                   // 可选，留空填 ''
//  }
//
// ── type 类型说明 ────────────────────────────────────────────
//
//  imageText   上文下图（文字介绍在上，全宽大图在下，默认）
//  textOnly    纯文字，不放图片
//  gallery     多图展示（2张以上），适合过程截图、对比图
//  fullImage   单张大图展示，全宽，适合整体界面图、最终效果图
//  steps       步骤 / 流程 / 方法列表，用 bullets 字段填内容（'list' 为旧别名，仍可用）
//
// ── 各 type 的建议字段组合 ───────────────────────────────────
//
//  imageText  : images(1张) + paragraphs + layout(兼容保留，不生效)
//  textOnly   : paragraphs + bullets(可选)，images 填 []
//  gallery    : images(2张以上) + paragraphs(可选)
//  fullImage  : images(1张) + paragraphs(可选)，图片全宽展示
//  steps      : bullets(必填) + paragraphs(可选) + images(可选)
//
// ── 新增/删除作品 ────────────────────────────────────────────
//
//  新增：在 projects 数组末尾追加对象，id 必须唯一
//  删除：删除对应对象，页面自动减少
//
// ── 新增/删除核心模块 ────────────────────────────────────────
//
//  新增：在 detail.contentBlocks 末尾追加对象
//  删除：删除对应对象，编号自动重新计算
//
// ── 图片放哪里 ───────────────────────────────────────────────
//
//  图片统一放到 public/images/，路径写 /images/文件名.jpg
//
// ============================================================

const projects = [

  // ── 作品 01：采销智能分析台 ──────────────────────────────────
  {
    id: 'category-analysis-dashboard',
    title: '采销智能分析台',
    summary: '面向采销、商品运营和品类运营场景的数据分析产品原型，支持从业务问题出发，完成数据识别、SKU 分析、销售排行、主推推荐、图表展示和报告沉淀。',
    tags: ['AI 编程', '采销分析', '品类经营', 'SKU 分析', 'PostgreSQL', '数据可视化'],
    cover: '/images/category-dashboard-cover.png',
    date: '2025-06',
    detail: {
      background:
        '在采销、商品运营和品类运营工作中，日常决策往往需要同时关注品类结构、SKU 表现、品牌表现、价格竞争、库存周转和用户反馈等多个维度。传统分析方式通常依赖人工整理 Excel、查询数据库或阅读后台报表，流程分散，效率较低，也不利于沉淀标准化的分析结果。本项目基于这一业务场景，构建了一个面向采销经营分析的智能分析台。系统以"业务问题 → 数据识别 → SQL/表格分析 → 图表展示 → 报告生成"为核心流程，支持从 PostgreSQL 示例数据库或 Excel/CSV 上传数据中读取品类、品牌和 SKU 信息，并输出销售排行、主推 SKU 推荐等分析结果。项目重点不在于替代真实业务系统，而是通过一个完整的数据分析产品原型，展示我对采销业务链路、商品经营逻辑、数据分析流程和 AI Agent 工具协同开发的理解与实践能力。',
      approach:
        '我没有把这个项目定位为单纯的数据看板，而是围绕采销真实工作中的决策链路进行设计：先理解业务问题，再识别品类、品牌和 SKU，最后通过数据分析输出可执行的经营判断。项目实现上，我将整体流程拆成五个环节：① 业务问题识别——用户输入自然语言问题，系统判断问题涉及的品类、品牌、商品关键词和分析意图；② 数据源接入——支持 PostgreSQL 示例数据库和 Excel/CSV 上传数据，既能模拟数据库分析，也能适配外部表格数据；③ 分析逻辑执行——根据识别结果动态生成 SQL 或 pandas 分析逻辑，完成销售排行、主推 SKU 推荐等经营分析；④ 结果可视化——将查询结果转化为表格、图表和关键指标，帮助快速判断商品表现和经营优先级；⑤ 报告沉淀——自动生成 Markdown 分析报告，并通过报告中心保存、预览和下载，形成可复用的分析结果。核心思路是：把采销日常分析从"手动查数据、手动整理表格"转化为"业务问题驱动的数据分析流程"。',
      contentBlocks: [
        // 模块 1
        {
          type:   'fullImage',
          title:  '整体项目预览',
          paragraphs: [
            '本项目是面向采销、商品运营和品类运营场景的智能分析台，支持从 PostgreSQL 数据库或 Excel/CSV 文件中读取品类、品牌和 SKU 数据，完成销售排行、主推 SKU 推荐、图表展示和 Markdown 报告生成，模拟从业务问题到经营分析结论的完整工作流。',
          ],
          bullets: [],
          images: [
            { src: '/images/category-dashboard-overview.png', alt: '分析台整体界面预览', caption: '' },
          ],
          tags:  ['项目概览', '采销分析', '数据产品原型', 'AI 编程'],
          note:  '',
        },
        // 模块 2
        {
          type:   'imageText',
          layout: 'left',
          title:  '智能分析页',
          paragraphs: [
            '用户输入采销业务问题，系统自动识别品类、品牌、商品关键词和分析意图，并生成对应的数据分析结果。',
          ],
          bullets: [
            '示例："牛奶品类中，哪些 SKU 销售额最高？"',
            '示例："蒙牛牛奶中，哪些 SKU 销售额最高？"',
            '示例："低脂牛奶中，哪些 SKU 值得优先主推？"',
          ],
          images: [
            { src: '/images/category-dashboard-analysis.png', alt: '智能分析页截图', caption: '自然语言输入 → 分析结果输出' },
          ],
          tags:  ['自然语言问题', '业务识别', '智能分析'],
          note:  '',
        },
        // 模块 3
        {
          type:   'imageText',
          layout: 'right',
          title:  '数据库浏览器',
          paragraphs: [
            '用于查看 PostgreSQL 示例数据库中的表、字段、品类、品牌、SKU 和样例数据。帮助用户先了解"当前数据库里有什么数据"，再进行具体分析，避免盲目提问。',
          ],
          bullets: [],
          images: [
            { src: '/images/category-dashboard-database.png', alt: '数据库浏览器截图', caption: '表结构 & 字段 & 样例数据' },
          ],
          tags:  ['PostgreSQL', '数据表', '字段查看', 'SKU 数据'],
          note:  '',
        },
        // 模块 4
        {
          type:   'imageText',
          layout: 'left',
          title:  '数据导入中心',
          paragraphs: [
            '支持上传 Excel/CSV 经营数据，并进行字段映射和标准化处理。上传后，系统可以基于外部表格数据完成品类分析，不依赖固定数据库结构。',
          ],
          bullets: [],
          images: [
            { src: '/images/category-dashboard-import.png', alt: '数据导入中心截图', caption: 'Excel/CSV 上传 & 字段映射' },
          ],
          tags:  ['Excel', 'CSV', '字段映射', '外部数据'],
          note:  '',
        },
        // 模块 5
        {
          type:   'imageText',
          layout: 'right',
          title:  '销售排行分析',
          paragraphs: [
            '根据品类、品牌或商品关键词，计算 SKU 销售额和销量表现，以排行榜的形式呈现结果。用于判断哪些商品是当前品类或品牌下的核心销售 SKU，辅助补货优先级决策。',
          ],
          bullets: [],
          images: [
            { src: '/images/category-dashboard-ranking.png', alt: '销售排行分析截图', caption: 'SKU 销售额 & 销量排行' },
          ],
          tags:  ['销售额', '销量', 'SKU 排行', '商品表现'],
          note:  '',
        },
        // 模块 6
        {
          type:   'imageText',
          layout: 'left',
          title:  '主推 SKU 推荐',
          paragraphs: [
            '结合销售额、销量、转化率、评分、库存等指标，对 SKU 进行综合评分，输出主推推荐列表。用于辅助判断哪些商品更适合作为重点运营或主推商品，提供比单维度排行更全面的参考依据。',
          ],
          bullets: [
            '综合评分维度：销售额、销量、转化率、商品评分、库存状态',
            '输出形式：按评分排序的推荐列表，附关键指标数值',
            '定位：辅助判断，而非替代运营决策',
          ],
          images: [
            { src: '/images/category-dashboard-recommend.png', alt: '主推 SKU 推荐截图', caption: '综合评分 & 推荐列表' },
          ],
          tags:  ['主推 SKU', '综合评分', '运营优先级', '经营判断'],
          note:  '// 综合评分逻辑是这个项目里反复调整最多的部分',
        },
        // 模块 7
        {
          type:   'imageText',
          layout: 'right',
          title:  '图表与结果展示',
          paragraphs: [
            '分析结果以表格、关键指标卡和图表形式呈现。帮助快速比较不同 SKU 的销售表现和经营优先级，将数字结论转化为可直观判断的视图。',
          ],
          bullets: [],
          images: [
            { src: '/images/category-dashboard-chart.png', alt: '图表与结果展示截图', caption: '表格 & 指标卡 & 图表' },
          ],
          tags:  ['图表展示', '关键指标', '结果可视化'],
          note:  '',
        },
        // 模块 8
        {
          type:   'imageText',
          layout: 'left',
          title:  '报告中心',
          paragraphs: [
            '系统可自动生成 Markdown 分析报告，并支持保存、预览和下载。用于沉淀每次分析结果，方便后续复盘、展示或交接，解决"分析完就丢失"的问题。',
          ],
          bullets: [],
          images: [
            { src: '/images/category-dashboard-report.png', alt: '报告中心截图', caption: 'Markdown 报告预览 & 下载' },
          ],
          tags:  ['Markdown 报告', '报告中心', '结果沉淀'],
          note:  '',
        },
        // 模块 9
        {
          type:   'textOnly',
          title:  '数据库更换支持',
          paragraphs: [
            '项目提供数据库切换指南和连接检查脚本，支持未来接入新的 PostgreSQL 数据库，或通过字段映射适配不同结构的数据源。这一设计的出发点是：原型虽然基于示例数据库搭建，但分析逻辑本身应该具备迁移到真实数据的可能性。',
          ],
          bullets: [
            '连接检查脚本：验证数据库是否可正常连接，并列出可用表和字段',
            '字段映射配置：允许将外部数据库字段名映射到系统内部标准字段',
            '切换指南：提供分步说明，降低接入新数据源的操作门槛',
          ],
          images: [],
          tags:  ['数据库切换', '连接检查', '字段映射', '可扩展性'],
          note:  '// 体现对"原型可落地"的思考，而非仅仅能跑起来',
        },
      ],
      highlights: [
        '不只是数据看板，而是围绕采销决策链路设计的分析闭环：从业务问题识别、数据查询、结果分析，到 Markdown 报告沉淀，串联成完整流程。',
        '支持 PostgreSQL 示例数据库与 Excel/CSV 上传数据源，兼顾数据库分析和表格数据分析两种场景，接近采销实际工作中的数据获取方式。',
        '通过自然语言问题识别品类、品牌、商品关键词和分析意图，让用户可以用业务语言提问，而不需要手动配置查询条件。',
        '将销售排行、主推 SKU 推荐、图表展示和报告沉淀整合在同一个工具中，展示了对"采销分析完整工作流"的系统性理解。',
        '采销分析的核心不是"看数据"，而是围绕用户需求、商品货盘、价格竞争、库存周转和经营利润形成判断。项目设计围绕这一逻辑展开，而非功能堆砌。',
        '项目展示了我对商品经营逻辑、数据分析流程和 AI Agent 协同开发的综合理解——这是一个学习性质的原型，数据来自模拟数据集，重点在于验证分析逻辑和产品形态。',
      ],
      conclusion:
        '这个项目让我把对品类运营的学习兴趣和数据分析能力结合起来做了一次具体的表达。过程中最大的收获不是某个技术点，而是"如何把业务问题拆解成可分析的数据问题"的思维方式。后续希望能找机会接触真实的业务数据，验证和迭代这些分析逻辑，也希望在求职过程中听到更多来自一线运营同学的反馈。',
    },
  },

  // ── AI Agent 项目标准化交付工作流 ────────────────────────────
  {
    id: 'ai-agent-workflow',
    title: 'AI Agent 项目标准化交付工作流',
    summary: '围绕 AI 辅助开发中需求模糊、执行不可控、验收缺失和过程难复盘等问题，搭建一套 ChatGPT 总控、Claude Code 执行、Codex 验收、VS Code 承载的标准化项目交付流程。',
    tags: ['AI Agent', '项目管理', '需求拆解', '工作流设计', '质量验收', 'Git'],
    cover: '/images/ai-agent-workflow-cover.svg',
    date: '2026',
    detail: {
      background:
        '在使用 AI Agent 辅助开发个人项目时，单纯把需求交给 AI 并不能稳定产出可用的结果。AI 可以快速生成代码，但如果缺少明确的需求边界、任务说明和验收标准，容易出现改动范围失控、结果难以判断、问题无法定位等情况。对于非计算机科班背景的开发者来说，AI 工具能降低执行门槛，但没有流程约束，很难判断项目是否真的完成、哪里出了问题。基于这一观察，这个项目尝试为 AI 辅助开发建立角色分工、文档约束和验收节点，让每一轮开发有明确边界、有检查节点、有 Git 留痕。',
      approach:
        '这套流程将 AI 辅助开发拆解为需求定义、任务拆解、开发执行、代码验收、问题返工和版本留痕六个环节。ChatGPT 负责项目总控和需求拆解，Claude Code 负责实际开发执行，Codex 负责基于验收标准和 git diff 进行独立检查，VS Code 作为主力工作台承载项目文件、终端和 Git。每个环节对应 PRD、ARCHITECTURE、TASKS、ACCEPTANCE、BUG_REPORT 等固定文档，约束每一轮开发的目标、边界和返工路径。',
      contentBlocks: [
        {
          type:   'textOnly',
          title:  '项目核心问题',
          paragraphs: [
            'Vibe Coding 的常见问题不在于 AI 写不出代码，而在于没有明确边界：需求不固定、改动无记录、结果靠感觉判断，出了问题也难以定位。这个项目的出发点是为 AI 执行过程补上 PRD、任务书、验收标准和 bug 记录，形成可追踪的完整链路。',
          ],
          bullets: [],
          images: [],
          tags:  [],
          note:  '',
        },
        {
          type:   'steps',
          title:  '标准交付流程',
          paragraphs: [],
          bullets: [
            '用户提出业务想法或项目需求',
            'ChatGPT 将模糊需求拆解为 PRD、架构说明、任务书和验收标准',
            'Claude Code 基于 TASKS 执行开发，真实修改文件并运行命令',
            'Codex 基于 ACCEPTANCE 和 git diff 独立验收，输出通过、部分通过或不通过',
            'ChatGPT 将验收问题整理成 BUG_REPORT 和返工指令',
            'Claude Code 修复问题后由 Codex 复验',
            '通过后进行 Git commit，留下阶段成果',
          ],
          images: [],
          tags:  [],
          note:  '',
        },
        {
          type:   'imageText',
          title:  '三角色协同机制',
          paragraphs: [
            '流程将三个 AI 工具拆分为不同角色：ChatGPT 负责需求澄清、任务拆解和返工整理；Claude Code 负责读取项目、修改文件、运行命令；Codex 负责基于验收标准和 git diff 核查改动，输出通过或问题分级。角色分离的目的是让每个环节有明确的输入输出，而不是让一个工具包揽所有判断。',
          ],
          bullets: [],
          images: [
            { src: '/images/ai-agent-workflow-cover.svg', alt: 'AI Agent 项目交付闭环示意图', caption: 'ChatGPT 总控、Claude Code 执行、Codex 验收与 Git 留痕组成的 AI Agent 项目交付闭环。' },
          ],
          tags:  [],
          note:  '',
        },
        {
          type:   'gallery',
          title:  '标准文档体系',
          paragraphs: [
            '每个环节对应一份固定文档：PRD 定义项目目标和需求边界，ARCHITECTURE 说明项目结构和技术链路，TASKS 约束本轮开发范围，ACCEPTANCE 列出本轮的验收标准，BUG_REPORT 记录问题描述、返工指令和复验结果。文档作为 AI 执行的输入和输出容器，减少因理解偏差导致的改动跑偏。',
          ],
          bullets: [],
          images: [
            { src: '/images/ai-agent-workflow-docs-structure.png', alt: 'docs 文件夹结构', caption: 'AI_Coding_Workflow_Template/docs 文件夹结构，展示 PRD、ARCHITECTURE、TASKS、ACCEPTANCE、BUG_REPORT 等标准文档。' },
            { src: '/images/ai-agent-workflow-task-acceptance.png', alt: 'TASKS.md 与 ACCEPTANCE.md 内容片段', caption: 'TASKS.md 与 ACCEPTANCE.md 真实片段，展示开发任务书与验收标准的对应关系。' },
          ],
          tags:  [],
          note:  '',
        },
        {
          type:   'imageText',
          title:  '落地应用案例',
          paragraphs: [
            '这套工作流已经应用于采销智能分析台项目的开发与迭代。采销智能分析台是面向采销、商品运营和品类运营场景的数据分析产品原型，支持从 PostgreSQL 示例数据库或 Excel、CSV 文件中读取品类、品牌和 SKU 数据，完成销售排行、主推 SKU 推荐、图表展示和报告生成。具体操作中，由 ChatGPT 拆解需求并生成任务指令，Claude Code 执行功能开发，最后使用 Codex 对改动进行复查。',
          ],
          bullets: [],
          images: [
            { src: '/images/category-dashboard-overview.png', alt: '采销智能分析台整体界面', caption: '该工作流已用于采销智能分析台项目，图中展示的是采销业务分析产品原型页面。' },
          ],
          tags:  [],
          note:  '',
        },
        {
          type:   'imageText',
          title:  '项目价值',
          paragraphs: [
            '该项目关注的不是某个 AI 工具的使用，而是把模糊的业务想法拆解为结构化任务，并为 AI 执行过程建立任务边界、验收节点和 Git 留痕。相比自由式的 AI 辅助开发，这套方法的区别在于：每个环节有文档输入，改动有 git diff 可查，问题有 bug 记录可追。',
          ],
          bullets: [],
          images: [
            { src: '/images/ai-agent-workflow-git-log.png', alt: 'Git log 真实记录', caption: 'Git log 真实记录，展示作品集项目从新增内容、封面、图文优化到详情页增强的版本留痕。' },
          ],
          tags:  [],
          note:  '',
        },
      ],
      highlights: [
        '将 AI 辅助开发从随机试错转化为标准化交付流程',
        '建立 ChatGPT 总控、Claude Code 执行、Codex 验收的三角色协同机制',
        '通过 PRD、TASKS、ACCEPTANCE、BUG_REPORT 等文档约束 AI 执行过程',
        '引入 git diff、问题分级和复验机制，提高项目结果的可控性',
        '已应用于采销智能分析台等个人项目的完整开发与迭代周期',
      ],
      conclusion:
        '这套流程已经在实际项目中跑通，从需求拆解到 Git 留痕，每个环节都有对应的文档和输出。目前的版本适合个人项目场景，覆盖了从业务想法到阶段交付的完整链路。后续希望在团队协作或更复杂的需求场景下进一步验证和调整。',
    },
  },

  // ── 作品 03：SQL/Python 小白业务数据训练台 ──────────────────
  {
    id: 'sql-python-biz-trainer',
    title: 'AI 驱动的 SQL/Python 小白业务数据训练台',
    summary: '面向采销、商品运营、品类运营新人的 SQL/Python 业务数据训练与经营诊断工具，模拟从业务问题、字段口径、数据分析到经营判断和动作建议的完整流程。',
    tags: ['AI 编程', 'SQL/Python', '采销分析', '商品运营', '经营诊断', 'Streamlit', 'DuckDB', '数据分析'],
    cover: '/images/sql-python-trainer-cover.svg',
    date: '2026',
    detail: {
      background:
        '在采销、商品运营这类岗位，日常工作中有大量数据分析需求，但实际操作往往依赖手动整理 Excel 或等待数据团队出数，效率低且难以自己做判断。我想搭一个工具，模拟真实的分析流程：从业务问题出发，经过字段口径确认、SQL/Python 数据查询，到经营诊断和动作建议，把这套链路走通一遍。这不是替代真实业务系统的产品，而是帮自己理解"采销数据分析到底在分析什么"的训练台。整个项目从 V0.1 骨架搭建到 V0.7 半自由输入入口冻结，历经七个版本，每个版本对应一个具体的业务问题：字段怎么映射、分析任务怎么拆、经营角色怎么分类、诊断建议怎么表达。',
      approach:
        '开发过程采用 ChatGPT 总控、Claude Code 执行、Codex 验收的三角色协同方式。ChatGPT 负责每轮需求拆解和 PRD 草稿，Claude Code 实际修改代码和运行调试，Codex 负责基于验收标准和 git diff 独立检查改动，每轮通过后提交 commit 留痕，问题进入 BUG_REPORT 返工，再由 Codex 复验。业务逻辑上，我把采销分析拆成三层：第一层是字段层，解决"我的 Excel 里有什么字段、怎么映射到分析字段"；第二层是任务层，解决"我要分析哪个维度、什么指标、按什么排序"；第三层是诊断层，解决"数据结果说明什么经营问题、对应什么采销动作"。这三层对应 V0.5 字段映射、V0.3 模块组合分析和 V0.6 业务规则诊断。',
      contentBlocks: [
        // 模块 1：项目总览
        {
          type:   'imageText',
          title:  '从业务问题到经营诊断的 SQL/Python 训练台',
          paragraphs: [
            '这是一个用 Streamlit 搭建的本地原型，面向采销、商品运营、品类运营新人，支持从上传业务 Excel、确认字段口径，到执行 SQL/Python 数据分析、生成经营诊断报告的完整流程。',
            '工具内置 150 行模拟经营数据（30 SKU / 5 品类 / 19 品牌），无需准备外部数据即可演示。同时支持上传真实 CSV/XLSX，自动识别字段并允许手动确认字段映射关系。数据处理层用 pandas 和 DuckDB 双路径实现，每个分析结果都会生成 Markdown 诊断报告，测试覆盖 223 项 pytest。',
            '整个项目的重点不是界面有多好看，而是：把"采销数据分析"从一句话拆成可以执行的字段、任务和诊断规则，再用代码实现出来。',
          ],
          bullets: [],
          images: [
            { src: '/images/sql-python-trainer-fixed-task.png', alt: 'V0.2 固定任务卡分析结果截图', caption: '真实运行截图：固定任务卡 SKU 销售排行分析，显示 pandas 分析结果表格' },
          ],
          tags:  ['项目概览', 'Streamlit', 'DuckDB', '业务训练工具'],
          note:  '',
        },
        // 模块 2：版本迭代路径
        {
          type:   'steps',
          title:  '从 V0.1 到 V0.7 的产品迭代路径',
          paragraphs: [
            '每个版本对应一个具体的业务问题，从骨架搭建到半自由输入入口，逐步把分析链路走完整。',
          ],
          bullets: [
            'V0.1 项目骨架 — Streamlit 页面骨架 + 模拟数据生成，确认技术路线',
            'V0.2 固定任务卡 — 三个内置分析任务（SKU 销售排行 / 品牌占比 / 库存压力），pandas + DuckDB 双路径',
            'V0.3 模块组合分析 — 维度 × 指标 × 聚合 × 排序 × Top N 白名单组合，统一 result_value 字段契约',
            'V0.4 CSV/XLSX 上传 — UTF-8/GBK 编码自动识别，支持 .xlsx 文件',
            'V0.5 字段映射确认 — 中英文别名自动识别 + selectbox 手动确认 + 冲突检测阻断',
            'V0.6 业务规则诊断 — 六类经营角色识别（补货预警 / 库存压力 / 引流款等）+ 动态阈值 + 采销动作建议',
            'V0.7 半自由输入 + 作品集冻结版 — 关键词白名单路由，不接 AI API，稳定可控，223 项 pytest 覆盖',
          ],
          images: [],
          tags:  ['版本迭代', '产品演进', '业务驱动'],
          note:  '',
        },
        // 模块 3：数据上传与字段映射
        {
          type:   'imageText',
          title:  '让非标准业务表格进入分析链路',
          paragraphs: [
            '采销实际工作中拿到的数据往往是非标准的：字段名五花八门，"销售额"可能叫 sales_amt、也可能叫 gmv，日期字段可能叫 order_date、也可能叫 日期。V0.4/V0.5 解决的就是这个问题。',
            '上传 CSV 或 XLSX 后，系统会自动扫描字段名，通过中英文别名映射表（如 gmv → sales、日期 → date）尝试自动识别，识别不了的字段用 selectbox 让用户手动确认。如果同一个标准字段被映射了两次（比如同时有 date 和 DATE），系统会报错阻断，不允许进入分析，避免后续数据错误。',
            '这个模块来自真实场景的思考：字段口径确认是采销数据分析的第一步，做好了才能保证后面的 SQL 查的是对的字段。',
          ],
          bullets: [
            '支持 UTF-8 / GBK 编码自动识别，解决中文 Excel 乱码问题',
            '字段别名映射表覆盖常见采销字段（销售额、销量、库存、毛利率等）',
            '冲突检测：映射到同一标准字段的多个原始字段会触发报错阻断',
            '确认后的字段映射会持久化到本次 session，供后续分析任务复用',
          ],
          images: [
            { src: '/images/sql-python-trainer-upload-mapping.png', alt: 'CSV/XLSX 上传区域截图', caption: '真实运行截图：上传区域展开，展示文件上传入口和必需字段列表' },
          ],
          tags:  ['字段映射', 'CSV/XLSX', '数据接入', '口径确认'],
          note:  '',
        },
        // 模块 4：固定任务卡与模块组合分析
        {
          type:   'gallery',
          title:  '从固定问题到自由组合的分析训练',
          paragraphs: [
            'V0.2 的固定任务卡是三个内置的标准分析任务：SKU 销售排行、品牌销售占比、库存压力商品。每个任务都会同时展示 pandas 分析结果、Plotly 图表、对应的 DuckDB SQL 代码，以及用中文写的业务解释，目的是让用户看到"这行 SQL 对应的业务含义是什么"。',
            'V0.3 的模块组合分析把固定任务扩展成自由组合：维度（品牌/品类/SKU/供应商）× 指标（销售额/销量/库存/毛利率）× 聚合方式 × 排序方向 × Top N，用白名单限制组合范围，避免出现无意义的字段组合。所有分析任务的结果字段统一为 result_value，让后续的诊断模块可以用统一的格式处理不同任务的输出。',
          ],
          bullets: [
            'pandas + DuckDB 双路径：同一分析逻辑同时提供 Python 和 SQL 两种实现',
            '每个分析结果附带中文业务解释，而不只是数字表格',
            '白名单组合约束：限制维度 × 指标 × 聚合的合法组合，防止无效查询',
            'result_value 统一字段契约：让不同任务的输出格式保持一致',
          ],
          images: [
            { src: '/images/sql-python-trainer-fixed-task.png', alt: 'V0.2 固定任务卡 SKU 销售排行', caption: 'V0.2 固定任务卡：销售额 TOP 10 SKU 分析，pandas 结果表格' },
            { src: '/images/sql-python-trainer-combo.png', alt: 'V0.3 模块组合分析配置界面', caption: 'V0.3 模块组合：维度 × 指标 × 聚合方式 × Top N 自由组合' },
          ],
          tags:  ['固定任务卡', '模块组合', 'pandas', 'DuckDB', 'SQL'],
          note:  '',
        },
        // 模块 5：业务规则诊断
        {
          type:   'imageText',
          title:  '从数据结果到采销动作建议',
          paragraphs: [
            'V0.6 是这个项目里业务含量最高的一个版本。在得到 SKU 销售排行和库存数据之后，下一步是判断每个 SKU 处于什么经营状态，对应什么采销动作。',
            '我把 SKU 的经营状态拆成六类角色：主推候选（高销量 + 高销售额）、补货预警（销量高但库存低）、库存压力（库存高但销量低）、引流款（高销量 + 低毛利率）、潜力高毛利款（毛利率高但销量偏低）、常规观察款（其余 SKU）。每类角色的识别阈值是动态计算的（基于当前数据集的中位数和分位数），而不是写死的固定数字，所以换一份数据也能正常运行。',
            '每次诊断都会生成一份 Markdown 报告，包括各类角色的 SKU 列表、阈值说明、高优先级动作建议（例如"以下 3 个 SKU 存在补货预警，建议优先补货"）。',
          ],
          bullets: [
            '六类经营角色：主推候选 / 补货预警 / 库存压力 / 引流款 / 潜力高毛利款 / 常规观察款',
            '动态阈值：基于当前数据集的中位数和分位数计算，适配不同规模的数据',
            '诊断报告：每次输出 Markdown 格式，包含分类结果、阈值说明和动作建议',
            '高优先级 SKU 列表：单独提取需要立即关注的商品，辅助采购决策',
          ],
          images: [
            { src: '/images/sql-python-trainer-business-diagnosis.png', alt: 'V0.6 业务规则诊断截图', caption: '真实运行截图：V0.6 业务规则诊断，展示六类经营角色标签和 SKU 分类结果' },
          ],
          tags:  ['业务规则诊断', '经营角色', '动作建议', '采销决策'],
          note:  '// 六类角色分类是这个项目里反复调整最多的部分，来自对采销实际工作场景的理解',
        },
        // 模块 6：半自由输入入口
        {
          type:   'imageText',
          title:  '不用接 AI，也能做可控的半自由分析入口',
          paragraphs: [
            'V0.7 加了一个半自由输入入口：用户可以用自然语言输入问题，系统识别意图后路由到对应的分析任务。这个功能特意不接 OpenAI 或任何外部 AI API，而是用关键词白名单匹配。',
            '例如输入"哪些 SKU 卖得最好"，系统识别到关键词"SKU"+"最好"，路由到销售排行任务；输入"帮我做经营诊断"，识别到"诊断"，路由到业务规则诊断；输入"今天天气怎么样"，没有命中白名单，返回友好的无法识别提示，而不会报错崩溃。',
            '这个设计的出发点是：内部运营工具场景里，稳定比灵活更重要。白名单路由的好处是输出可预期、没有幻觉、不依赖网络，缺点是覆盖范围有限。V0.7 冻结后，AI 自由输入功能在 v1.0-ai-input 分支单独开发，不影响主分支稳定性。',
          ],
          bullets: [
            '关键词白名单路由：不接外部 AI API，不依赖网络，输出稳定可预期',
            '路由解释面板：每次识别后展示"命中关键词 + 路由到哪个任务"，方便理解系统判断逻辑',
            '安全性验证：pytest 路由测试 15 项，确认无 eval/exec 直接 SQL 注入风险',
            '未识别友好处理：没有命中的输入返回提示而不是报错，避免界面崩溃',
          ],
          images: [
            { src: '/images/sql-python-trainer-semi-free-query.png', alt: 'V0.7 半自由分析入口截图', caption: '真实运行截图：V0.7 半自由输入入口，展示输入框、白名单匹配和未识别友好提示' },
          ],
          tags:  ['半自由输入', '白名单路由', '稳定可控', '无 API 依赖'],
          note:  '',
        },
        // 模块 7：项目价值
        {
          type:   'textOnly',
          title:  '这个项目展示了什么能力',
          paragraphs: [
            '这个项目的核心不是技术复杂度，而是业务理解深度。把"采销数据分析"拆成字段口径、分析任务、经营角色、动作建议四层，再用代码实现，需要对采销业务流程有具体的理解，不是调几个 API 就能搭出来的。',
            '开发过程完整应用了 ChatGPT 总控、Claude Code 执行、Codex 验收的三角色协同方式，每个版本有 PRD、TASKS、ACCEPTANCE、BUG_REPORT 等标准文档，有 git commit 留痕，有 pytest 测试覆盖，是一个有完整开发流程的个人项目，而不是随手跑通的脚本。',
            '223 项 pytest 覆盖包括字段映射冲突检测、路由安全性（确认无 eval/exec）、边界值处理（空数据集、缺失字段、极值 SKU），这些测试覆盖了业务场景下最容易出问题的地方。',
          ],
          bullets: [
            '业务拆解能力：把采销问题拆成字段 / 分析任务 / 经营角色 / 动作建议四层结构',
            'SQL + Python 双路径：同一业务问题同时有 DuckDB SQL 和 pandas 实现',
            'AI 协同开发经验：ChatGPT 总控、Claude Code 执行、Codex 验收的完整流程',
            '测试驱动：223 项 pytest，含字段冲突、路由安全、边界值等场景',
            '版本管理意识：七个版本迭代，每个版本对应业务问题，有 tag 留痕，主分支保持稳定',
          ],
          images: [],
          tags:  ['业务理解', 'AI 协同开发', '测试覆盖', '版本管理'],
          note:  '',
        },
      ],
      highlights: [
        '把"采销数据分析"拆成字段口径、分析任务、经营角色、动作建议四层结构，并用代码一一实现。',
        '七个版本迭代，每个版本对应一个具体业务问题：字段映射、模块组合、经营诊断、半自由输入，逐步走完分析链路。',
        '数据处理层 pandas + DuckDB 双路径，同一业务问题同时有 Python 和 SQL 两种实现，便于对比学习。',
        'V0.6 业务规则诊断基于动态阈值识别六类经营角色（补货预警 / 库存压力 / 引流款等），来自真实采销场景的业务理解。',
        'V0.7 半自由输入入口用白名单路由而不是接外部 AI API，稳定、可控、无幻觉，有 15 项路由安全测试覆盖。',
        'ChatGPT 总控、Claude Code 执行、Codex 验收的三角色协同开发，223 项 pytest 覆盖，有完整的文档体系和 git 留痕。',
      ],
      conclusion:
        '这个项目让我把对采销业务的理解落地成了一个可以实际运行的工具。从 V0.1 搭骨架到 V0.7 冻结，最大的收获不是某个技术点，而是"把业务问题拆成可以编程实现的结构"这件事本身——字段是什么、任务是什么、判断标准是什么、动作建议是什么，每一步都需要先搞清楚业务含义，再想怎么用代码表达。后续 v1.0-ai-input 分支会尝试接入真正的 AI 自由输入能力，但那是另一个阶段的事了。',
    },
  },

  // ── 占位 04：steps + imageText，展示步骤列表 ─────────────────
  {
    id: 'placeholder-04',
    title: '作品占位 04',
    summary: '这里是作品一句话概述，后续替换为真实内容。',
    tags: ['标签P', '标签Q', '标签R'],
    cover: '/images/placeholder-cover.svg',
    date: '2026-01',
    detail: {
      background: '这里填写项目背景介绍。',
      approach:   '这里填写创作或实现思路。',
      contentBlocks: [
        {
          type:   'steps',           // 步骤 / 流程 / 方法列表
          title:  '实现步骤 / 工作流程',
          paragraphs: [
            '这里简单描述这个流程的背景或目标。',
          ],
          bullets: [
            '第一步：做了什么，解决了什么问题。',
            '第二步：继续展开。',
            '第三步：补充说明。',
            '第四步：最终结果。',
          ],
          images: [],
          tags:  ['流程', '方法'],
          note:  '',
        },
        {
          type:   'imageText',
          layout: 'left',
          title:  '核心产出',
          paragraphs: [
            '这里写核心产出的说明，配一张结果截图。',
          ],
          bullets: [],
          images: [
            { src: '/images/placeholder-detail.svg', alt: '核心产出截图', caption: '' },
          ],
          tags:  ['成果'],
          note:  '',
        },
      ],
      highlights: ['亮点一。', '亮点二。'],
      conclusion: '总结与收获占位文案。',
    },
  },

]

export default projects
