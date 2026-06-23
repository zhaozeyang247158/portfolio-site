// ============================================================
// 作品数据文件
// 后续新增 / 修改 / 删除作品，只改这一个文件，不需要碰页面组件
// ============================================================
//
// ┌─ 新增一个作品 ─────────────────────────────────────────────
// │  在 projects 数组末尾追加一个对象，结构见下方模板。
// │  图片放到 public/images/，路径写 /images/文件名.jpg
// └────────────────────────────────────────────────────────────
//
// ┌─ 删除一个作品 ─────────────────────────────────────────────
// │  删除 projects 数组里对应的整个 { id, title, ... } 对象
// │  页面自动减少，不需要改其他文件
// └────────────────────────────────────────────────────────────
//
// ┌─ 新增一个核心内容模块 ──────────────────────────────────────
// │  在对应作品的 detail.contentBlocks 数组末尾追加一个对象：
// │  {
// │    image:    '/images/xxx.jpg',   // 图片路径
// │    imageAlt: '图片说明文字',       // alt 文本（可省略，用 title 代替）
// │    title:    '模块标题',
// │    text:     '2-4 句说明文字。',
// │    note:     '← 可选手写批注',     // 留空填 ''
// │    tags:     ['标签A', '标签B'],   // 留空填 []
// │  }
// │  编号和图文左右交错会自动计算，不需要手动指定
// └────────────────────────────────────────────────────────────
//
// ┌─ 删除一个核心内容模块 ──────────────────────────────────────
// │  删除 detail.contentBlocks 数组里对应的对象即可
// │  编号会自动重新计算
// └────────────────────────────────────────────────────────────
//
// ┌─ contentBlocks 为 0 个时 ────────────────────────────────
// │  detail.contentBlocks 填 [] 或直接省略这个字段
// │  详情页会显示「核心内容待补充」，不报错
// └────────────────────────────────────────────────────────────
//
// ┌─ 各字段说明 ────────────────────────────────────────────────
// │  id        必填，唯一字符串，用于 URL /project/<id>
// │  title     必填，作品名称
// │  summary   必填，一句话概述（出现在卡片和详情页顶部）
// │  tags      必填，标签数组（可为空数组 []）
// │  cover     必填，封面图路径，图片放 public/images/
// │  date      必填，完成时间，格式 'YYYY-MM'
// │  detail
// │    .background      项目背景，2-4 句字符串
// │    .approach        创作/实现思路，2-4 句字符串
// │    .contentBlocks   核心内容模块数组（见上方说明）
// │    .highlights      项目亮点，字符串数组（可为 []）
// │    .conclusion      总结与收获，字符串
// └────────────────────────────────────────────────────────────

const projects = [

  // ── 占位 01：4 个 contentBlocks（验证多模块连续渲染）──
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
          image:    '/images/placeholder-detail.svg',
          imageAlt: '模块一示意图',
          title:    '核心模块一标题',
          text:     '这里写对应模块的 2-4 句说明，描述这部分做了什么、解决了什么问题。读者可以边看图边理解文字。',
          note:     '← 替换成真实截图效果更佳',
          tags:     ['功能一', '技术点'],
        },
        {
          image:    '/images/placeholder-detail.svg',
          imageAlt: '模块二示意图',
          title:    '核心模块二标题',
          text:     '第二个模块的说明。图文位置会自动左右交替，营造阅读节奏感。',
          note:     '',
          tags:     ['数据', '结果'],
        },
        {
          image:    '/images/placeholder-detail.svg',
          imageAlt: '模块三示意图',
          title:    '核心模块三标题',
          text:     '第三个模块的说明。如果模块不足，直接删除对应对象，编号自动重新计算。',
          note:     '',
          tags:     [],
        },
        {
          image:    '/images/placeholder-detail.svg',
          imageAlt: '模块四示意图',
          title:    '核心模块四标题',
          text:     '第四个模块。这里演示多于 3 个模块时的连续渲染效果，布局不会崩坏。',
          note:     '// 后续补充真实内容',
          tags:     ['扩展'],
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

  // ── 占位 02：2 个 contentBlocks ──
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
          image:    '/images/placeholder-detail.svg',
          imageAlt: '模块一示意图',
          title:    '模块一标题',
          text:     '说明文字占位，后续替换为真实内容。',
          note:     '',
          tags:     ['标签'],
        },
        {
          image:    '/images/placeholder-detail.svg',
          imageAlt: '模块二示意图',
          title:    '模块二标题',
          text:     '说明文字占位，后续替换为真实内容。',
          note:     '',
          tags:     [],
        },
      ],
      highlights: ['亮点一。', '亮点二。'],
      conclusion: '总结与收获占位文案。',
    },
  },

  // ── 占位 03：1 个 contentBlocks（验证单模块不报错）──
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
          image:    '/images/placeholder-detail.svg',
          imageAlt: '模块一示意图',
          title:    '唯一核心模块',
          text:     '只有一个模块时，正常显示左图右文，不报错，不崩布局。',
          note:     '← 可替换为真实截图',
          tags:     ['核心功能'],
        },
      ],
      highlights: ['亮点一。'],
      conclusion: '总结与收获占位文案。',
    },
  },

  // ── 占位 04：0 个 contentBlocks（验证空状态不报错）──
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
      contentBlocks: [],           // 空数组：详情页显示「核心内容待补充」
      highlights: ['亮点一。', '亮点二。'],
      conclusion: '总结与收获占位文案。',
    },
  },

]

export default projects
