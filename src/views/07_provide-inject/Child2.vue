<template>
    <div class="dau">
        <h3>我是子组件孙子</h3>
        
        <hr>
       {{ name }}
        <button @click="change"> 修改</button>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

let name=inject('name')
console.log(name)
let change=()=>{
    name.value='出租房'
}
</script>

<style scoped>
.dau{
    width: 200px;
    height: 200px;
    background-color: red;
}
</style>