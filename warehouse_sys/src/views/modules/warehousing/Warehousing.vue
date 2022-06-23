<template>
    <div>
        <el-container>
            <el-header>
                <el-dropdown class="header-img">
                    <span class="el-dropdown-link">
                        <el-avatar :size="30" src='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' />    
                        <div class="user-name">Admin</div>
                    </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <div class="btns-box">
                    <span class="header-btn" @click="toScreen">筛选</span>
                    <el-button  type="primary" @click="toBack">返回首页</el-button>
                </div>
            </el-header>
        <el-main>
                <el-input class="input" v-model="search" placeholder="请输入元器件型号" />
                <el-button type="primary">搜索</el-button>
        </el-main>
        <el-footer>Main</el-footer>
        </el-container>
    </div>
</template>

<script setup>
import router from "../../../router/index.js";
import { ref, reactive } from 'vue'
const toBack = () =>{
    router.push('/home')
}
const toScreen = () =>{
    router.push('/screen')
}
</script>

<style scoped>
.el-header{
    height:60px;
    padding: 15px 50px 0;
    display: flex;
    justify-content: space-between;
    background-color: #e7f2ff;  
} 
.el-dropdown-link{
    display: flex;
}
.user-name{
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
    font-size: 16px;
}
.btns-box{
    display: flex;
}
/* 筛选按钮 */
.header-btn{
    display: block;
    width: 60px;
    text-align: center;
    color: #409eff;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    cursor: pointer;
}
</style>