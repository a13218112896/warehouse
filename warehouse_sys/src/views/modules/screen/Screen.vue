<template>
    <div>
        <el-container>
            <el-affix :offset="0">
                <el-header>
                    <userMessage></userMessage>
                    <div class="btns-box">
                        <span class="header-btn" @click="toWarehousing">入库</span>
                        <el-button  type="primary" @click="toBack">返回首页</el-button>
                    </div>
                </el-header>
            </el-affix>
            <el-main>
                <el-affix :offset="0">
                    <el-form  :inline="true" class="demo-form-inline" :model="form" label-width="120px">
                        <el-input class="input" v-model="search" placeholder=""/>
                        <el-button class="search-btn" type="primary">
                            <el-icon style="vertical-align: middle">
                            <Search/>
                            </el-icon>
                            <span style="vertical-align: middle"> 搜索 </span>
                        </el-button>
                    </el-form>
                </el-affix>
                <el-form class="screen-form">
                    <el-form-item class="form-item" v-for="(item, index) in form" :key="index">
                        <span class="form-label">{{item.name}}</span>
                        <el-select style="width: 100px" placeholder="Select" v-if="item.type=='select'" v-model="item.warehouse">
                            <el-option style="display: block;" v-for="(value,index) in item.warehouses" :key="index" :value="value.value"  />
                        </el-select>
                        <el-input class="form-input" style="width: 100px" v-if="item.type=='input'" v-model="form.name" />
                    </el-form-item>
                </el-form>
            </el-main>
            <el-footer>
                <ul>
                    <screenForm :screenForm="screenForm" ></screenForm>
                </ul>
            </el-footer>    
        </el-container>
        <el-backtop :right="100" :bottom="100" />
    </div>
</template>

<script setup>
import router from "../../../router/index.js";
  import { reactive, ref, defineComponent, createApp, onMounted} from 'vue';
import ScreenForm from '../../../components/screen/ScreenForm.vue'
import UserMessage from '../../../components/home/UserMessage.vue';
import { useRoute } from 'vue-router';
// 路由跳转
const toBack = () =>{
    router.push('/home')
}
const toWarehousing = () =>{
    router.push('/warehousing')
}
// 搜索结果对象
const screenForm = reactive(
    [
        {
            id: 1,
            model: 'HXS320F28034PNT',
            value: 'HXS320F28034PNT',
            type:'数字信号处理器',
            brand: '安森美',
            encapsulation: ' LQFP-80',
            num: 100,
            remarks: ''
        },
        {
            id: 2,
            model: 'HXS320F28034PNT',
            value: 'HXS320F28034PNT',
            type:'数字信号处理器',
            brand: '安森美',
            encapsulation: ' LQFP-80',
            num: 1023,
            remarks: ''
        },{
            id: 3,
            model: 'HXS320F28034PNT',
            value: 'HXS320F28034PNT',
            type:'数字信号处理器',
            brand: '安森美',
            encapsulation: ' LQFP-80',
            num: 1230,
            remarks: ''
        },{
            id: 23,
            model: 'HXS320F28034PNT',
            value: 'HXS320F28034PNT',
            type:'数字信号处理器',
            brand: '安森美',
            encapsulation: ' LQFP-80',
            num: 30,
            remarks: ''
        },{
            id: 24,
            model: 'HXS320F28034PNT',
            value: 'HXS320F28034PNT',
            type:'数字信号处理器',
            brand: '安森美',
            encapsulation: ' LQFP-80',
            num: 20,
            remarks: ''
        },{
            id: 3,
            model: 'HXS320F28034PNT',
            value: 'HXS320F28034PNT',
            type:'数字信号处理器',
            brand: '安森美',
            encapsulation: ' LQFP-80',
            num: 14,
            remarks: ''
        },{
            id: 23,
            model: 'HXS320F28034PNT',
            value: 'HXS320F28034PNT',
            type:'数字信号处理器',
            brand: '安森美',
            encapsulation: ' LQFP-80',
            num: 100,
            remarks: ''
        },{
            id: 24,
            model: 'HXS320F28034PNT',
            value: 'HXS320F28034PNT',
            type:'数字信号处理器',
            brand: '安森美',
            encapsulation: ' LQFP-80',
            num: 100,
            remarks: ''
        },
    ]
)
// 属性对象
const form = reactive(
    [
        {   
            name: '库区',
            type: 'select',
            warehouse: ' ',
            warehouses: 
            [
                {
                    value:'南校区',
                },
                {
                    value:'北校区',
                }
            ],
        },{
            name: '仓库',
            type: 'select',
            warehouse: ' ',
            warehouses: 
            [
                {
                    value:'教学楼一楼',
                },
                {
                    value:'实训楼二楼',
                },
                {
                    value:'实训楼四楼',
                }
            ],
        },{
            name: '封装',
            type: 'select',
            warehouse: ' ',
            warehouses: 
            [
                {
                    value:'axial lead',
                },
                {
                    value:'D2PAK',
                },
                {
                    value:'ITP-220AB',
                }
            ],
        },{
            name: '阻值',
            type: 'input',
            warehouse: ' ',
        },  
    ]
)
const search = ref()
const route = useRoute();
onMounted(() => {
    // console.log(route.query)
    search.value = route.query._value
})
</script>

<style scoped>
.el-header{
    width: 100%;
    height:60px;
    padding: 15px 50px 0;
    display: flex;
    justify-content: space-between;
    background-color: #e7f2ff;  
}
.el-dropdown-link{
    display: flex;
}
.user-name{
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
    font-size: 16px;
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
.el-main{
    /* background-color: #e6f3ff; */
    padding: 0 0px;
}
.demo-form-inline{
    width: 100%;
    display: flex;
    justify-content: center;
    padding:20px 0;
    background-color: #fff;
    
}
.screen-form{
    text-align: center;
    padding: 0 50px;
}
/* 搜索框 */
.input{
    width: 500px;
    font-size: 16px;
    height: 45px;
}

/* 搜索 */
.search-btn{
    height: 45px;
    width: 110px;
    font-size: 17px;
    border-radius: 0px 5px 5px 0px ;
    position: relative;
    top: 0px;
    left: -10px;
}
.form-item{
    display: inline-block;
    margin: 10px 15px;
}
.form-label{
    display: inline-block;
    margin-right: 10px;
}
.el-footer{
    padding: 0 50px;
    height: 100%;
}
</style>