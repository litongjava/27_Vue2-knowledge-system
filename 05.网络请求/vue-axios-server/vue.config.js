module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: { // 路径重写
          "^/api": ""
        }
      }
    }
  }
};
