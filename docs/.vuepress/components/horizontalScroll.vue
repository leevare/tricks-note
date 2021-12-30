<template>
  <div class="wrapper" ref="el" @wheel.prevent="handleWheel">
    <div class="item" v-for="n in 6" :key="n" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const el = ref(null);

const handleWheel = (e) => {
  if (el.value) {
    el.value.scrollLeft += e.deltaY;
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 600px;
  overflow-x: auto;
  background-color: #aa00ff;
  .item {
    width: 600px;
    height: 400px;
    flex: none;
    &:nth-child(1) {
      background-color: #00adb5;
    }
    &:nth-child(2) {
      background-color: seagreen;
    }
    &:nth-child(3) {
      background-color: bisque;
    }
    &:nth-child(4) {
      background-color: azure;
    }
    &:nth-child(5) {
      background-color: burlywood;
    }
    &:nth-child(6) {
      background-color: chartreuse;
    }
  }
}
</style>
