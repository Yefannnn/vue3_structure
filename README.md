## Vue3 从0-1搭建框架（技术选型 v3 + elementPlus + vueRouter4 + pinia + less）

#### 1  创建vue3项目

```javascript
// cnpm create vite
// 注意命名规范，不然会报错
```



#### 2 添加 vite.config.js 配置项

```javascript
resolve:{
      // 配置别名
    alias:{
    '~': path.resolve(__dirname, './'),
    '@':path.resolve(__dirname,'./src'),
    }
  },
  // 导入时想要省略的扩展名列表
  extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  // 预处理选项
   preprocessorOptions: {
      less: {
          // 通过 additionalData 导入less变量
        additionalData: '@import @/assets/css/base.less;',
        javascriptEnabled: true,
      },
    }
```

#### 3 配置ESlint（代码检查工具）

```javascript
// 安装开发依赖
npm install eslint --save-dev
// 添加eslint配置选项,视情况选择配置，配置后将生成eslintrc.js文件
./node_modules/.bin/eslint --init
或者 npm init @eslint/config
// ----------------------------------------------------
// 根目录 eslintrc.js 中添加/修改以下配置项
添加 parser:'vue-eslint-parser',
修改	extends  =>   plugin:vue/vue3-essential,
修改	env =>	'vue/setup-compiler-macros':true
// package.json   script节点添加lint模式进行代码修复
"lint": "eslint src/**/*.{js,jsx,vue,ts,tsx} --fix"
```



#### 4 配置项目环境变量

```javascript
// 根目录创建  以下文件
.env.development  .env.production
// 文件中 添加常用变量，如
ENV = development 
VITE_APP_BASE_API = '/api'
VITE_APP_PORT = 1010
// ------如何使用环境变量？--------
import.meta.env.[变量名]
```



#### 5 分析项目一级路由和二级路由，建立路由表和全局路由守卫（ 先建立首页路由表 ）

```javascript
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [{
    path:'/home',
    //除首页外，尽量都使用懒加载
    component:import('@/......')   
}]
const router createRouter({
    history:createWebHashHistory(),
    routes
})
// 全局前置守卫
router.beforeEach((to,from,next)=>{
    next()
})
// 后置前置守卫
router.afterEach((to,from)=>{
})

export default router
```

#### 6 安装必须的组件库 elementPlus 用来快速绘制页面

```javascript
// 下包
cnpm i element-plus
// 按照官方指引，引入并注册后使用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
```

#### 7 配置 pinia 插件，共享全局状态

```javascript
// 安装 
cnpm i pinia
// 注册 pinia   
import {createpinia} from 'pinia' 
app.use(createpinia())
// 创建store公共状态管理库 
import {defineStore} from 'pinia'
export default defineStore('main',{
    state(){
        return {
            mainCount:1
        }
    },
    actions:{
        updateCount(value){
            this.mainCount += value
        }
    }
})
// 使用store 中的数据
import mainstore from '@/store/index.js'
// 映射主仓库
const mainStore = mainstore()
// state中的值直接映射到模板中才是有响应式的
  <p>main模块中的count值： {{ mainStore.mainCount }}</p>
// actions 中的方法映射到组件中
   mainStore.updateCount()
```

#### 8 封装项目所需的工具  （如  axios，localSrorage）

##### axios

```javascript
// axios 封装
import axios from 'axios'

const request = axios.create({
    //baseURL:'',
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:5000
})

request.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error.message)
})

request.interceptors.response.use((res)=>{
    // res为返回的数据
    const {data} = res
    return data
},(error)=>{
    // console.log('error',error)
    if (error.code === 'ERR_NETWORK' && error.message === 'Network Error' ) {
        return Promise.reject(new Error('网络错误，请检查网络'))
    }
    return Promise.reject(error.message)
})

export default request
```

##### localSrorage

```javascript
// localStorage 封装
export default {
    getStorage(key){
        try {
            return  JSON.parse(localStorage.get(key)) 
        } catch (error) {
            console.log('读取localStorage失败',error)
            return localStorage.getItem(key)
        }
    },
    setStorage(key,value){
        if (isObject(value) ) {
            localStorage.setItem(key,value)
        }else {
            console.log(111);
            const valueObj = JSON.stringify(value)
            localStorage.setItem(key,valueObj)
        }
    },
    removeStorage(key){
        localStorage.remove(key)
    },
}
const isObject = (value)=>{
    return (Object.prototype.toString.call(value).slice(8,-1) !== "Object") && 
    (Object.prototype.toString.call(value).slice(8,-1) !== "Array") && 
    (Object.prototype.toString.call(value).slice(8,-1) !== "null")
}
```

#### 9 创建 全局API，编写请求配置

```javascript
import request from '@/utils/request'
export const getNewsAPI = ()=>request({
        method:'GET',
        url:'https://developers.douban.com/wiki/?title=guide'
    })
```

#### 以下是可选配置

##### 跨域代理 proxy

```javascript
// vite.config.js 文件下配置全新节点server
server: {
    host: '127.0.0.1',  // 服务器运行的本机地址
    port: 1010,         // 服务器运行的本机端口
    open: true,			// 默认打开浏览器
    proxy: {			// 配置反向代理
      '/api': {			// 触发转发请求的条件（也可以是正则表达式）
        target: 'http://developers.douban.com', // 目标服务器地址
        changeOrigin: true,		// 改请求origin，实现跨域
        rewrite: path => path.replace(/^\/api/, '') //正则重写路径
      }
    }
  }
```


