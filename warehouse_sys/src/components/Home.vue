<template>

    <div class="common-layout">
        <el-container>
            <el-header>        
                <el-button type="primary" @click="ToWarehousing">入库</el-button>
                <el-button type="primary" @click="ToScreen">筛选</el-button>
            </el-header>
            <el-affix :offset="0">
            <el-main>
                <el-input class="input" v-model="search" placeholder="请输入器件型号"/>
                <el-button class="search_btn" type="primary">
                    <el-icon style="vertical-align: middle">
                    <Search/>
                    </el-icon>
                    <span style="vertical-align: middle"> 搜索 </span>
                </el-button>
            </el-main>
            </el-affix>
            <el-footer>Main</el-footer>
        </el-container>
    </div>
</template>

<script setup>
import router from '../router/index.js'
import { ref } from 'vue'
const ToWarehousing = () =>{
    router.push('/warehousing')
}
const ToScreen = () =>{
    router.push('/screen')
}
const search = ref('')
</script>

<style scoped>
.el-header{
    text-align: center;
    background-color: aliceblue;
    padding-top: 20px;
}
.el-header > .el-button{
    width: 100px;
    height: 40px;
}
.input{
    width: 50%;
    font-size: 16px;
    height: 40px;
}
.search_btn{
    height: 40px;
    width: 80px;
}

.el-main{
    display: flex;
    justify-content: center;
    background-color: aliceblue;
}
.el-footer{
    display: flex;
    justify-content: center;
    height: 2000px;
}
</style>