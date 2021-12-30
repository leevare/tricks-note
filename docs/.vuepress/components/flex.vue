<template>
  <input type="text" v-model="value" />

  {{ value }}
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
