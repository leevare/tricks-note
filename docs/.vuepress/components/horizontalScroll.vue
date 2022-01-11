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
$colors: #00adb5, seagreen, bisque, azure, burlywood, chartreuse;
.wrapper {
  display: flex;
  width: 600px;
  overflow-x: auto;
  background-color: #aa00ff;
  $base-color: #036;

  .item {
    width: 600px;
    height: 400px;
    flex: none;
    @for $i from 1 through length($colors) {
      &:nth-child(#{$i}) {
        background-color: nth($colors, $i);
      }
    }
  }
}
</style>
