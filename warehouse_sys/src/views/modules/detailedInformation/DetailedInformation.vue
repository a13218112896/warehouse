<template>
    <div>
        <el-container>
            <el-header>
                <userMessage></userMessage>
                <div class="btns-box">
                    <span class="header-btn" @click="ToScreen">筛选</span>
                    <el-button  type="primary" @click="ToWarehousing">入库</el-button>
                </div>
            </el-header>
            <el-main>
            </el-main>
            <el-footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import { ref, reactive, computed,defineProps, onMounted} from 'vue'
import router from '../../../router/index.js'
import { useRoute } from 'vue-router';
import userMessage from '../../../components/home/UserMessage.vue'
const dataShow = ref(false);
const data = reactive({
    id: 1,
    model: 'HXS320F28034PNT',
    value: 'HXS320F28034PNT',
    type:'数字信号处理器',
    brand: '安森美',
    encapsulation: ' LQFP-80',
    num: 100,
    remarks: ''
})
export default{
    setup() {
        const route = useRoute();
        // mounted
        onMounted(() => {
            dataShow.value = true;
            console.log(route.query)
            // data.message = route.query
            console.log(data.message)
        })

    }
}
</script>
<script setup>
const ToWarehousing = () =>{
    router.push('/warehousing')
}
const ToScreen = () =>{
    router.push('/screen')
}
const logOut = () =>{
    router.push('/login')
}
</script>
<style scoped>
.el-header{
    height:60px;
    padding: 15px 50px 0;
    display: flex;
    justify-content: space-between;
    background-color: #e7f2ff;  
    position: fixed;
    width: 100%;
}
.el-dropdown-link{
    display: flex;
}
.user-name{
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
    font-size: 16px;
    cursor: default;
}
.btns-box{
    display: flex;
}
/* 筛选按钮 */
.header-btn{
    display: block;
    width: 60px;
    text-align: center;
    color: #409eff;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    cursor: pointer;
}
</style>
