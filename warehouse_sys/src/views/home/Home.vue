<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <userMessage></userMessage>
                <div class="btns-box">
                    <span class="header-btn" @click="ToScreen">筛选</span>
                    <el-button  type="primary" @click="ToWarehousing">入库</el-button>
                </div>
            </el-header>
            <el-affix :offset="0">
                <el-main>
                    <el-form  :inline="true" class="demo-form-inline" :model="form" label-width="120px">
                        <el-input style="border-radius: 0 0 0 0;" class="input" v-model="search" placeholder=""/>
                        <el-button class="search-btn" type="primary">
                            <el-icon style="vertical-align: middle">
                            <Search/>
                            </el-icon>
                            <span style="vertical-align: middle"> 搜索 </span>
                        </el-button>
                    </el-form>
                </el-main>
            </el-affix>
            <el-footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
import router from '../../router/index.js'
import { ref } from 'vue'
import { reactive } from 'vue'
import UserMessage from '../../components/home/UserMessage.vue';
const ToWarehousing = () =>{
    router.push('/warehousing')
}
const ToScreen = () =>{
    router.push('/screen')
}
const logOut = () =>{
    router.push('/login')
}
const search = ref('')
const form = reactive(
    [
        {
            name: '库区',
            type: 'select',
            warehouse: ' ',
            warehouses: [
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
            warehouses: [
                {
                    value:'教学楼一楼',
                },{
                    value:'实训楼二楼',
                },{
                    value:'实训楼四楼',
                }
            ],
        },{
            name: '阻值',
            type: 'input',
            warehouse: ' ',
            warehouses: [
                {
                    value:'教学楼一楼',
                },{
                    value:'实训楼二楼',
                },{
                    value:'实训楼四楼',
                }
            ],
        },
    ]
)
const onSubmit = () => {
  console.log('submit!')
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
.el-main{
    margin-top:300px;
    display: flex;
    justify-content: center;
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



.demo-form-inline{
    width: 100%;
    display: flex;
    justify-content: center;
}
.el-footer{
    display: flex;
    justify-content: center;
}
</style>
