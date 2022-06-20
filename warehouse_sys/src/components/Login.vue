<template>
<div id="login">
  <canvas class="canvas"></canvas>
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="sysUser"
    style="max-width: 400px"
    class="login-containter"
  >
    <span class="login-text">仓库管理系统</span>
    <el-form-item label="Username">
      <el-input v-model="sysUser.username" class="input-text" :prefix-icon="User" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="sysUser.password" class="input-text" :prefix-icon="Key" placeholder="请输入密码" />
    </el-form-item>
    <el-button type="primary" class="login-btn" @click="submitLogin">登录</el-button>
  </el-form>
</div>
</template>

<script setup>
import router from '../router/index.js';
import { reactive, ref, defineComponent } from 'vue';
import { User, Key} from '@element-plus/icons-vue';
import { createApp } from 'vue';


const labelPosition = ref('top')
const submitLogin = () =>{
  router.push('home')
}
const sysUser = reactive({
  // buddha 头像地址 mobile 手机号
  id: '',
  username: '',
  password: '',
  buddha:'',
  email: '',
  mobile: '',
})
const TodoItem = {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
}



</script>
<style scoped>
#login{
  width: 100%;
  height: 100vh;
   background-image: url(./imgs/loginback.png) ;
   background-repeat: no-repeat;
   background-size:100% 100%;
}
/* .canvas{
    position: absolute;
    top: 0;
    z-index:-1;
} */

.login-containter {
  background-clip: padding-box;
  width:350px;
  padding: 25px 25px 25px 25px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #eafaff;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-60%);
}
.login-text{
  text-align: center;
  display: inline-block;
  width: 100%;
  font-size: 22px;
  color: rgb(125, 171, 246);
  margin: 5px 0;
}
.input-text{
  height: 35px;
}
.login-btn{
   width:100%; 
   background-color: rgb(120, 169, 250); 
   height:40px;
   margin-top: 10px;
   margin-bottom: 10px;
   font-size: 17px;
   border-radius: 5px;
}
</style>