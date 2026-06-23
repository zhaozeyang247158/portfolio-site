// ============================================================
// 作品数据文件 — 后续添加新作品只需修改这里
// ============================================================
// 每个作品对象结构说明：
//   id        : 唯一字符串，用于路由 /project/:id
//   title     : 作品名称
//   summary   : 一句话概述（卡片和详情页顶部都用）
//   tags      : 标签数组，例如 ['AI编程', 'Python']
//   cover     : 封面图路径，放在 public/images/ 下
//   date      : 完成时间，格式 'YYYY-MM'
//   detail    : 详情页各节内容
//     .background   : 01 项目背景
//     .approach     : 02 创作/实现思路
//     .core         : 03 核心内容展示（字符串或字符串数组）
//     .images       : 04 图片展示区（路径数组）
//     .highlights   : 05 项目亮点（字符串数组）
//     .conclusion   : 06 总结与收获
// ============================================================

const projects = [
  {
    id: 'placeholder-01',
    title: '作品占位 01',
    summary: '这里是作品一句话概述，后续替换为真实内容。',
    tags: ['标签A', '标签B', '标签C'],
    cover: '/images/placeholder-cover.svg',
    date: '2025-01',
    detail: {
      background:
        '这里填写项目背景介绍，说明项目的起源、动机或需要解决的问题。',
      approach:
        '这里填写创作或实现思路，包括技术选型、方法论、关键决策等。',
      core: [
        '核心内容要点一：可以是功能描述、数据结果或主要模块介绍。',
        '核心内容要点二：继续展开说明。',
        '核心内容要点三：补充细节。',
      ],
      images: [
        '/images/placeholder-detail.svg',
        '/images/placeholder-detail.svg',
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
  {
    id: 'placeholder-02',
    title: '作品占位 02',
    summary: '这里是作品一句话概述，后续替换为真实内容。',
    tags: ['标签X', '标签Y'],
    cover: '/images/placeholder-cover.svg',
    date: '2025-06',
    detail: {
      background: '这里填写项目背景介绍。',
      approach: '这里填写创作或实现思路。',
      core: ['核心内容要点一。', '核心内容要点二。'],
      images: ['/images/placeholder-detail.svg'],
      highlights: ['亮点一。', '亮点二。'],
      conclusion: '总结与收获占位文案。',
    },
  },
  {
    id: 'placeholder-03',
    title: '作品占位 03',
    summary: '这里是作品一句话概述，后续替换为真实内容。',
    tags: ['标签M', '标签N', '标签O'],
    cover: '/images/placeholder-cover.svg',
    date: '2026-01',
    detail: {
      background: '这里填写项目背景介绍。',
      approach: '这里填写创作或实现思路。',
      core: ['核心内容要点一。', '核心内容要点二。', '核心内容要点三。'],
      images: [
        '/images/placeholder-detail.svg',
        '/images/placeholder-detail.svg',
      ],
      highlights: ['亮点一。', '亮点二。', '亮点三。'],
      conclusion: '总结与收获占位文案。',
    },
  },
]

export default projects
