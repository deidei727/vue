<template>
    <div class="child2">
        <h1>我是子组件妹妹</h1>
        <p>姐姐送给我的礼物：{{ bikeForMeimei }}</p>
    </div>
</template>

<script setup lang="ts">

import { onMounted ,ref} from 'vue';
import $bus from '../../bus';
const bikeForMeimei=ref('')
// $bus 上有on ，emit，off方法
// on：绑定事件，用来接收数据 在组件挂在完毕的时候就要给组件绑定事件来接收数据
// emit：发送时间，用于传递数据
onMounted(()=>{
    // 第一个参数：事件类型 第二个参数：事件回调
    $bus.on('bike', function(bike:string) {
        bikeForMeimei.value=bike
        console.log(bike)
    })
})

</script>

<style scoped>
.child2{
    width: 300px;
    height: 200px;
    background-color: aquamarine;
}
</style>