<template>
    <div class="child">
        <h3>我是子组件儿子</h3>
        <hr>
        <h3>默认插槽开始</h3>
        <slot></slot>
        <h3>结束</h3>

        <div>
            <h3> 具名插槽开始a</h3>
           <slot name="a"></slot>
           <h3>结束a</h3>

           <h3> 具名插槽开始b</h3>
           <slot name="b"></slot>
           <h3>结束b</h3>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let childMoney=ref(100)
defineExpose({
    childMoney
})
</script>

<style scoped>

.child{
    width: 300px;
    height: 300px;
    background-color: tomato;
}
</style>