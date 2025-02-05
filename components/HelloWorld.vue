<script lang="ts" setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <p class="p-4 bg-teal-300">
    nihao
  </p>
  <a-space wrap>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
  </a-space>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
