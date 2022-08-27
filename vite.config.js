import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 别名
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
    }
  },

  /*
   * envPrefix:  ['VITE', 'VUE'], // 环境变量前缀,默认只会暴露VITE开头变量，定义后可暴露VUE开头变量
   * 拓展
   */
  extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    // 预处理选项
    preprocessorOptions: {
      less: {
        additionalData: '@import @/assets/css/base.less;',
        javascriptEnabled: true,
      },
  },
  server: {
    host: '127.0.0.1',
    port: 1010,
    open: true,
    proxy: {
      '/api': {
        target: 'http://developers.douban.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }

    },
  }
})
