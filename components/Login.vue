<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="username">Username:</label>
                <a-input v-model:value="username" :placeholder="__('username_placeholder')" />
            </div>
            <div>
                <label for="password">Password:</label>
                <a-input-password v-model:value="password" placeholder="input password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const username = ref<string>('');
const password = ref<string>('');

const handleSubmit = () => {
    console.log('Username:', username.value);
    console.log('Password:', password.value);
    // Add your login logic here
};
</script>

<style scoped>

</style>