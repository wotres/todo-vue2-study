const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:9090/'
// {
//       '/api/*': {
//         target: 'http://localhost:9090/',
//         pathRewrite: { '^/api': '/'},
//         changeOrigin: true,
//         logLevel: 'debug'
//       }
//     }
  }
})
