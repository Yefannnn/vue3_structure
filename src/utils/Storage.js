// localStorage 封装

export default {
  getStorage (key) {
    try {
      return JSON.parse(localStorage.get(key))
    } catch (error) {
      console.log('读取localStorage失败', error)
      return localStorage.getItem(key)
    }
  },
  setStorage (key, value) {
    if (isObject(value)) {
      localStorage.setItem(key, value)
    } else {
      console.log(111)
      const valueObj = JSON.stringify(value)
      localStorage.setItem(key, valueObj)
    }
  },
  removeStorage (key) {
    localStorage.remove(key)
  },
}
const isObject = value => (Object.prototype.toString.call(value).slice(8, -1) !== 'Object') &&
    (Object.prototype.toString.call(value).slice(8, -1) !== 'Array') &&
    (Object.prototype.toString.call(value).slice(8, -1) !== 'null')
