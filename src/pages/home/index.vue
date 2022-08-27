<template>
    <div class="container">
        <div class="container_nav">
            <div class="ulbox">
                <ul>
                    <li v-for="item in navList" :key="item">{{ item }}</li>
                </ul>
            </div>

            <div class="extends"></div>
        </div>
        <!--  -->
        <div class="container_news">
            <div class="news_left">
                <p>头条</p>
                <p>main模块中的count值： {{ mainStore.mainCount }}</p>
                <button @click="updateCount(5)">点击加5</button>
            </div>
            <div class="news_center">
                <p>热点</p>
                <p>pot模块中的count值：{{ mainStore.potStore.potCount }}</p>
                <button @click="mainStore.potStore.updateCount()">点击加1</button>
            </div>
            <div class="news_right">
                <p></p>
                <button @click="getNews">点击请求数据</button>
            </div>
        </div>
        <!-- tags页签 -->
        <div class="container_white">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="关注" name="first">
                    <!-- 关注 组件 -->
                    <impComponent></impComponent>
                </el-tab-pane>
                <el-tab-pane label="推荐" name="second">
                    <commandComponent></commandComponent>
                </el-tab-pane>
                <el-tab-pane label="咨询" name="third">
                    <referComponent></referComponent>
                </el-tab-pane>
                <el-tab-pane label="热榜" name="fourth">Task</el-tab-pane>
            </el-tabs>
            <div class="container_more">

            </div>
        </div>

    </div>

</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import impComponent from '@/components/news/news_imp.vue'
import commandComponent from '@/components/news/news_command.vue'
import referComponent from '@/components/news/news_refer.vue'
import { getNewsAPI } from '@/api/index.js'
import mainstore from '@/store/index.js'
// 映射主仓库
const mainStore = mainstore()

const navList = ['后端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端', '前端']
const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
const updateCount = value => {
  mainStore.updateCount(value)
}
const getNews = async () => {
  try {
    const data = await getNewsAPI()
    console.log('data', data)
  } catch (error) {
    ElMessage({
      showClose: true,
      message: error.message,
      type: 'error',
    })
  }
}

</script>

<style lang="less" scoped>
.container {
    margin-top: 15px;
}

.container_nav {
    width: 100%;
    height: 65px;
    margin-bottom: 10px;

    // overflow: hidden;
    // background-color: pink;
    .ulbox {
        position: relative;
        // padding: 20px 30px;
        width: 100%;
        height: 65px;
        z-index: 22;
        background-color: rgb(141, 179, 228);
        overflow: hidden;

        ul {
            width: 100%;
            // height: 25px;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-wrap: wrap;

            li {
                margin-left: 30px;
                width: 40px;
            }

            li:nth-child(n+17) {
                margin-top: 30px;
            }

        }

        &:hover {
            transition: all 0.5s;
            height: 120px;
        }

    }

}

.extends {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background-color: aquamarine;
}

//  new

.container_news {

    margin-top: 20px;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-around;

    .news_left {
        flex: 2;
        background-color: pink;
    }

    .news_center {
        flex: 1;
        background-color: rgb(145, 159, 238);
    }

    .news_right {
        flex: 1;
        background-color: rgb(197, 255, 184);
    }
}

.container_white {
    height: 2000px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .demo-tabs {
        width: 900px;
        height: 100%;
        background-color: rgb(238, 190, 190);
    }

    .container_more {
        width: 288px;
        height: 900px;
        background-color: rgb(161, 196, 238);
    }
}
</style>
