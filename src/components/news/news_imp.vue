<template>
    <ul>
        <li v-for="index in 12">这是关注模板</li>
    </ul>
    <input type="text" v-model="text">
</template>

<script setup>
import Storage from '@/utils/Storage.js'
import { watch, ref, reactive } from 'vue'
const text = ref('这是一个测试文本')
const textObj = reactive({ name: '222' })
watch(text, (newValue, oldValue) => {
  Storage.setStorage('test', textObj)
})
</script>

<style lang="less" scoped>
</style>
