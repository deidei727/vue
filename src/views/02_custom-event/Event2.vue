<template>
    <div class="second">
        我是子组件2号
        <button @click="send">点我</button>
        <!-- <button @click="emits('click','nihao')">点我执行自定义事件</button> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let count =ref(0)

// defineEmits()方法返回一个箭头函数
let emits = defineEmits(["sendData","click"])
const send=()=>{

    // 第一个是自定义事件的名称，后面的参数是传递的数据
    emits("sendData",count.value++,"传递数据2");
}
</script>

<style scoped lang="scss">  
.second{
    width: 150px;
    height: 150px;
    background-color: cadetblue;
}
</style>