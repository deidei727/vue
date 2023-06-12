<template>
    <div class="root">
        <h1>我是爷爷组件provide-inject</h1>
        <hr>
        {{ things }}
        <Child1 ></Child1>
    </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import { ref,provide } from 'vue';
let things=ref('别墅')
provide('name',things)

</script>

<style scoped>
.root {
    width: 100%;
    height: 500px;
    background-color: aquamarine;
}
</style>