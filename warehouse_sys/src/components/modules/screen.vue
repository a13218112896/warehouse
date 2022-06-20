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


        <div id="todo-list-app">
  <ol>
     <!--
      现在我们为每个 todo-item 提供 todo 对象
      todo 对象是变量，即其内容可以是动态的。
      我们也需要为每个组件提供一个“key”，稍后再
      作详细解释。
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
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