<template>
    <div>
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="sysUser"
        style="max-width: 450px"
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
        <span class="to-signup" @click="toSignup">没有账号？去注册</span>
      </el-form>
    </div>
</template>
<script setup>
  import router from '../../router/index.js';
  import { reactive, ref, defineComponent, createApp, onMounted,defineEmits} from 'vue';
  import { User, Key} from '@element-plus/icons-vue';
  // 子向父传值
  const emit= defineEmits(["getMsg"])
  const labelPosition = ref('top')
  // 登录表单
  const sysUser = reactive({
    // buddha-头像地址  mobile-手机号
    id: '',
    username: '',
    password: '',
    buddha:'',
    email: '',
    mobile: '',
  })
  // 登录成功跳转
  const submitLogin = () => {
    router.push('home')
  };
  // 传值
  const toSignup = () => {
    emit('getMsg','false')
  }

</script>

<style scoped>
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
.to-signup{
  display: block;
  cursor: pointer;
  color : #409eff;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
}
</style>