module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://iwenwiki.com',
        changeOrigin: true,
        pathRewrite: { // 路径重写
          "^/api": ""
        }
      }
    }
  }
}
