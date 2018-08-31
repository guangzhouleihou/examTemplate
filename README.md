# examTemplate
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
## 项目简介
JS框架采用Vue全家桶，CSS采用less、scss，UI采用element-ui，富文本编辑器采用vue-quill-editor
* [Vue](https://vuejs.org/)
* [Vue-router](https://router.vuejs.org/zh-cn/)
* [Vuex](https://vuex.vuejs.org/zh-cn/)
* [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)
* [less](http://lesscss.cn/features/)
* [scss](https://www.sass.hk/guide/)
* [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)
___
## API接口文档
请在运行npm run server 以后查看[接口文档](http://localhost:3001/api.html)

若本地查看失败请尝试访问线上[接口文档](https://www.zybuluo.com/zhuozhongzhi/note/1242772)
## 项目结构
```bash
├── README.md
├── build                            # 构建文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── utils.js                     # vue-loader 通用配置
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                           # webpack config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── node-server                      # 项目服务      
├── index.html                       # 入口 html
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── base                     # 基础组件（按钮、弹窗等)
│   │   ├── business                 # 业务组件
│   ├── utils                       # 非组件通用代码（混合、指令、通用代码等）
│   ├── assets                       # 静态资源
│   ├── main.js                      # Vue entry
│   ├── router                       # 路由 #TODO: 请按模块划分路由文件
│   ├── service                      # API接口存放
│   ├── store                        # Vuex store，同路由，请按模块划分 store 文件
│   ├── styles                       # 通用样式，可以通过 @import 'absolute-path' 引入
│   └── pages                        # 页面放在此，每个页面都应该由组件组成
└── static
```
___
## 构建命令
* 运行示例项目
  ```bash
  npm run server
  ```
* 开发环境服务
  ```bash
  npm i && npm run dev
  ```
* 构建
  ```bash
  npm run build
  ```
* 详情请参考 [vue-template](https://vuejs-templates.github.io/webpack/commands.html)

___

## 招聘环节
 - 笔试（1.5个小时的时间完成以下标记“**A类**”的功能，提前完成则提前结束；如果在1.5小时内完成“**A类**”题，可以继续选择性在接下来1.5个小时内完成余下功能“**B类**”，这些功能可视为加分项）
 - 面试 （笔试通过后才进入面试，大概15-30分钟）

## 评分标准
该项目总分为10分，一共有三个主要模块，其分值如下
 - 登录页
    - 静态页 1分（A类）
    - 完成数据接口对接 1.5分（A类）
 - 数据列表
    - 静态页 1.5分（A类）
    - 完成数据接口对接 2分（B类）
 - 编辑、增加
    - 静态页 2分（B类）
    - 完成数据接口对接 2分（B类）
    
 ## 笔试流程
 - 使用自己的github账号clone本项目
 - npm install 安装依赖完毕后，运行npm run server，参照[线上demo](http://localhost:3001/)尽可能多地完成该项目，账号admin,密码123456
 - 将完成的项目推送到https://github.com ，提交的信息为
    date/name: 雷猴招聘，例如 2018/8/7 卓钟侄：雷猴招聘。
    并且将仓库地址发给HR备份
 - 笔试结束后请向HR演示效果，HR根据效果进行打分
 
 ## 开始测试前的准备
 开始测试前你需要进行如下准备
  - 请提前准备一个github账号
  - 请在你的电脑上安装git
  - 请在你的电脑上安装nodejs环境
  - 请确保电脑中有webstorm、vsCode 或者sublime 亦或者其他的编译软件
## 备注
  - 项目中可能用到的图片资源已经存放于src/assets目录下
  - 项目中已经存在一个简单的example给面试者做简单的参考
  - 请按照上文描述的目录结构划分合理地放置代码文件
  - store目录下已经提供了一些基本的vuex的一些封装，开发者可自行考虑是否使用
  - api接口的书写与调用可参考src/service目录下的example
  - 请运行npm run server 访问 http://localhost:3001 查看要实现的结果示例
  - coding过程中如果遇到问题可询问HR   

