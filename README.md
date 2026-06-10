# Personal Technical Portfolio

这是周晓乐的个人技术展示网站第一版首页，主要用于展示云计算、AI 工程、机器人与自动化方向的学习和实践内容。

第一版只包含静态首页、基础组件拆分和占位内容，后续可以继续扩展项目展示页、技术文章页，并接入 Markdown / MDX 文件管理内容。

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Vercel

## 本地运行

```bash
npm install
npm run dev
```

启动后访问：

```bash
http://localhost:3000
```

## 构建

```bash
npm run build
```

## 提交到 GitHub

```bash
git init
git add .
git commit -m "Initial personal site homepage"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 登录 Vercel。
3. 选择 GitHub 仓库并导入项目。
4. Framework Preset 选择 Next.js。
5. 保持默认构建命令 `npm run build`。
6. 点击 Deploy 完成部署。
