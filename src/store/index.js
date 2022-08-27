/*
 * createPiniaStore
 * 主仓库
 */
import { defineStore } from 'pinia'
import potStore from '@/store/pot.js'

export default defineStore('main', {
  state () {
    return {
      potStore: potStore(),
      mainCount: 1,

    }
  },
  actions: {
    updateCount (value) {
      this.mainCount += value
    }
  }
})
