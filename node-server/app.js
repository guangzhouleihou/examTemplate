const express = require('express')
const proxy = require('http-proxy-middleware');
const chalk = require('chalk')
const app = express()
const path = require('path')
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
        console.log(chalk.yellow('项目示例已经运行在：localhost:3001, 请打开查看'))
    }
})
