<template>

    <div class="common-layout">
        <el-container>
            <el-header>        
                <el-button type="primary" @click="ToWarehousing">入库</el-button>
                <el-button type="primary" @click="ToScreen">筛选</el-button>
            </el-header>
            <el-affix :offset="0">
                <el-main>
                    <el-form  :inline="true" class="demo-form-inline" :model="form" label-width="120px">
                        <el-from-item class="main_search">
                            <el-input class="input" v-model="search" placeholder="请输入器件型号"/>
                            <el-button class="search_btn" type="primary">
                                <el-icon style="vertical-align: middle">
                                <Search/>
                                </el-icon>
                                <span style="vertical-align: middle"> 搜索 </span>
                            </el-button>
                        </el-from-item>
                        <el-form-item v-for="(item, index) in form" :key="index" :label="item.name">
                            <el-select v-if="item.type=='select'" v-model="item.warehouse">
                                <el-option v-for="(value,index) in item.warehouses" :key="index" :value="value.value" />
                            </el-select>
                            <el-input v-if="item.type=='input'" v-model="form.name" />
                        </el-form-item>
                        
                    </el-form>
                </el-main>
            </el-affix>
            <el-footer>
                main
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
import router from '../router/index.js'
import { ref } from 'vue'
import { reactive } from 'vue'
const ToWarehousing = () =>{
    router.push('/warehousing')
}
const ToScreen = () =>{
    router.push('/screen')
}
const search = ref('')
const form = reactive([
    {   
        name: '库区',
        type: 'select',
        warehouse: ' ',
        warehouses: [
            {
                value:'南校区',
            },{
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
    background-color: aliceblue;
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
}
.el-header > .el-button{
    width: 70px;
    height: 35px;
}
.input{
    width: 100%;
    font-size: 16px;
    height: 40px;
}
.search_btn{
    height: 40px;
    width: 100px;
}

.el-main{
    display: flex;
    justify-content: center;
    background-color: aliceblue;
}
.main_search{
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}
.el-footer{
    display: flex;
    justify-content: center;
    height: 2000px;
}
</style>