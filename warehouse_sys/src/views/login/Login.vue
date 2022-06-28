<template>
  <div id="login">
    <canvas id="canvas"></canvas>
    <signin v-if= "signinShow" @getMsg="signinMsg"></signin>
    <signup v-if= "signupShow" @getMsg="signupMsg"></signup>
    <signupIng v-if= "signupIngShow" @getMsg="signupIngMsg"></signupIng>
  </div>  
</template>

<script setup>
  import { reactive, ref, defineComponent, createApp, onMounted } from 'vue';
  // 引入登录/注册组件
  import Signin from '../../components/login/Signin.vue'
  import Signup from '../../components/login/Signup.vue'
  import SignupIng from '../../components/login/SignupIng.vue'
  // 登录页背景
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
  // 控制登录注册组件的展示
  const signinShow = ref(true)
  const signupShow = ref(false)
  const signupIngShow = ref(false)

  const signinMsg = (msg) =>{
    signinShow.value = false
    signupShow.value = true
    console.log(msg)
  }
  const signupMsg = (msg) =>{
    signupShow.value = false
    signupIngShow.value = true
    console.log(msg)
  }
  const signupIngMsg = (msg) =>{
    signinShow.value = true
    signupIngShow.value = false
    console.log(msg)
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
}
#canvas{
    position: absolute;
    top: 0;
    z-index:-1;
}
</style>