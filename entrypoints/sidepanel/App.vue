<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import TopNav from "@/components/TopNav.vue";
</script>

<template>

    <div class="flex flex-col size-full bg-white">
        <div class="top h-12 flex-none px-4 border-b border-gray-300 shadow-sm">
            <TopNav></TopNav>
        </div>
        <div class="main flex-auto p-2">
            <RouterView />
        </div>
    </div>

</template>

<style scoped>

</style>
