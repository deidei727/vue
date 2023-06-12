<template>
    <div class="dau">
        <h3>我是子组件女儿</h3>
        <span>
            {{ dauMoney }}
        </span>
        <hr>
        <button @click="get($parent)"> 爸爸给我钱</button>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let dauMoney= ref(88888)
let get= ($parent)=>{
    console.log($parent)
    dauMoney.value+=100

    $parent.money-=100
    console.log($parent.childMoney)

}
</script>

<style scoped>
.dau{
    width: 300px;
    height: 300px;
    background-color: red;
}
</style>