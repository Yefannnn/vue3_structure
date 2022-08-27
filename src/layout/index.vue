<template>
    <div class="header">
        <div class="header_left">
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li v-for="item in headerListLeft" :key="item">
                    <router-link class="item_link" :to="item.path">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
        <div class="header_center">
            <div class="search">
                <div class="search_left">
                    <input class="search_left_input" type="text" name="" id="">
                </div>
                <div class="search_right">
                    <el-icon :size="16" color="#fff">
                        <Search />
                    </el-icon>
                    <span class="search_right_text">搜索</span>
                </div>
            </div>
        </div>
        <div class="header_rights">
            <ul>
                <el-badge is-dot v-for="item in headerListRight" :key="item">{{ item }}</el-badge>
                <li>
                    <el-button type="danger">发布
                        <el-icon>
                            <CaretBottom />
                        </el-icon>
                    </el-button>
                </li>
            </ul>

        </div>

    </div>
    <router-view></router-view>

</template>

<script setup>
import { ref } from 'vue'
// const headerListTitle = ['博客', '下载·课程', '问答', '学习', '社区', '认证', 'GitCode', '云服务']
const headerListLeft = [
  {
    path: '/home/boke',
    title: '博客',
  },
  {
    path: '/home/download',
    title: '下载·课程',
  },
  {
    path: '/question',
    title: '问答',
  },
  {
    path: '/home/study',
    title: '学习',
  },
  {
    path: '/home/sociel',
    title: '社区',
  },
  {
    path: '/home/token',
    title: '认证',
  },
  {
    path: '/home/gitCode',
    title: 'gitCode',
  },
  {
    path: '/home/yun',
    title: '云服务',
  },
]
const headerListRight = ['会员中心', '足迹', '动态', '消息', '创作中心']
</script>

<style lang="less" scoped>
.header {
    display: flex;
    height: 50px;
    width: 100%;
    background-color: pink;

    .header_left {
        flex: 5;
        background-color: rgb(16, 130, 229);

        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;

            li {
                text-align: center;
                font-size: 14px;

                .item_link {
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }

    .header_center {
        flex: 3;
        background-color: aquamarine;
        display: flex;
        justify-content: center;
        align-items: center;

        .search {
            position: relative;
            width: 300px;
            height: 70%;
            background-color: aliceblue;
            border-radius: 25px;
            overflow: hidden;

            .search_left {
                padding-left: 20px;
                width: 100%;
                height: 100%;

                .search_left_input {
                    display: inline-block;
                    width: 300px;
                    height: 100%;
                    outline: none;
                    border: 0;
                }
            }

            .search_right {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                right: 0;
                top: 0;
                width: 100px;
                height: 100%;
                background-color: orange;
                cursor: pointer;

                .search_right_text {
                    color: #fff;
                    font-size: 16px;
                    margin-left: 10px;
                    user-select: none;
                }
            }
        }
    }

    .header_rights {
        flex: 4;
        background-color: rgb(209, 125, 0);

        ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 14px;
        }
    }
}
</style>
