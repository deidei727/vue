<template>
    <div class="dau">
        <h3>我是子组件2</h3>
        <hr>
        <span> 这是数据: {{ todosStore.todos }}</span><br>
        <span>{{ todosStore.count }}</span>
        <button @click="add">加一</button>
    </div>
</template>

<script setup lang="ts">
import todosPinia from '../../store/modules/todos';
let todosStore =todosPinia()

const add=()=>{
    todosStore.count++
}

</script>

<style scoped>
.dau{
    width: 300px;
    height: 300px;
    background-color: greenyellow;
}
</style>