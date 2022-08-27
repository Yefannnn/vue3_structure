// 用户模块请求
import request from '@/utils/request'

export const getNews = () => request({
  method: 'GET',
  url: '/wiki/?title=guide'
})
