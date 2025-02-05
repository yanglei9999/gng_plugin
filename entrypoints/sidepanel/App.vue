<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
</script>

<template>
  
  <nav>
    <a-space>
      <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    </a-space>
    
  </nav>

  <main>
    <RouterView />
  </main>

</template>

<style scoped>

</style>
