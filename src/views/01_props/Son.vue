<template>
    <div class="son">
        <h1>我是子组件</h1>
        <h2>这是父组件传递过来的数据：{{ props.fatherLove }}</h2>
        <button @click="change">点击</button>
    </div>
</template>

<script setup lang="ts">

const props=defineProps(["fatherLove"]);
// const change=()=>{
//     // props.fatherLove+='nihao'
//     console.log(props.fatherLove)
// }
</script>

<style scoped lang="scss">
.son {
    width: 300px;
    height: 300px;
    background-color: blue;
}
</style>