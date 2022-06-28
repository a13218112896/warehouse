<template>
    <div>
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="sysUser"
        style="max-width: 450px"
        class="login-containter"
      >
        <span class="login-text">注册尚未完成，这可能需要一些时间，请耐心等候</span>

        <span class="to-signin" @click="toSignin">返回登录</span>
      </el-form>

    </div>
</template>
<script setup>
  import router from '../../router/index.js';
  import { reactive, ref, defineComponent, createApp, onMounted} from 'vue';
  import { User, Key} from '@element-plus/icons-vue';
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
  const submitLogin = () => {
    router.push('home')
    emit('getMsg','向父组件传值')
  };
  const toSignin = () => {
      emit('getMsg','toLogin')
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
.to-signin{
  display: block;
  cursor: pointer;
  color : #409eff;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
}
</style>