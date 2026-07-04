# 赵泽阳作品集 Portfolio Site

个人作品集网站，技术栈：React + Vite + Tailwind CSS。

- **在线访问：** https://portfolio-site-lcplnqsvg-zhao-ze-yang.vercel.app
- **GitHub 仓库：** https://github.com/zhaozeyang247158/portfolio-site
- **部署平台：** Vercel（每次 push main 自动重部署）

---

## 本地启动

```bash
cd E:\cc所有项目\portfolio-site

# 安装依赖（只需第一次）
npm install

# 启动开发服务器
npm run dev
```

浏览器访问 `http://localhost:5173`

---

## 打包构建

```bash
npm run build
```

输出到 `dist/` 目录，可直接部署。

预览构建结果：

```bash
npm run preview
```

---

## 部署到 Vercel（推荐）

1. 将项目推送到 GitHub 仓库
2. 登录 [vercel.com](https://vercel.com)，Import 该仓库
3. Framework Preset 选 **Vite**，其余保持默认
4. 点击 Deploy

Vercel 会自动在每次 push 后重新部署。

---

## 部署到 GitHub Pages

1. 修改 `vite.config.js`，将 `base` 改为仓库名：
   ```js
   base: '/your-repo-name/',
   ```
2. 安装 gh-pages：
   ```bash
   npm install --save-dev gh-pages
   ```
3. `package.json` 的 `scripts` 中加入：
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. 执行：
   ```bash
   npm run build && npm run deploy
   ```

---

## 页面路由

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 Landing | 封面页，点击进入作品集 |
| `/portfolio` | 作品集总览 | 所有作品卡片列表 |
| `/projects/:id` | 作品详情 | 点击卡片自动进入，不在导航栏显示 |
| `/contact` | 联系我 | 姓名、邮箱、电话、简历下载 |

---

## 如何修改网站内容

### 修改个人信息（姓名 / 邮箱 / 电话 / 简历路径）

**只改一个文件：`src/data/profile.js`**

```js
const profile = {
  name:   '赵泽阳',
  email:  '2495606018@qq.com',
  phone:  '17610579351',
  resume: '/resume.pdf',
  school: '中国农业大学',
  year:   '2027届毕业生',
}
```

Navbar 姓名、Footer 姓名学校、Contact 页所有联系信息均从此处读取，改一处全站生效。

---

### 替换简历 PDF

1. 将简历文件命名为 `resume.pdf`，放到 `public/resume.pdf`
2. 无需修改代码，Contact 页的下载按钮自动指向该文件

---

### 新增作品

**只改一个文件：`src/data/projects.js`**

在 `projects` 数组末尾追加一个对象，保存后无需改任何页面文件：

```js
{
  id: 'my-new-project',          // 唯一 ID，用于 URL /projects/my-new-project
  title: '我的新项目',
  summary: '一句话概述这个项目做了什么。',
  tags: ['Python', 'AI', '数据分析'],
  cover: '/images/my-cover.jpg', // 封面图放 public/images/
  date: '2026-06',
  detail: {
    background: '项目背景介绍，2-4 句。',
    approach:   '实现思路介绍，2-4 句。',
    contentBlocks: [ /* 见下方各类型模块说明 */ ],
    highlights: ['亮点一。', '亮点二。'],
    conclusion: '总结与收获，2-4 句。',
  },
},
```

---

### 删除作品

删除 `src/data/projects.js` 中对应的对象，页面自动减少。

---

### 如何添加核心内容模块

所有模块统一放在 `detail.contentBlocks` 数组中，有几个就显示几个，**编号自动计算**。  
图片统一放 `public/images/`，路径写 `/images/文件名.jpg`。

#### 1. 普通图文模块（imageText）

左图右文或右图左文，最常用：

```js
{
  type:   'imageText',
  layout: 'left',              // 'left' 左图右文 | 'right' 右图左文
  title:  '模块标题',
  paragraphs: [
    '第一段说明文字。',
    '第二段说明文字，支持任意多段。',
  ],
  bullets: [],                 // 要点列表，不需要就填 []
  images: [
    { src: '/images/my-screenshot.jpg', alt: '截图说明', caption: '图片下注（可留空）' },
  ],
  tags:  ['标签1', '标签2'],   // 不需要就填 []
  note:  '← 手写批注',         // 不需要就填 ''
},
```

#### 2. 多图展示模块（gallery）

适合过程截图、设计稿、对比图：

```js
{
  type:   'gallery',
  title:  '过程截图 / 效果图集',
  paragraphs: ['这里写对这组图的整体说明（可留空）。'],
  bullets: [],
  images: [
    { src: '/images/step-1.jpg', alt: '步骤一', caption: '步骤一' },
    { src: '/images/step-2.jpg', alt: '步骤二', caption: '步骤二' },
    { src: '/images/step-3.jpg', alt: '步骤三', caption: '步骤三' },
  ],
  tags:  [],
  note:  '',
},
```

#### 3. 纯文字模块（textOnly）

不需要配图时使用，适合分析、复盘、方法论：

```js
{
  type:   'textOnly',
  title:  '方法与思考',
  paragraphs: [
    '第一段文字。',
    '第二段文字。支持任意多段。',
  ],
  bullets: ['要点一', '要点二'],  // 可选
  images: [],
  tags:  [],
  note:  '',
},
```

#### 4. 单张大图模块（fullImage）

整体界面图、最终效果图，图片全宽展示：

```js
{
  type:   'fullImage',
  title:  '最终界面 / 整体效果',
  paragraphs: ['一句简短说明（可留空）。'],
  bullets: [],
  images: [
    { src: '/images/final-result.jpg', alt: '最终效果', caption: '最终效果展示' },
  ],
  tags:  [],
  note:  '',
},
```

#### 5. 步骤 / 流程列表模块（steps）

适合展示步骤、实现流程、方法拆解，用带序号圆圈的有序列表：

```js
{
  type:   'steps',
  title:  '实现步骤',
  paragraphs: ['简短背景说明（可留空）。'],
  bullets: [
    '第一步：做了什么。',
    '第二步：继续展开。',
    '第三步：最终结果。',
  ],
  images: [],                  // 也可以配图
  tags:  ['流程'],
  note:  '',
},
```

#### 通用说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `type` | 字符串 | `imageText` / `textOnly` / `gallery` / `fullImage` / `steps` |
| `layout` | 字符串 | 仅 imageText 使用：`'left'`（左图右文）或 `'right'`（右图左文）|
| `title` | 字符串 | 模块标题，必填 |
| `paragraphs` | 字符串数组 | 正文段落，可多段，无则填 `[]` |
| `bullets` | 字符串数组 | 要点 / 步骤列表，无则填 `[]` |
| `images` | 对象数组 | `{ src, alt, caption }`，无图填 `[]` |
| `tags` | 字符串数组 | 模块标签，无则填 `[]` |
| `note` | 字符串 | 手写批注，无则填 `''` |

---

### 修改首页文字

打开 `src/pages/Landing.jsx`，搜索以下关键词直接修改：

| 内容 | 搜索关键词 |
|------|-----------|
| 副标题（姓名/学校/届别） | `赵泽阳　｜　中国农业大学` |
| 一句话介绍 | `这是一个用于展示个人项目` |
| 按钮文字 | `进入作品集` |

---

### 替换作品封面图

1. 把图片放到 `public/images/`，例如 `public/images/my-cover.jpg`
2. 打开 `src/data/projects.js`，将对应作品的 `cover` 改为 `/images/my-cover.jpg`
3. 推荐尺寸：1200 × 720px（5:3 比例）

---

### 替换详情页图片（图文模块）

1. 把图片放到 `public/images/`
2. 打开 `src/data/projects.js`，找到对应作品的 `detail.contentBlocks`，更新 `images[].src` 路径并修改 `title`、`paragraphs`
3. 模块数量、类型不限，1 块到 10 块均可正常渲染

---

## 文件结构

```
portfolio-site/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf              # 简历 PDF（放这里即可，Contact 自动引用）
│   └── images/
│       ├── placeholder-cover.svg
│       ├── placeholder-detail.svg
│       └── ...                 # 作品图片放这里
├── src/
│   ├── components/
│   │   ├── DoodleTeacher.jsx   # Landing 页讲解小人
│   │   ├── DoodleSignHolder.jsx
│   │   ├── DoodleLounging.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProjectCard.jsx
│   ├── data/
│   │   ├── profile.js          # ★ 个人信息（姓名/邮箱/电话/简历）
│   │   └── projects.js         # ★ 作品数据
│   ├── pages/
│   │   ├── Contact.jsx         # 联系页
│   │   ├── Landing.jsx         # 首页
│   │   ├── Portfolio.jsx       # 作品集总览
│   │   └── ProjectDetail.jsx   # 作品详情（数据驱动，不需要修改）
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 最常修改的文件

| 文件 | 用途 |
|------|------|
| `src/data/projects.js` | 新增 / 编辑 / 删除作品 |
| `src/data/profile.js` | 修改姓名、邮箱、电话、简历路径 |
| `public/images/` | 放作品封面图和详情图 |
| `public/resume.pdf` | 替换简历（直接覆盖文件） |
| `src/pages/Landing.jsx` | 改首页标题 / 介绍文字 |
