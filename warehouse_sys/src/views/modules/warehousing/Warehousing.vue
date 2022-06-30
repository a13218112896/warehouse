<template>
    <div>
        <el-container>
            <el-header>
                <userMessage></userMessage>
                <div class="btns-box">
                    <span class="header-btn" @click="toScreen">筛选</span>
                    <el-button  type="primary" @click="toBack">返回首页</el-button>
                </div>
            </el-header>
            <el-main>
                <el-affix :offset="0">
                    <el-form  :inline="true" class="demo-form-inline" :model="form" label-width="120px">
                        <el-input class="input" v-model="search" placeholder=""/>
                        <el-button class="search-btn" type="primary" @click="searchGoods">
                            <el-icon style="vertical-align: middle">
                            <Search/>
                            </el-icon>
                            <span style="vertical-align: middle"> 搜索 </span>
                        </el-button>
                    </el-form>
                </el-affix>

                <el-form class="screen-form">
                    <el-form-item class="form-item" v-for="(item, index) in form.values" :key="index">
                        <span class="form-label">{{item.name}}</span>
                        <el-select style="width: 100px" placeholder="Select" v-if="item.type=='select'" v-model="item.warehouse">
                            <el-option style="display: block;" v-for="(value,index) in item.warehouses" :key="index" :value="value.value"  />
                        </el-select>
                        <el-input class="form-input" style="width: 100px" v-if="item.type=='input'" v-model="form.name" />
                    </el-form-item>
                </el-form>
            </el-main>
            <el-footer>
                <addressBox :addressBox="addressBox"></addressBox>
            </el-footer>
        </el-container>
        <el-backtop :right="100" :bottom="100" />
    </div>
</template>

<script setup>
import router from "../../../router/index.js";
import { ref, reactive } from 'vue'
import UserMessage from '../../../components/home/UserMessage.vue';
import AddressBox from '../../../components/warehousing/AddressBox.vue'
const toBack = () =>{
    router.push('/home')
}
const toScreen = () =>{
    router.push('/screen')
}
// 属性写入（搜索按钮点击事件）
const searchGoods = () =>{
    form.values = formText
}
// 属性对象
const form = reactive([])
const formText = reactive(
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
const addressBox = reactive({
    value: 'HXS320F28034PNT',
    warehouseBox: [
        // 仓库
        {   
            id: 1,
            name:'北校区仓库',
            address:'北校区',
            reservoir:[
                // 库区
                {
                    warehouseId:11,
                    name:'教学楼一楼库区',
                    address: '教学楼一楼',
                    specifications: '5*5',
                    // 货架
                    shelves:{
                        name:'一号货架',
                        // 存储盒
                        shelvesBox:[
                            {
                                identifier: '001',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '002',
                                stuffId: '222',
                                stuffNum: '50',
                            },
                            {
                                identifier: '003',
                                stuffId: '333',
                                stuffNum: '157',
                            },
                            {
                                identifier: '004',
                                stuffId: '111',
                                stuffNum: '1345',
                            },
                            {
                                identifier: '005',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '006',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '007',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '008',
                                stuffId: '222',
                                stuffNum: '100',
                            },
                            {
                                identifier: '009',
                                stuffId: '333',
                                stuffNum: '100',
                            },
                            {
                                identifier: '010',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '011',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '012',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '013',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '014',
                                stuffId: '222',
                                stuffNum: '100',
                            },
                            {
                                identifier: '015',
                                stuffId: '333',
                                stuffNum: '100',
                            },
                            {
                                identifier: '016',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '017',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '018',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '019',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '020',
                                stuffId: '222',
                                stuffNum: '100',
                            },
                            {
                                identifier: '021',
                                stuffId: '333',
                                stuffNum: '100',
                            },
                            {
                                identifier: '022',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '023',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '024',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '025',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                        ]
                    }
                },
                {
                    warehouseId:11,
                    name:'教学楼二楼库区',
                    address: '教学楼二楼',
                    specifications: '10*2',
                    // 货架
                    shelves:{
                        name:'一号货架',
                        // 存储盒
                        shelvesBox:[
                            {
                                identifier: '001',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '002',
                                stuffId: '222',
                                stuffNum: '100',
                            },
                            {
                                identifier: '003',
                                stuffId: '333',
                                stuffNum: '100',
                            },
                            {
                                identifier: '004',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '005',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '006',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '007',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '008',
                                stuffId: '222',
                                stuffNum: '100',
                            },
                            {
                                identifier: '009',
                                stuffId: '333',
                                stuffNum: '100',
                            },
                            {
                                identifier: '010',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '011',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '012',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '013',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '014',
                                stuffId: '222',
                                stuffNum: '100',
                            },
                            {
                                identifier: '015',
                                stuffId: '333',
                                stuffNum: '100',
                            },
                            {
                                identifier: '016',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '017',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '018',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '019',
                                stuffId: '111',
                                stuffNum: '100',
                            },
                            {
                                identifier: '020',
                                stuffId: '222',
                                stuffNum: '100',
                            }
                        ]
                    }
                }
            ]
        },
    ]
})
const addressData = reactive({

})

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