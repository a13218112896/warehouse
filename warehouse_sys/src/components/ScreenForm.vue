<template>
  <div>
    <div v-for="item in screenForm" :key="item.index" class="form-item" >
        <div class="form-top">
            <a class="form-title" >{{item.value}} </a>
            <span class="form-value">{{item.type}}</span>
        </div>
        <ul class="form-ul">
            <li>
                <span style="color:#9a9a9a; font-size:14px;">编号:</span>
                <span style="color:#333333; font-size:14px;">{{item.id}}</span>
            </li>
            <li>
                <span style="color:#9a9a9a; font-size:14px;">型号:</span>
                <span style="color:#333333; font-size:14px;">{{item.model}}</span>
            </li>
            <li>
                <span style="color:#9a9a9a; font-size:14px;">厂商:</span>
                <span style="color:#333333x``; font-size:14px;">{{item.brand}}</span>
            </li>
        </ul>
        <div class="form-descriptions">
            <li>
                <span style="color:#9a9a9a; font-size:14px;">编号:</span>
                <span style="color:#333333; font-size:14px;">{{item.id}}</span>
            </li>
            <li>
                <span style="color:#9a9a9a; font-size:14px;">型号:</span>
                <span style="color:#333333; font-size:14px;">{{item.model}}</span>
            </li>
            <li>
                <span style="color:#9a9a9a; font-size:14px;">厂商:</span>
                <span style="color:#333333x``; font-size:14px;">{{item.brand}}</span>
            </li>
        </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed,defineProps} from 'vue'
export default{
    props: ["screenForm"],
}

</script>

<style scoped>
li{
    list-style: none;
}
.form-title{
    cursor: pointer;
    font-size: 18px;
    margin: 10px 0;
}
.form-value{
    margin-left: 10px;
    font-size:12px;
    color:#9a9a9a;
    background-color: #f1f1f1;
    display: inline-block;
    height: 100%;
    padding: 0 3px;
    
}
.form-item{
    padding: 0 30px;
    margin-top: 20px;
}
/* 清除浮动  */
.form-item:after{content:'';display:block;clear:both;}
.form-ul{
    width: 50%;
    float: left;
}
.form-ul li{
    margin-top: 5px;
}

.form-descriptions{
    width: 50%;
    float: left;
}
.form-descriptions li{
    margin-top: 5px;
}
</style>