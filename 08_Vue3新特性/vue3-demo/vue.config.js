const path = require('path')

// 项目的主要配置文件
module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('babel-loader')
            .test(/.js$/)
            .use('babel-loader')
            .loader('babel-loader')
            .end()
    }
}