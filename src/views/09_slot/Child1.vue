<template>
    <div class="child">
        <h3>我是子组件儿子</h3>
        <span>
            我有{{ childMoney }}
        </span>
        <hr>
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