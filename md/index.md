## 欢迎使用markdown-viewer
markdown-viewer是由eoLinker团队开发的超轻量级的Markdown文档展示系统，仅需几行代码配置，即可将Markdown文档包装成带目录层级的网站，方便人员查看。可用于快速构建企业帮助文档、博客、教程、图片站等等。目前已用于支持eoLinker旗下所有帮助文档。

**主要特性**

1. 根据文件系统结构来创建目录层级,方便管理

2. 无需任何后端环境,配置简单拿来即用

3. 样式美观,可以完美显示图片/层级/表格等内容

---

#### 目录层级说明
|-assets	静态图片文件
|-examples	示例项目
|-fonts		字体文件
|-libs		Js库文件
|-md		Markdown文档目录
|-index.css	首页样式
|-index.html	首页
|-README.md		README文件
|-router.js		路由文件，储存目录层级的设置
|-sidebar.js	侧边栏Js代码

实际使用过程中，仅需将Markdown文件分类放置在md文件夹下，并且修改router.js路由文件即可，无需额外配置，不依赖任何后端环境。