// 热点模块
import { defineStore } from 'pinia'

export default defineStore('pot', {
  state () {
    return { potCount: 100 }
  },
  actions: {
    updateCount () {
      this.potCount += 2
    }
  }
})
