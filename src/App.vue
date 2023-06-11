<script setup lang="ts"></script>

<template>
  <div class="com">
    <h1>组件间通信（共9种）</h1>
    <div>
      <router-link to="/props_pre">props</router-link>&nbsp;&nbsp;
      <router-link to="/event_pre">custom event</router-link>&nbsp;&nbsp; 
    <router-link to="/bus_pre">event bus</router-link>&nbsp;&nbsp; 
      <router-link to="/model_pre">v-model</router-link>&nbsp;&nbsp;
      <router-link to="/attrs-listeners_pre">useAttrs</router-link>&nbsp;&nbsp;
      <!-- <router-link to="/ref-parent_pre">ref$parent</router-link>&nbsp;&nbsp; -->
      <!-- <router-link to="/provide-inject_pre">provide-inject</router-link>&nbsp;&nbsp; -->
      <!-- <router-link to="/vuex_pre">pinia</router-link>&nbsp;&nbsp; -->
      <!-- <router-link to="/slot_pre">slot</router-link>&nbsp;&nbsp;  -->
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.com {
  a {
    font-size: 16px;
    margin-right: 5px;
    &.router-link-active {
      color: red;
    }
  }
}
</style>
