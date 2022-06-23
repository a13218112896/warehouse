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
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="expand">
                    <template #default="props">
                        <div m="4">
                            <p m="t-0 b-2">State: {{ props.row.state }}</p>
                            <p m="t-0 b-2">City: {{ props.row.city }}</p>
                            <p m="t-0 b-2">Address: {{ props.row.address }}</p>
                            <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
                        </div>
                    </template>
                    </el-table-column>
                    <el-table-column label="Date" prop="date" />
                    <el-table-column label="Name" prop="name" />
                </el-table>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
import router from "../../../router/index.js";
import { ref, reactive } from 'vue'
// 路由跳转
const toBack = () =>{
    router.push('/home')
}
const toWarehousing = () =>{
    router.push('/warehousing')
}
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
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
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
    padding: 0 40px;
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
    padding: 0 40px;
}
</style>