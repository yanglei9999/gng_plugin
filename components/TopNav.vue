<script setup lang="ts">

</script>

<template>
    <div class="flex flex-row items-center justify-between w-full h-full">
        <a-space>
            <a-avatar src="https://picsum.photos/200" />
        </a-space>
        <a-space size="middle">
            <RouterLink to="/">
                <img class="size-6 cursor-pointer" src="@/assets/home.svg">
            </RouterLink>
            <RouterLink to="/setting">
                <img class="size-6 cursor-pointer" src="@/assets/setting.svg">
            </RouterLink>
        </a-space>
    </div>
</template>

<style scoped>

</style>