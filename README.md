# README

在线博客`Blog`项目：

- 后端基于`NestJs`框架开发，具体的代码文件在`blog-nest`文件夹中

  配置使用：

  1. 安装相关的包：`npm install` 
  2. 执行迁移数据库命令：`npx prisma migrate dev `
  3. 启动后端：`npm run dev`

- 前端基于`Vue3`框架开发（在自己开发的前端脚手架的基础上进行二次开发），具体的代码文件在`blog-vue`文件夹中

  前端脚手架项目的仓库为：

  - [Project-VueCli: 前端脚手架项目，基于Vue3进行开发，包含了前端项目后台管理的基础部分（如界面、路由和权限控制等等）](https://gitee.com/JinLinC/project-vue-cli)
  - [JinLinC0/Project-VueCli: 前端脚手架项目，基于Vue3进行开发，包含了前端项目后台管理的基础部分（如界面、路由和权限控制等等）](https://github.com/JinLinC0/Project-VueCli)

  配置使用：

  1. 安装相关的包：`npm install` 
  2. 启动前端：`npm run dev`

模拟数据通过`mockJs`生成，富文本编辑器使用了`wangEditor`

该博客项目分为五个专栏，每个专栏下面初始随机生成了一些文章数据，可以点击顶部的专栏筛选该专栏下的文章，点击具体的文章可以查看完整的文章内容；在文章具体内容页面，我们可以对文章进行编辑修改和删除操作；也可以在首页点击文章发表，进行文章的添加操作。

做了媒体查询处理，在桌面端和移动端都有较合理的布局

桌面端具体功能界面：



手机端具体功能界面：

<img src="D:\Myproject\develop-study-notes\images\image-20250514225903141.png" alt="image-20250514225903141" style="zoom: 33%;" /><img src="D:\Myproject\develop-study-notes\images\image-20250514230515141.png" alt="image-20250514230515141" style="zoom:33%;" /><img src="D:\Myproject\develop-study-notes\images\image-20250514230712630.png" alt="image-20250514230712630" style="zoom:33%;" />

<img src="D:\Myproject\develop-study-notes\images\image-20250514231812266.png" alt="image-20250514231812266" style="zoom:33%;" /><img src="D:\Myproject\develop-study-notes\images\image-20250514231915670.png" alt="image-20250514231915670" style="zoom:33%;" /><img src="D:\Myproject\develop-study-notes\images\image-20250514232033392.png" alt="image-20250514232033392" style="zoom:33%;" />
