<template>
    <div class="dau">
        <h3>我是子组件2</h3>
        <hr>
        <span> 这是数据: {{ useInfoDate.count }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useInfo from '../../store/modules/info';
let useInfoDate =useInfo()



</script>

<style scoped>
.dau{
    width: 300px;
    height: 300px;
    background-color: greenyellow;
}
</style>