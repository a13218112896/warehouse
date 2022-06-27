<template>
    <div>
        <el-container>
            <el-header>
                <el-dropdown class="header-img">
                    <span class="el-dropdown-link">
                        <el-avatar :size="30" src='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' />    
                        <div class="user-name">Admin</div>
                    </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <div class="btns-box">
                    <span class="header-btn" @click="toWarehousing">入库</span>
                    <el-button  type="primary" @click="toBack">返回首页</el-button>
                </div>
            </el-header>
            <el-main>
                <el-form  :inline="true" class="demo-form-inline" :model="form" label-width="120px">
                        <el-input class="input" v-model="search" placeholder=" "/>
                        <el-button class="search_btn" type="primary">
                            <el-icon style="vertical-align: middle">
                            <Search/>
                            </el-icon>
                            <span style="vertical-align: middle"> 搜索 </span>
                        </el-button>
                </el-form>
                <el-form class="screen-form">
                    <el-form-item class="form-item" v-for="(item, index) in form" :key="index" >
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
                    <screenForm :screenForm="screenForm"></screenForm>
                </ul>
            </el-footer>    
        </el-container>
    </div>
</template>

<script setup>
import router from "../../../router/index.js";
import { ref, reactive, computed,defineComponent} from 'vue'
import ScreenForm from '../../../components/ScreenForm.vue'

// 路由跳转
const toBack = () =>{
    router.push('/home')
}
const toWarehousing = () =>{
    router.push('/warehousing')
}
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
        },
        {
            name: '阻值',
            type: 'input',
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
        },
    ]
)


</script>

<style scoped>
.el-header{
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
    padding: 0 50px;
}
.demo-form-inline{
    width: 100%;
    display: flex;
    justify-content: center;
    margin:20px 0;
}
/* .screen-form{
    
} */
/* 搜索框 */
.input{
    width: 500px;
    font-size: 16px;
    height: 45px;
}
/* 搜索 */
.search_btn{
    height: 45px;
    width: 110px;
    font-size: 17px;
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