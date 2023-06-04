<template>
    <div class="father">
        <h1>我是自定义事件子组件给父组件传递数据</h1>
        <Event1 @click="handle1"></Event1>
        <Event2 @sendData="handle2" @click="handle3"></Event2>

    </div>
</template>

<script setup lang="ts">
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue"
const handle1=()=>{
    console.log(123)
}

const handle2=(p1,p2)=>{
    console.log(p1,p2)
}
const handle3=()=>{
    console.log(123)
}
</script>

<style scoped lang="scss">
.father{
    width: 400px;
    height: 400px;
    background-color: aqua;
}
</style>