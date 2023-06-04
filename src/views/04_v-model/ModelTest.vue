<template>
    <div class="father">
        <h1>
        我是v-model的父组件
        </h1>
        <p>父亲：{{ money }}元</p>
        <span>上一页：{{ prePageNO }} </span>
        <span> 下一页：{{ nextPageNO }}</span>
        <hr>
        <div class="container">
            <!-- <Child1 :modelValue="money" @update:modelValue="getMoney"></Child1> -->
             <Child1 v-model="money"/>
             <Child2 v-model:prePageNO="prePageNO" v-model:nextPageNO="nextPageNO"/>
        </div>
       
    </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import {ref} from'vue'

let money=ref(100)
let prePageNO=ref(12)
let nextPageNO=ref(14)

</script>

<style scoped>
.father {
    widows: 100vm;
    height: 400px;
    background-color: burlywood;
}
.container{
    display: flex;
    justify-content: space-around;
}
</style>