# 合规秒答 - Vercel部署指南

## 🚀 快速部署（5分钟上线）

### 第一步：创建GitHub仓库

1. **登录GitHub**
   - 访问 https://github.com
   - 点击右上角 "+" 号，选择 "New repository"

2. **填写仓库信息**
   - Repository name: `hegui-miao-da` 或你喜欢的名字
   - Description: 企业用工合规AI助手
   - 选择 "Private" 或 "Public"
   - **不要勾选** "Initialize this repository with a README"

3. **点击 "Create repository"**

### 第二步：推送代码到GitHub

在终端中运行以下命令（替换为你的GitHub用户名和仓库名）：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送代码
git branch -M main
git push -u origin main
```

### 第三步：Vercel部署

1. **登录Vercel**
   - 访问 https://vercel.com
   - 使用GitHub账号登录（推荐）

2. **导入项目**
   - 点击 "New Project"
   - 在 "Import Git Repository" 中找到你的仓库
   - 点击 "Import"

3. **配置项目**
   - Framework Preset: Vite（应该自动检测）
   - Build Command: `npm run build`（自动填充）
   - Output Directory: `dist`（自动填充）
   - 点击 "Deploy"

4. **等待部署**
   - 通常1-2分钟完成
   - 完成后会获得一个免费的 `.vercel.app` 域名

### 🎉 完成！

恭喜！你的应用已经上线！Vercel会自动分配一个URL，例如：
```
https://hegui-miao-da.vercel.app
```

---

## 🔧 自定义域名（可选）

如果你有自己的域名，可以配置自定义域名：

1. 在Vercel项目设置中，点击 "Domains"
2. 输入你的域名
3. 按照提示配置DNS记录
4. 等待DNS生效（通常几分钟到24小时）

---

## ⚙️ 自动部署

Vercel的自动部署已经配置好了！只要：

1. 每次你 `git push` 到main分支
2. Vercel会自动重新构建和部署
3. 无需手动操作

---

## 📱 分享和使用

1. **直接分享URL**：将Vercel分配的URL分享给用户
2. **微信小程序**：可以将URL包装成微信小程序
3. **添加到主屏幕**：在手机上打开URL，可以"添加到主屏幕"，像App一样使用

---

## 🔍 查看部署状态

1. 在Vercel Dashboard查看部署历史
2. 每次部署都会生成一个新的URL用于预览
3. 生产环境（main分支）的URL是固定的

---

## 🐛 遇到问题？

### 部署失败？
- 检查 Build Command 是否正确
- 查看 Vercel 的构建日志
- 常见问题：依赖安装失败、TypeScript错误等

### 页面空白？
- 检查浏览器控制台是否有错误
- 确认 outputDirectory 设置为 `dist`
- 检查路由配置（Vercel需要配置重定向到index.html）

### 更新不生效？
- 清除浏览器缓存
- 检查Vercel的部署状态
- 确认推送到了正确的分支

---

## 📊 监控和维护

Vercel免费版提供：
- ✅ 100GB带宽/月
- ✅ 100次部署/天
- ✅ 实时日志
- ✅ 自动HTTPS

足够初期使用！

---

## 🚀 下一步

部署完成后，你可以：
1. 🎯 测试所有功能
2. 📱 分享给朋友/用户
3. 🔧 根据反馈迭代优化
4. 💰 考虑升级到付费版获得更多功能

---

## 📞 需要帮助？

如果遇到问题：
1. 查看Vercel官方文档：https://vercel.com/docs
2. 查看GitHub Issues
3. 或者联系技术支持

祝部署成功！🎉
