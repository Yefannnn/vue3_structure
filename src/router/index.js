// 创建路由
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: import('@/layout/index.vue'),
    children: [
      {
        path: '',
        component: import('@/pages/home/index.vue')
      },
      {
        path: 'boke',
        name: 'boke',
        component: import('@/pages/boke/index.vue')
      },
      {
        path: 'download',
        name: 'download',
        component: import('@/pages/download/index.vue')
      },
      {
        path: 'study',
        name: 'study',
        component: import('@/pages/question/index.vue')
      },
      {
        path: 'sociel',
        name: 'sociel',
        component: import('@/pages/question/index.vue')
      },
      {
        path: 'gitCode',
        name: 'gitCode',
        component: import('@/pages/question/index.vue')
      },
      {
        path: 'yun',
        name: 'yun',
        component: import('@/pages/question/index.vue')
      },
      {
        path: 'token',
        name: 'token',
        component: import('@/pages/question/index.vue')
      },
    ]
  },
  {
    path: '/question',
    name: 'question',
    component: import('@/pages/question/index.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
})

export default router
