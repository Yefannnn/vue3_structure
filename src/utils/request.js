// axios 封装
import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use(config => config, error => Promise.reject(error.message))

request.interceptors.response.use(res => {
  // res为返回的数据
  const { data } = res
  return data
}, error => {
  console.log('error', error)
  if (error.code === 'ERR_NETWORK' && error.message === 'Network Error') {
    return Promise.reject(new Error('网络错误，请检查网络'))
  } else if (error.message === 'Request failed with status code 500') {
    return Promise.reject(new Error('错误500，服务器出错啦'))
  }
  return Promise.reject(error.message)
})

export default request
