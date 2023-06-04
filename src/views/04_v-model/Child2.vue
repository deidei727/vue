<template>
  <div class="second">
    <h1>我是子组件2好</h1>
    <button @click="pre">上一页{{ prePageNO }}</button>
    <button @click="next">下一页{{ nextPageNO }}</button>
  </div>
</template>

<script setup lang="ts">
let $emit = defineEmits(['update:prePageNO', 'update:nextPageNO'])
let props = defineProps(['prePageNO', 'nextPageNO'])
const pre = () => {
  $emit('update:prePageNO', props.prePageNO - 1)
}
const next = () => {
  $emit('update:nextPageNO', props.nextPageNO + 1)
}
</script>

<style scoped>
.second {
  width: 250px;
  height: 250px;
  background-color: aquamarine;
  text-align: center;
}
</style>
