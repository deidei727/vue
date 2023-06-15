<template>
    <div class="child">
        <h3>我是子组件1</h3>
        <hr>
        <span>这是数据:{{ useInfoDate.count }}</span> <br>
        <button @click="add">加一</button>
    </div>
</template>

<script setup lang="ts">
import useInfo from '../../store/modules/info'
let useInfoDate= useInfo()
const add=()=>{
    useInfoDate.count++
}
</script>

<style scoped>

.child{
    width: 300px;
    height: 300px;
    background-color: tomato;
}
</style>