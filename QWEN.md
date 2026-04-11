# QWEN.md - MacVideoStreamPerfWebPage

## 项目概述

这是一个 **MVS Perf** 产品的官方宣传网页，MVS Perf 是一款专为 macOS 开发的视频流性能测试与分析工具。该网站采用纯静态 HTML/CSS/JavaScript 构建，通过 GitHub Pages 自动部署。

### 主要功能
- 产品展示页面（Hero、功能特性、截图、视频演示、报告示例、下载引导）
- 中英文双语国际化支持（i18n），可一键切换语言
- 隐私政策页面（符合 Apple App Store 审核要求）
- 响应式设计，适配桌面和移动端
- 图片 Lightbox 查看器、滚动渐入动画等交互效果

### 技术栈
- **纯静态前端**：HTML5 + CSS3 + Vanilla JavaScript（无框架/构建工具）
- **部署**：GitHub Pages（通过 GitHub Actions 自动部署）

## 目录结构

```
MacVideoStreamPerfWebPage/
├── index.html              # 主页（产品落地页）
├── privacy.html            # 隐私政策页面（中英文）
├── styles.css              # 全局样式
├── scripts.js              # 主页交互脚本（i18n、导航、Lightbox 等）
├── privacy.js              # 隐私页面交互脚本
├── pictures/               # 应用截图资源
├── videos/                 # 应用演示视频
├── pdf/                    # PDF 报告示例
└── .github/workflows/
    └── deploy-pages.yml    # GitHub Pages 自动部署配置
```

## 构建与部署

### 本地开发
由于是纯静态网站，无需构建步骤。直接在本地的 HTTP 服务器中打开 `index.html` 即可预览：

```bash
# 使用 Python 快速启动本地服务器
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

### 部署到 GitHub Pages
项目已配置 GitHub Actions，当推送到 `main` 分支时自动部署：

- **触发条件**：推送到 `main` 分支或手动触发（workflow_dispatch）
- **部署路径**：仓库根目录所有内容直接作为静态资源发布
- **工作流程文件**：`.github/workflows/deploy-pages.yml`

## 开发约定

### 编码风格
- **无构建工具**：所有文件均为原生 HTML/CSS/JS，直接编辑即可生效
- **CSS 命名**：采用语义化类名，类似 BEM 风格（如 `.feature-card`、`.hero-content`）
- **版本控制**：CSS/JS 资源通过查询参数版本化（如 `?v=20260332`），更新时需同步修改以清除缓存

### 国际化 (i18n)
- 翻译字典定义在 `scripts.js` 的 `translations` 对象中
- 使用 `data-i18n` 属性标记需要翻译的元素
- 使用 `data-i18n-html="true"` 支持 HTML 内容的翻译
- 当前语言保存在 `localStorage` 中（键：`mvs-lang`）
- 切换语言时会同步更新 `document.title` 和 `<meta name="description">`

### 样式约定
- 设计语言：清新简洁风格，类似 Apple 官网设计
- 主色调：蓝色 `#007aff`（Apple 蓝）
- 字体：优先使用 Apple 系统字体栈
- 响应式断点：1024px（平板）、768px（手机）、480px（小屏手机）

### 隐私政策页面
- 中英文双版本，符合 Apple App Store 隐私要求
- 声明不收集用户数据、不进行跨应用跟踪、不出售数据
- 联系邮箱：fan1056218492@gmail.com

## 关键交互功能

| 功能 | 实现位置 |
|------|----------|
| 导航栏滚动效果 | `scripts.js` - `updateNavbar()` |
| 当前章节高亮 | `scripts.js` - `updateActiveLink()` |
| 移动端菜单 | `scripts.js` / `privacy.js` |
| 语言切换 | `scripts.js` - `applyLanguage()` |
| Lightbox 图片查看 | `scripts.js` - `openLightbox()` 等 |
| 滚动渐入动画 | `scripts.js` - `IntersectionObserver` |
| 平滑滚动 | `styles.css` - `scroll-behavior: smooth` |

## 外部链接
- **App Store**：目前指向 `https://apps.apple.com`（占位符，待应用上架后更新）
- **GitHub Pages**：自动部署到 GitHub Pages 域名
