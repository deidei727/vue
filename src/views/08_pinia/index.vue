<template>
    <div class="root">
        <h1>pinia</h1>
        <hr>
        <div class="container">
            <Child1 ></Child1>
         <Child2> </Child2>
        </div>
       
    </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import {ref } from 'vue';


</script>

<style scoped>
.root {
    width: 100%;
    height: 500px;
    background-color: aquamarine;
}
.container {
    display: flex;
}
</style>