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
                <el-button @click="toBack">返回</el-button>
                <div class="message-ontainer">
                    <div class="message-value">
                        <span>{{data.value}}</span>
                        <span>{{data.type}}</span>
                    </div>
                    <div class="message-main">
                        <div class="message-form">
                            <p>生产厂商：{{data.brand}}</p>
                            <p>封装：{{data.encapsulation}}</p>
                            <p>总剩余数量：{{data.num}}</p>
                        </div>
                        <div>
                            <el-select  class="message-form-select" v-model="warehouseAddress" placeholder="请选择出库地点">
                                <el-option
                                v-for="item in warehouseAddressData"
                                :key="item.address"
                                :label="item.address"
                                :value="item.address"
                                />
                            </el-select>
                            <el-input-number class="message-form-input" style="display: block;" v-model="outNum" :min="1" :max="data.num"/>
                            <el-button type="primary" class="message-form-button" @click="warehousingData(item.address,item)">出库</el-button>
                        </div>
                    </div>
                </div>
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

</script>
<script setup>
const route = useRoute();
const ToWarehousing = () =>{
    router.push('/warehousing')
}
const ToScreen = () =>{
    router.push('/screen')
}
const logOut = () =>{
    router.push('/login')
}
const toBack = () =>{
    router.go(-1)
}
const warehouseAddress = ref()
const warehouseAddressData = reactive([
    {
        address: '教学楼一楼',
        num: '30',
    },
    {
        address: '教学楼二楼',
        num: '70',
    },
])
const warehousingData = () =>{
    
}
const outNum = ref(1)
const data = ref({
    // id: 2,
    // model: 'HXS320F28034PNT',
    // value: 'HXS320F28034PNT',
    // type:'数字信号处理器',
    // brand: '安森美',
    // encapsulation: ' LQFP-80',
    // num: 100,
    // remarks: ''
})
onMounted(() => {
    dataShow.value = true;
    // console.log(route.query)
    data.value = route.query
    console.log(data)
})
</script>

<style scoped lang="less">
.el-header{
    height:60px;
    padding: 15px 50px 0;
    display: flex;
    justify-content: space-between;
    background-color: #e7f2ff;
    position: fixed;
    width: 100%;
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
}
.el-main{
    margin-top:60px;
    padding: 20px 60px;
    .message-ontainer{
        margin-top: 20px;
        padding: 10px 60px;
        border-radius: 10px;
        background-color: #e8f4ff;
        .message-value{
            margin: 20px 0 30px 0;
        }
        .message-value > span:first-child{
            font-size: 24px;
            color: #409eff;
        }
        .message-value > span:last-child{
            font-size: 12px;
            display: inline-block;
            background-color: #ddedff;
            color: rgb(143, 143, 143);
            padding: 3px 5px;
            margin-left: 10px;
            vertical-align:text-top;
        }
        .message-main{
            display: flex;
            justify-content: space-between;
            padding : 10px 20px;
            .message-form{
                padding: 0px  20px;
            }
            .message-form > p{
                color: #3a3a3a;
                display: block;
                margin-bottom: 15px;
            }
            .message-form-select{
                margin-bottom: 10px;
                width: 150px;
            }
            .message-form-input{
                margin-bottom: 10px;

            }
            .message-form-button{
                margin-top: 40px;
                margin-bottom: 10px;
                display: block;
                width: 150px;
            }
        }
    }
}




</style>
