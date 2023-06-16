<template>
  <div class="dau">
    <h3>我是作用域插槽</h3>
    <hr />
    <ul>
        <li v-for="(item,index) in todos" :key="index">
            <slot :$todosRow="item"  :$todosIndex="index"></slot>
        </li>
    </ul>
    <slot ></slot>
  </div>
</template>

<script setup lang="ts">
defineProps(['todos'])
</script>

<style scoped>
.dau {
  width: 300px;
  height: 300px;
  background-color:greenyellow;
}
</style>
