<template>
    <div class="child1">
        <h1>我是子组件姐姐</h1>
        <button @click.once="present">我要送个妹妹一个礼物</button>
    </div>
</template>

<script setup lang="ts">

import $bus from '../../bus';

const present=()=>{
    $bus.emit("bike",'自行车')
}
</script>

<style scoped>
.child1 {
    width: 350px;
    height: 300px;
    background-color: springgreen;
}

</style>