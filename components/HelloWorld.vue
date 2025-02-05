<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';


defineProps({
  msg: String,
});

const count = ref(0);
const { proxy } = getCurrentInstance()!
const msg2 = proxy?.__("helloWorld")

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1 class="text-3xl font-bold underline">
    {{ __('helloWorld') }}
  </h1>
  <p class="p-4 bg-indigo-500 text-white">
    {{ __('helloWorld') }}
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

</style>
