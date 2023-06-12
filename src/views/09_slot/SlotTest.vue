<template>
    <div class="root">
        <h1>我是父组件</h1>
        <span>我有{{ money }}</span>
        <button @click="give">儿子给我10元</button>
        <hr>
        <Child1 ref="son"></Child1>
        <Child2> </Child2>
    </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { onMounted, ref } from 'vue';
let money=ref(10000)
let son=ref()
let childMoney=ref(0)
let give=()=>{
    money.value+=10
   
   childMoney.value-=10
}
defineExpose({
    money, childMoney,
})
onMounted(()=>{
    childMoney.value= son.value.childMoney
    console.log(son.value.childMoney);

})

</script>

<style scoped>
.root {
    width: 100%;
    height: 500px;
    background-color: aquamarine;
}
</style>