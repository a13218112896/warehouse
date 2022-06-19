<template>
    <div>
        <el-container>
            <el-header>        
                <el-button type="primary" @click="Toback">返回</el-button>
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
import router from "../../router/index.js";
const Toback = () =>{
    router.push('/home')
}
</script>

<style scoped>

</style>