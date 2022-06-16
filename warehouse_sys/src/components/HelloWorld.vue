<template>
<div>
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 400px"
    class="loginContainter"
  >
    <el-form-item label="Username">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-button type="primary" class="login-btn" @click="submitLogin">登录</el-button>
  </el-form>
</div>
  
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('top')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
<style scoped>
.loginContainter {
    background-clip: padding-box;
    margin:15% auto 10px;
    width:350px;
    padding: 20px 25px 20px 25px;
    background-color: rgb(242, 248, 253);
    border: 1px solid #dfdfdf;
    border-radius: 8px;
}
.login-btn{
   width:100%; 
   background-color: #00a1d6; 
   height:40px;
   margin-top: 10px;
   font-size: 17px;
   border-radius: 7px;
}
</style>