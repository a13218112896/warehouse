<template>
    <div>
        <el-container>
            <el-header>        
                <el-button type="primary" @click="Toback">返回</el-button>
            </el-header>
        <el-main>
                <el-input class="input" v-model="search" placeholder="请输入元器件型号" />
                <el-button type="primary">搜索</el-button>
        </el-main>
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
import { ref } from 'vue'
import { reactive } from 'vue'
const Toback = () =>{
    router.push('/home')
}

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

</script>

<style scoped>

</style>