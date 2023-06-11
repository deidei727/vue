<template>
    <div>
        <h1>nihao</h1>
        <el-button type="success" :icon="Search">Default</el-button>
        <dataTest type="success" :icon="Search" @click="handler" title="这是标题 "> </dataTest>
    </div>
</template>

<script setup lang="ts">
import { Search} from '@element-plus/icons-vue'
import dataTest from './DataTest.vue'
 const handler=()=>{
    alert('你好，这是方法')
 }
</script>

<style scoped>

</style>