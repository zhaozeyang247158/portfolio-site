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

  // ── 占位 02：imageText + gallery，展示多图 ─────────────────
  {
    id: 'placeholder-02',
    title: '作品占位 02',
    summary: '这里是作品一句话概述，后续替换为真实内容。',
    tags: ['标签X', '标签Y'],
    cover: '/images/placeholder-cover.svg',
    date: '2025-06',
    detail: {
      background: '这里填写项目背景介绍，2-4 句。',
      approach:   '这里填写创作或实现思路，2-4 句。',
      contentBlocks: [
        {
          type:   'imageText',
          layout: 'left',
          title:  '主要功能模块',
          paragraphs: [
            '这里写功能说明，一段或多段均可。',
          ],
          bullets: [],
          images: [
            { src: '/images/placeholder-detail.svg', alt: '功能截图', caption: '' },
          ],
          tags:  ['核心功能'],
          note:  '',
        },
        {
          type:   'gallery',         // 多图展示
          title:  '过程截图 / 效果图集',
          paragraphs: [
            '这里是多图展示模块，适合放设计稿、过程截图、对比图等。images 数组里放几张就显示几张。',
          ],
          bullets: [],
          images: [
            { src: '/images/placeholder-detail.svg', alt: '过程图一', caption: '步骤一' },
            { src: '/images/placeholder-detail.svg', alt: '过程图二', caption: '步骤二' },
            { src: '/images/placeholder-detail.svg', alt: '过程图三', caption: '步骤三' },
          ],
          tags:  [],
          note:  '← 可替换为真实截图',
        },
      ],
      highlights: ['亮点一。', '亮点二。'],
      conclusion: '总结与收获占位文案。',
    },
  },

  // ── 占位 03：fullImage + textOnly，展示大图和纯文字 ─────────
  {
    id: 'placeholder-03',
    title: '作品占位 03',
    summary: '这里是作品一句话概述，后续替换为真实内容。',
    tags: ['标签M', '标签N'],
    cover: '/images/placeholder-cover.svg',
    date: '2025-09',
    detail: {
      background: '这里填写项目背景介绍。',
      approach:   '这里填写创作或实现思路。',
      contentBlocks: [
        {
          type:   'fullImage',       // 单张大图，全宽展示
          title:  '最终界面 / 整体效果',
          paragraphs: [
            '这里可以写一句对整体效果的简短说明，或者留空。',
          ],
          bullets: [],
          images: [
            { src: '/images/placeholder-detail.svg', alt: '整体界面大图', caption: '最终效果展示' },
          ],
          tags:  [],
          note:  '',
        },
        {
          type:   'textOnly',        // 纯文字，不放图片
          title:  '方法与思考',
          paragraphs: [
            '这里写纯文字内容，不需要配图时使用 textOnly 类型。',
            '可以写多段，每段是数组里的一个字符串。',
            '适合写分析过程、复盘内容、方法论说明等不需要截图的部分。',
          ],
          bullets: [],
          images: [],
          tags:  [],
          note:  '// 纯文字模块，无需图片',
        },
      ],
      highlights: ['亮点一。'],
      conclusion: '总结与收获占位文案。',
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
