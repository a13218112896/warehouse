<template>
  <div id="login">
    <canvas id="canvas"></canvas>
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
import { createApp } from 'vue';
import { onMounted } from 'vue';
// 引入icon
import { User, Key} from '@element-plus/icons-vue';


const labelPosition = ref('top')
// 路由跳转
const submitLogin = () =>{
  router.push('home')
}
// 登录表单
const sysUser = reactive({
  // buddha 头像地址 mobile 手机号
  id: '',
  username: '',
  password: '',
  buddha:'',
  email: '',
  mobile: '',
})
// 背景画布
const canvasBg = () => {
  var bodywidth = document.body.clientWidth;
  var bodyheight = document.body.clientHeight; 
  var canvas = document.getElementById('canvas');
  console.log(canvas.getContext)
  canvas.width = bodywidth;
  canvas.height = bodyheight;
  if(!canvas.getContext) return;
  var background = canvas.getContext('2d');
  background.strokeStyle = 'rgb(242,245,251)';
  for(var y = 0; y < canvas.height/30; y++){
      for(var x = 0; x < canvas.width/30;x++){
          background.strokeRect(x*30, 1+y*30, 30,30);
      }
  }
}
// 生命周期
onMounted(() => {
  canvasBg();
})
</script>
<style scoped>
#login{
  width: 100%;
  height: 100vh;
   /* background-image: url(./imgs/loginback.png) ;
   background-repeat: no-repeat;
   background-size:100% 100%; */
}
#canvas{
    position: absolute;
    top: 0;
    z-index:-1;
}

.login-containter {
  background-clip: padding-box;
  width:350px;
  padding: 25px 25px 25px 25px;
  background-color: #fcfdfd;
  border: 1px solid #409eff;
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
  /* color: rgb(125, 171, 246); */
  color: #409eff;
  margin: 5px 0;
}
.input-text{
  height: 35px;
}
.login-btn{
   width:100%; 
   /* background-color: rgb(120, 169, 250);  */
   background-color: #409eff;
   height:40px;
   margin-top: 10px;
   margin-bottom: 10px;
   font-size: 17px;
   border-radius: 5px;
}
</style>