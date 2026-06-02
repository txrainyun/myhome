# 个人导航站

一个美观的卡片式个人网站导航页面，基于您的Edge浏览器收藏夹创建。

## 功能特点

- 🎨 美观的渐变色界面
- 🏷️ 分类筛选功能
- 🔍 实时搜索功能
- 📱 响应式设计
- ✨ 卡片悬停效果

## 网站分类

- 娱乐生活 - 视频、游戏、社交媒体
- 学习资源 - 编程、教程、文档
- AI工具 - 各种AI助手
- 常用工具 - 日常工具网站
- 效率办公 - 办公学习平台
- 资源下载 - 软件资源下载

## 本地预览

直接在浏览器中打开 `index.html` 文件即可预览。

## GitHub Pages 部署步骤

### 1. 创建GitHub仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" -> "New repository"
3. 仓库名称可以叫 `personal-nav` 或您喜欢的名字
4. 选择 "Public" 或 "Private"（Private仓库也可以用GitHub Pages）
5. 点击 "Create repository"

### 2. 上传文件

**方法一：直接上传（推荐新手）**

1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖入上传区域：
   - `index.html`
   - `style.css`
   - `config.js`
   - `script.js`
3. 在底部填写提交信息，如 "Initial commit"
4. 点击 "Commit changes"

**方法二：使用Git命令行**

```bash
# 初始化git仓库
git init

# 添加文件
git add index.html style.css config.js script.js

# 提交
git commit -m "Initial commit"

# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/您的用户名/personal-nav.git

# 推送
git branch -M main
git push -u origin main
```

### 3. 启用GitHub Pages

1. 进入您的GitHub仓库
2. 点击顶部的 "Settings"（设置）
3. 在左侧菜单中找到 "Pages"（页面）
4. 在 "Build and deployment" 部分：
   - Source（源）选择：`Deploy from a branch`
   - Branch（分支）选择：`main` 或 `master`
   - 文件夹选择：`/ (root)`
5. 点击 "Save"（保存）

### 4. 访问您的网站

等待几分钟后，您的网站将可以通过以下地址访问：

```
https://您的用户名.github.io/personal-nav/
```

## 自定义网站

### 添加新网站

编辑 `config.js` 文件，在对应分类的 `sites` 数组中添加：

```javascript
{ 
    name: "网站名称", 
    url: "https://example.com/", 
    desc: "网站描述", 
    icon: "fas fa-icon",  // Font Awesome图标
    color: "#颜色代码" 
}
```

### 添加新分类

在 `config.js` 的 `navLinks` 数组中添加新分类，并在 `categoryColors` 中添加对应颜色。

### 修改网站标题

编辑 `index.html` 文件中的 `<title>` 标签和 `<h1>` 标题。

### 修改配色

编辑 `style.css` 文件中的渐变色背景：

```css
background: linear-gradient(135deg, #您的颜色1 0%, #您的颜色2 100%);
```

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome 6.4.0

## License

MIT