# PROJECT_LOG — 作品集网站开发日志

> 最后更新：2026-06-25

---

## 今日完成内容（2026-06-25）

- 已将采销智能分析台 9 张截图放入 `public/images/`
- 已将 `category-analysis-dashboard` 的 `cover` 和 8 个内容模块图片路径替换为真实截图（模块 9 为 textOnly，无需图片）
- 发现 `category-dashboard-recommend.png` 原文件名存在双扩展名（`.png.png`），已重命名修正
- Codex 验收通过
- `npm run build` 构建通过，无报错
- 当前稳定 commit：`9e401e2`（connect category dashboard screenshots）
- 打 tag：`v0.7-category-dashboard-screenshots`

**下一步：**
- [ ] 本地 `npm run dev`，人工检查采销智能分析台详情页观感、图片比例、页面长度
- [ ] 如满意，准备第二个真实作品或进入部署前检查

---

---

## 今日完成内容（2026-06-23）

- 网站整体框架已完成（React + Vite + Tailwind CSS）
- 米白纸张 + Doodle 手绘风格已确定，全站保持一致
- Git 版本管理已建立，关键节点已打 tag（`v0.6-flexible-content-blocks`）
- 作品集页（Portfolio）支持作品自由增删，只改 `src/data/projects.js`
- 作品详情页（ProjectDetail）支持 flexible contentBlocks，5 种 block 类型可混用
  - `imageText` / `textOnly` / `gallery` / `fullImage` / `steps`
  - 每个 block 支持 `paragraphs`（多段）、`bullets`、`images`（0/1/多张）、`tags`、`note`
  - 向后兼容旧结构，数量由 map 自动渲染，不写死
- 删除了"关于我"页面，导航已精简
- 联系页已加入真实个人信息（姓名 / 邮箱 / 电话 / 简历下载）
- 采销智能分析台已作为第一个真实作品加入（替换 placeholder-01）
- 采销智能分析台内容已完整更新：
  - `detail.background`：完整项目背景，说明业务场景与原型定位
  - `detail.approach`：5 个环节的实现思路（问题识别 → 数据接入 → 分析执行 → 可视化 → 报告沉淀）
  - `detail.contentBlocks`：9 个核心内容模块（见下方图片清单）
  - `detail.highlights`：6 条项目亮点，体现业务理解与 AI 编程实践
  - `detail.conclusion`：总结与收获（已定稿，后续不动）
- 当前图片均为占位图（`/images/placeholder-detail.svg`），后续需替换真实截图

---

## 当前项目结构

| 文件 / 目录 | 用途 |
|------------|------|
| `src/data/projects.js` | ★ 作品数据主维护文件，新增 / 编辑 / 删除作品只改这里 |
| `src/data/profile.js` | 个人信息（姓名 / 邮箱 / 电话 / 简历路径） |
| `public/images/` | 作品封面图和详情图放这里，路径写 `/images/文件名` |
| `public/resume.pdf` | 简历 PDF，直接覆盖替换即可 |
| `src/pages/ProjectDetail.jsx` | 作品详情页渲染逻辑（数据驱动，正常情况不需要修改） |
| `src/pages/Portfolio.jsx` | 作品集总览页 |
| `src/pages/Contact.jsx` | 联系页 |

---

## 当前 Git 关键版本

```
9e401e2  connect category dashboard screenshots       ← 当前最新
480a8b0  add project log and next steps
80549be  update category dashboard project content
bc82167  add category analysis dashboard project draft
4030b49  make project content blocks flexible
5d544df  refine sign holder pose on portfolio page
437ecd1  refine doodle characters and enrich detail page margins
bc69432  remove unused about page file
```

当前 tag：
- `v0.7-category-dashboard-screenshots`（指向 `9e401e2`）
- `v0.6-flexible-content-blocks`（指向 `4030b49`）

---

## 历史待办（2026-06-23 记录，已完成项标注）

- [x] 本地 `npm run dev`，打开浏览器检查"采销智能分析台"详情页阅读体验
- [ ] 检查 9 个核心模块是否过长，必要时合并或精简文案
- [x] 截取采销智能分析台的真实截图（见下方图片清单）
- [x] 将截图放入 `public/images/`
- [x] 替换 `src/data/projects.js` 中 `category-analysis-dashboard` 的所有图片路径
- [x] 更新 `cover` 封面图路径
- [ ] 继续准备第二个真实作品，更新 placeholder-02
- [ ] 后续再考虑推送 GitHub 和部署 Vercel（不急）

---

## 图片素材清单（采销智能分析台）

明天需要准备以下截图，统一放入 `public/images/`：

| 文件名 | 用途 | 对应模块 |
|--------|------|---------|
| `category-dashboard-cover.png` | 作品卡片封面图 | `cover` 字段 |
| `category-dashboard-overview.png` | 整体项目预览 | 模块 1：整体项目预览 |
| `category-dashboard-analysis.png` | 智能分析页 | 模块 2：智能分析页 |
| `category-dashboard-database.png` | 数据库浏览器 | 模块 3：数据库浏览器 |
| `category-dashboard-import.png` | 数据导入中心 | 模块 4：数据导入中心 |
| `category-dashboard-ranking.png` | 销售排行分析 | 模块 5：销售排行分析 |
| `category-dashboard-recommend.png` | 主推 SKU 推荐 | 模块 6：主推 SKU 推荐 |
| `category-dashboard-chart.png` | 图表与结果展示 | 模块 7：图表与结果展示 |
| `category-dashboard-report.png` | 报告中心 | 模块 8：报告中心 |
| `category-dashboard-switch.png` | 数据库更换支持（可选） | 模块 9 为纯文字模块，图片可不做 |

截图完成后，在 `src/data/projects.js` 中将对应的 `src: '/images/placeholder-detail.svg'` 逐一替换为真实路径，例如：

```js
images: [
  { src: '/images/category-dashboard-overview.png', alt: '分析台整体界面预览', caption: '' },
],
```

封面图替换：

```js
cover: '/images/category-dashboard-cover.png',
```

推荐截图尺寸：封面 1200×720px（5:3），详情页图片宽度 1200px 以上。

---

## 备注

- 作品集目前有 1 个真实作品 + 3 个占位作品（placeholder-02/03/04）
- 3 个占位作品保留做版式参考，待后续替换为真实内容
- 网站风格、组件结构、路由已稳定，不需要大改框架
