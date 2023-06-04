<template>
    <div class="first">
        <h1>我是子组件1好</h1>
    <p>我有{{ modelValue }}元</p>
    <button @click="handler">点击和父亲同步</button>
    </div>
</template>

<script setup lang="ts">
const $emit =defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue:{
        type:Number,
        default:0
    }
})
const handler = ()=>{
    $emit('update:modelValue', props.modelValue+10);
}
</script>

<style scoped>
.first{
    width: 250px;
    height: 250px;
    background-color: greenyellow;
    text-align: center;
}
</style>