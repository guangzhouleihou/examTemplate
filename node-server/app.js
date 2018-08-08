const express = require('express')
const proxy = require('http-proxy-middleware');
const chalk = require('chalk')
const app = express()
const path = require('path')
const open = require('open')
app.use(express.static(path.resolve(__dirname, './dist')))
app.use('/proxy-api', proxy({
    target: 'http://api-tt.oola.cn:8080/oola/',
    changeOrigin: true,
    pathRewrite: {
        '/proxy-api': ''
    }
}))
app.use('/tx-map-api/', proxy({
    target: 'http://apis.map.qq.com/',
    changeOrigin: true,
    pathRewrite: {
        '/tx-map-api/': ''
    }
}))
app.use('/wxhost', proxy({
    target: 'http://wx.qlogo.cn',
    pathRewrite: {
        '/wxhost': ''
    }
}))
app.use('/oola-oss-proxy', proxy({
    target: 'https://images.oola.cn',
    changeOrigin: true,
    pathRewrite: {
        '/oola-oss-proxy': ''
    }
}))

app.listen(3001, 'localhost', (err) => {
    if(!err) {
        console.log(chalk.yellow('项目示例已经运行在：localhost:3001'))
        console.log(chalk.yellow('查看接口文档请访问：localhost:3001/api.html'))
        console.log(chalk.green('提示：关闭该服务将导致示例与接口文档无法访问，如果需要运行其他命令请新开一个命令行窗口'))
      open('http://localhost:3001')
      open('http://localhost:3001/api.html')
    }
})
