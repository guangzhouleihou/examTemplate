# examTemplate
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
## 项目简介
JS框架采用Vue全家桶，CSS采用less、scss，UI采用element-ui
* [Vue](https://vuejs.org/)
* [Vue-router](https://router.vuejs.org/zh-cn/)
* [Vuex](https://vuex.vuejs.org/zh-cn/)
* [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)
* [less](http://lesscss.cn/features/)
* [scss](https://www.sass.hk/guide/)

___
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
├── styles                           # 通用样式    
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
## 代码风格
项目已使用 eslint 的 standard 标准，除了 linter 之外，还有一些约定，请查看 [gitlab](https://gitlab.gzleihou.cn/FE/docs)上的文档。


