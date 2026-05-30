# 合规秒答 - 企业用工合规AI助手

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-blue" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-6.4-purple" alt="Vite">
  <img src="https://img.shields.io/badge/Platform-Vercel-green" alt="Vercel">
</p>

> 7×24小时劳动法专家，HR随时问、即时答

## 🎯 产品简介

**合规秒答**是一款企业用工合规AI助手，帮助HR解决以下问题：

- ✅ HR遇到合规问题无处问
- ✅ 政策变了不知道
- ✅ 临时算不清赔偿金额
- ✅ 找不到靠谱的合规知识

## ✨ 核心功能

### 📱 合规即时问答
- AI智能回答专业劳动法问题
- 附带法条引用和操作建议
- 支持追问和相关问题推荐

### 🧮 赔偿计算器
- 经济补偿金计算（N/N+1/2N）
- 社保补缴计算
- 支持6个城市政策适配

### 📢 政策变动推送
- 跟踪6城社保/劳动法规变动
- 自动推送 + 影响评估
- 操作指引

### 📚 合规知识库
- 200+知识条目
- 分类浏览和搜索
- 专家编写 + AI辅助

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/YOUR_USERNAME/hegui-miao-da.git
cd hegui-miao-da

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开 http://localhost:5173
```

### 🌐 一键部署到Vercel

详细部署说明请查看 [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)

快速步骤：
1. 创建GitHub仓库
2. 推送代码到GitHub
3. 在 Vercel 导入项目
4. 点击 Deploy！

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **样式**: Tailwind CSS
- **状态管理**: Zustand
- **图标**: Lucide React
- **部署**: Vercel

## 📁 项目结构

```
src/
├── pages/              # 页面组件
│   ├── Home.tsx       # 合规问答首页
│   ├── Calculator.tsx  # 赔偿计算器
│   ├── Policies.tsx    # 政策变动
│   └── Knowledge.tsx  # 知识库
├── store/             # 状态管理
├── types/             # TypeScript类型定义
├── App.tsx            # 主应用组件
└── main.tsx           # 入口文件
```

## 🎨 设计特点

- 📱 **移动端优先**: 微信小程序风格设计
- 🎨 **现代UI**: 渐变色彩，流畅动画
- ⚡ **快速响应**: 即时问答，秒级计算
- 🔒 **安全合规**: 免责声明，数据保护

## 📄 许可证

本项目仅供演示和学习使用。

## 🤝 联系方式

如有问题或建议，请联系开发团队。

---

<p align="center">
  Made with ❤️ for HR professionals
</p>
