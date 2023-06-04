<template>
    <div class="father">
        <h1>
            我是props父组件给子组件传递数据
        </h1>
       <h1>
        我是父组件
       </h1>
       <hr>
       <Son :fatherLove="fatherLove"/>

    </div>
</template>

<script setup lang="ts">
import Son from './Son.vue'
import {ref} from 'vue'

const fatherLove=ref('无穷大')
</script>

<style scoped lang="scss">
.father {
    width: 500px;
    height: 500px;
    background-color: aqua;
}
</style>