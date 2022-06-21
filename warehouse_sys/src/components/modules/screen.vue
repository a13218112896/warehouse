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
            <el-footer>
                <el-form-item v-for="(item, index) in form" :key="index" :label="item.name">
                    <el-select v-if="item.type=='select'" v-model="item.warehouse">
                        <el-option v-for="(value,index) in item.warehouses" :key="index" :value="value.value" />
                    </el-select>
                    <el-input v-if="item.type=='input'" v-model="form.name" />
                </el-form-item>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
import router from "../../router/index.js";
import { ref, reactive } from 'vue'
const toBack = () =>{
    router.push('/home')
}
const toWarehousing = () =>{
    router.push('/warehousing')
}
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
</style>