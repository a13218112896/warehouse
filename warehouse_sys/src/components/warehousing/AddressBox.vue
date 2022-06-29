<template>
    <div>
        <div style="font-size:12px;margin-bottom:10px;color:#727272">
            {{addressBox.value}}查询结果:
        </div>
        <div class="warehouse-box" v-for="item in addressBox.warehouseBox" :key="item.index">
            <div class="warehouse-box-name">
                <span>{{item.name}}</span>
            </div>
            <div class="reservoir-box" v-for="item in item.reservoir" :key="item.index">
                <span class="reservoir-box-name">{{item.name}}</span>
                <div class="shelves-box-X"  v-for="x in Number(item.specifications.split('*')[1])" :key="x.index">
                    <div class="shelves-box" v-for="y in Number(item.specifications.split('*')[0])" :key="y.index">
                        <div class="shelves-box-identifier">
                            编号:{{item.shelves.shelvesBox[(x-1)*Number(item.specifications.split('*')[0])+y-1].identifier}}
                        </div>
                        <div class="shelves-box-stuffId">
                            id:{{item.shelves.shelvesBox[(x-1)*Number(item.specifications.split('*')[1])+y-1].stuffId}}
                        </div>
                        <div class="shelves-box-stuffNum">
                            存放物品数量:{{item.shelves.shelvesBox[(x-1)*Number(item.specifications.split('*')[1])+y-1].stuffNum}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script Setup>
import { ref, reactive, computed,defineProps} from 'vue'
export default{
    props: ["addressBox"],

}

</script>

<style scoped>
.warehouse-box{
    padding: 10px 20px;
    color: #3d3d3d;
}
.warehouse-box-name{
    font-size: 24px;
    margin-bottom: 10px;
}
.reservoir-box{
    padding: 0 20px;
}
.reservoir-box-name{
    font-size: 18px;
}
.shelves-box-X{
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
    /* overflow: auto; */
}
.shelves-box{
    display: inline-block;
    padding: 15px;
    margin: 0 10px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 5px;
    background-color: #e7f2ff;
    color: #437ab1;
    /* min-width: 100px; */
}
.shelves-box:hover{
    background-color: #c4dfff;
    transition:all 0.4s;
}
.shelves-box-identifier{
    padding-bottom: 5px;
}
.shelves-box-stuffId{
    padding-bottom: 5px;
}
.shelves-box-stuffNum{
    padding-bottom: 0px;
}
</style>