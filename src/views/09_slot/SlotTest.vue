<template>
    <div class="root">
        <h1>我是父组件slot</h1>
        <hr>
        <Child2 :todos="todos">
            <template v-slot="{$todosRow,$todosIndex}"> 
                <p :style="{color:$todosRow?.done?'red':'green'}" >
                    {{$todosIndex}}-{{$todosRow?.title}}
                </p>
            </template>
        </Child2>
        <Child1>
            <div>
                <pre>我是默认插槽的内容</pre>
            </div>
            <template v-slot:a>
                <div>
                   <pre> 我是具名插槽填充内容
                    a</pre>
                </div>
            </template>
            <template #b>
                <div>
                   <pre> 我是具名插槽填充内容b</pre>
                </div>
            </template>
        </Child1>
       
    </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue'
let todos = ref([
  { id: 1, title: '吃饭',done: true},
  { id: 2, title: '睡觉',done: false},
  { id: 3, title: '上厕所' ,done: true},
  { id: 4, title: '写作业' ,done: false},
])

</script>

<style scoped>
.root {
    width: 100%;
    height: 500px;
    background-color: aquamarine;
}
</style>