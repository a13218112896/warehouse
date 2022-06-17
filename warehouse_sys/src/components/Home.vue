<template>
    <div class="common-layout">
        <el-container>
            <el-header>        
                <el-button type="primary" @click="ToWarehousing">入库</el-button>
                <el-button type="primary" @click="ToScreen">筛选</el-button>
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
.input{
    width: 50%;
    font-size: 16px;
}
</style>