<template>
    <div :title="title">
        <el-button :="$attrs" ></el-button>
        <button>你好</button>
    </div>
</template>

<script setup lang="ts">
import {useAttrs } from 'vue'
let $attrs = useAttrs()
const title =defineProps(["title"])
console.log($attrs)
</script>

<style scoped>

</style>