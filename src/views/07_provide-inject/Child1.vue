<template>
    <div class="child">
        <h3>我是子组件儿子</h3>
        {{ name }}
        <hr>
        <Child2></Child2>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import Child2 from './Child2.vue';
let name=inject('name')
</script>

<style scoped>

.child{
    width: 300px;
    height: 300px;
    background-color: tomato;
}
</style>