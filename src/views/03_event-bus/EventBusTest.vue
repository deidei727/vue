<template>
    <div class="fatherBus">
        <h1>我是全局事件总线父组件</h1>
        <hr>
        <div class="sister">
            <Child1></Child1>
            <Child2></Child2>
        </div>
       
    </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
</script>

<style scoped lang="scss">
.fatherBus{
    width: 100vm;
    height: 500px;
    background-color: yellowgreen;
    .sister{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}


</style>