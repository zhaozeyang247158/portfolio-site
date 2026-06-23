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
//    layout:     'left',                  // 可选：'left'（默认左图右文）| 'right'（右图左文）
//                                         // 不填时按 index 自动交错
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
//  imageText   图文并排（有图有文，默认）
//  textOnly    纯文字，不放图片
//  gallery     多图展示（2张以上），适合过程截图、对比图
//  fullImage   单张大图展示，全宽，适合整体界面图、最终效果图
//  steps       步骤 / 流程 / 方法列表，用 bullets 字段填内容（'list' 为旧别名，仍可用）
//
// ── 各 type 的建议字段组合 ───────────────────────────────────
//
//  imageText  : images(1张) + paragraphs + layout(可选)
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

  // ── 占位 01：2 个 imageText 模块，展示常规图文布局 ──────────
  {
    id: 'placeholder-01',
    title: '作品占位 01',
    summary: '这里是作品一句话概述，后续替换为真实内容。',
    tags: ['标签A', '标签B', '标签C'],
    cover: '/images/placeholder-cover.svg',
    date: '2025-01',
    detail: {
      background:
        '这里填写项目背景介绍，说明项目的起源、动机或需要解决的问题。可以写 2-4 句。',
      approach:
        '这里填写创作或实现思路，包括技术选型、方法论、关键决策等。可以写 2-4 句。',
      contentBlocks: [
        {
          type:   'imageText',
          layout: 'left',           // 左图右文
          title:  '核心功能展示',
          paragraphs: [
            '这里写第一段说明，描述这个模块做了什么、解决了什么问题。',
            '这里写第二段，可以补充技术细节或使用方式。支持多段落，不限数量。',
          ],
          bullets: [],
          images: [
            { src: '/images/placeholder-detail.svg', alt: '核心功能截图', caption: '' },
          ],
          tags:  ['功能一', '技术点'],
          note:  '← 替换成真实截图效果更佳',
        },
        {
          type:   'imageText',
          layout: 'right',          // 右图左文
          title:  '数据与结果',
          paragraphs: [
            '这里写第二个模块的说明。layout 设为 right 时，图片在右侧、文字在左侧。',
          ],
          bullets: [
            '可量化指标一',
            '可量化指标二',
            '可量化指标三',
          ],
          images: [
            { src: '/images/placeholder-detail.svg', alt: '数据结果图', caption: '数据来源：占位' },
          ],
          tags:  ['数据', '结果'],
          note:  '',
        },
      ],
      highlights: [
        '亮点一：描述本项目最有价值的特点。',
        '亮点二：技术突破或创新点。',
        '亮点三：可量化的成果或指标。',
      ],
      conclusion:
        '总结与收获：通过本项目学到了什么，对个人成长的意义，以及未来可以改进的方向。',
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
