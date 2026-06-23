# 赵泽阳作品集 Portfolio Site

个人作品集网站，技术栈：React + Vite + Tailwind CSS。

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

## 如何修改网站内容

### 新增作品

**只改一个文件：`src/data/projects.js`**

在 `projects` 数组末尾追加一个对象：

```js
{
  id: 'my-new-project',           // 唯一 ID，用于 URL /project/my-new-project
  title: '我的新项目',
  summary: '一句话概述这个项目做了什么。',
  tags: ['Python', 'AI', '数据分析'],
  cover: '/images/my-project-cover.jpg',
  date: '2026-06',
  detail: {
    background: '项目背景介绍...',
    approach: '实现思路...',
    core: [
      '核心内容第一点。',
      '核心内容第二点。',
    ],
    images: [
      '/images/my-project-01.jpg',
      '/images/my-project-02.jpg',
    ],
    highlights: [
      '亮点一。',
      '亮点二。',
    ],
    conclusion: '总结与收获...',
  },
},
```

保存后刷新页面，作品自动出现在列表，详情页路由自动生成，无需改其他文件。

---

### 修改首页文字

打开 `src/pages/Landing.jsx`，找到以下内容直接改：

| 内容 | 搜索关键词 |
|------|-----------|
| 副标题（姓名/学校/届别） | `赵泽阳　｜　中国农业大学` |
| 一句话介绍 | `这是一个用于展示个人项目` |
| 按钮文字 | `进入作品集` |
| 角落小注 | `Portfolio · 2026` |

---

### 替换作品封面图

1. 把图片文件放到 `public/images/`，例如 `public/images/my-cover.jpg`
2. 打开 `src/data/projects.js`，找到对应作品，将 `cover` 改为：
   ```js
   cover: '/images/my-cover.jpg',
   ```
3. 推荐尺寸：宽 1200px，高 720px（5:3 比例），jpg/png/webp 均可

---

### 替换详情页图片

1. 把图片放到 `public/images/`
2. 打开 `src/data/projects.js`，找到对应作品的 `detail.images` 数组，替换路径：
   ```js
   images: [
     '/images/my-detail-01.jpg',
     '/images/my-detail-02.jpg',
   ],
   ```

---

### 替换简历 PDF

1. 将简历文件命名为 `resume.pdf`，放到 `public/resume.pdf`
2. 无需修改代码，`Contact` 页的下载链接自动指向该文件

---

### 修改邮箱和 GitHub 链接

打开 `src/pages/Contact.jsx`，文件顶部的 `contacts` 数组，直接替换：

```js
// 邮箱
{ value: 'your@email.com', href: 'mailto:your@email.com', display: 'your@email.com' }

// GitHub
{ value: 'github.com/your-username', href: 'https://github.com/your-username', display: 'github.com/your-username' }
```

---

### 本地预览修改效果

```bash
npm run dev
# 访问 http://localhost:5173
# 保存文件后页面自动热更新，无需手动刷新
```

---

### 打包发布

```bash
npm run build
# 生成 dist/ 目录，上传到 Vercel 或服务器即可
```

---

## 文件结构

```
portfolio-site/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf              # 简历 PDF（替换这里）
│   └── images/
│       ├── placeholder-cover.svg
│       ├── placeholder-detail.svg
│       └── ...                 # 你的作品图片放这里
├── src/
│   ├── components/
│   │   ├── DoodleTeacher.jsx   # Landing 页讲解小人
│   │   ├── DoodleSignHolder.jsx # 作品页举牌小人
│   │   ├── DoodleLounging.jsx  # 关于页躺平小人
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProjectCard.jsx
│   ├── data/
│   │   └── projects.js         # ★ 作品数据，最常改这里
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx         # ★ 邮箱/GitHub 改这里
│   │   ├── Landing.jsx         # ★ 首页文字改这里
│   │   ├── Portfolio.jsx
│   │   └── ProjectDetail.jsx
│   ├── App.jsx
│   ├── index.css               # 全局样式/纸张质感
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
| `src/data/projects.js` | 新增/编辑作品内容 |
| `public/images/` | 放作品封面图和详情图 |
| `public/resume.pdf` | 替换简历 |
| `src/pages/Contact.jsx` | 改邮箱、GitHub 链接 |
| `src/pages/Landing.jsx` | 改首页标题/介绍文字 |
| `src/pages/About.jsx` | 改个人简介内容 |
