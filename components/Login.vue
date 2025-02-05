<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
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
.login {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login h1 {
    text-align: center;
}

.login div {
    margin-bottom: 1rem;
}

.login label {
    display: block;
    margin-bottom: 0.5rem;
}

.login input {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
}

.login button {
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login button:hover {
    background-color: #0056b3;
}
</style>