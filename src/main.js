import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/index.less'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入路由
import router from '@/router/index'
// 导入插件
import { createPinia } from 'pinia'

// 创建app实例
const app = createApp(App)
// 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')

console.log(import.meta.env)
