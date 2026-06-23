// ============================================================
// 作品数据文件 — 后续添加新作品只需修改这里
// ============================================================
//
// 字段说明：
//   id            唯一字符串，用于路由 /project/:id
//   title         作品名称
//   summary       一句话概述（卡片 + 详情页顶部）
//   tags          标签数组，例如 ['AI编程', 'Python']
//   cover         封面图路径，放在 public/images/ 下
//   date          完成时间，格式 'YYYY-MM'
//
//   detail:
//     background        项目背景（字符串）
//     approach          创作/实现思路（字符串）
//
//     contentBlocks     核心内容展示：图文交错模块（数组）
//       每项结构：
//         image         图片路径（public/images/ 下）
//         imageAlt      图片 alt 文字
//         title         模块小标题
//         text          2-4 句说明（字符串）
//         note          可选手写批注（字符串，留空则不显示）
//         tags          可选标签数组
//
//     highlights        项目亮点（字符串数组）
//     conclusion        总结与收获（字符串）
//
// 新增真实作品时：
//   1. 复制下方任一 placeholder 对象，修改所有字段
//   2. 把封面图放到 public/images/，更新 cover 路径
//   3. 把详情图放到 public/images/，更新 contentBlocks[].image 路径
//   4. 把旧的 core / images 字段删掉即可（页面已不使用）
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
        '这里填写项目背景介绍，说明项目的起源、动机或需要解决的问题。可以写 2-4 句。',
      approach:
        '这里填写创作或实现思路，包括技术选型、方法论、关键决策等。可以写 2-4 句。',

      // 核心内容：图文交错展示模块
      // 奇数模块左图右文，偶数模块右图左文（移动端统一上下排）
      contentBlocks: [
        {
          image: '/images/placeholder-detail.svg',
          imageAlt: '核心模块一示意图',
          title: '核心模块一标题',
          text: '这里写对应模块的 2-4 句说明，描述这部分做了什么、解决了什么问题、有什么特点。读者可以边看图边理解文字。',
          note: '← 替换成真实截图效果更佳',
          tags: ['功能一', '技术点'],
        },
        {
          image: '/images/placeholder-detail.svg',
          imageAlt: '核心模块二示意图',
          title: '核心模块二标题',
          text: '这里写第二个模块的说明。图文位置会自动左右交替，营造阅读节奏感。',
          note: '',
          tags: ['数据', '结果'],
        },
        {
          image: '/images/placeholder-detail.svg',
          imageAlt: '核心模块三示意图',
          title: '核心模块三标题',
          text: '第三个模块的说明。如果模块不足三个，直接删除多余项目即可，结构会自动适应。',
          note: '// 后续补充真实内容',
          tags: [],
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
      contentBlocks: [
        {
          image: '/images/placeholder-detail.svg',
          imageAlt: '模块一示意图',
          title: '模块一标题',
          text: '说明文字占位，后续替换为真实内容。',
          note: '',
          tags: ['标签'],
        },
        {
          image: '/images/placeholder-detail.svg',
          imageAlt: '模块二示意图',
          title: '模块二标题',
          text: '说明文字占位，后续替换为真实内容。',
          note: '',
          tags: [],
        },
      ],
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
      contentBlocks: [
        {
          image: '/images/placeholder-detail.svg',
          imageAlt: '模块一示意图',
          title: '模块一标题',
          text: '说明文字占位，后续替换为真实内容。',
          note: '← 可替换为真实截图',
          tags: ['核心功能'],
        },
        {
          image: '/images/placeholder-detail.svg',
          imageAlt: '模块二示意图',
          title: '模块二标题',
          text: '说明文字占位，后续替换为真实内容。',
          note: '',
          tags: [],
        },
        {
          image: '/images/placeholder-detail.svg',
          imageAlt: '模块三示意图',
          title: '模块三标题',
          text: '说明文字占位，后续替换为真实内容。',
          note: '',
          tags: [],
        },
      ],
      highlights: ['亮点一。', '亮点二。', '亮点三。'],
      conclusion: '总结与收获占位文案。',
    },
  },
]

export default projects
