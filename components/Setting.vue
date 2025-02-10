<script setup lang="ts">
import { storage } from 'wxt/storage';
import { UserOutlined } from '@ant-design/icons-vue';
import { ref, reactive } from 'vue';

const kaoQinLoading = ref<boolean>(false);
const qingJiaLoading = ref<boolean>(true);
const kaoQinDialog = ref<boolean>(false);
const qingJiaDialog = ref<boolean>(false);
const checked = ref<boolean>(false);


const username = ref<string>('');
const password = ref<string>('');

const data = {

}


const submitKaoQin = async() => {
    kaoQinLoading.value = true;

    const response = await browser.runtime.sendMessage({
        type: 'login',
        data: {
            username: username.value,
            password: password.value
        }
    });

    console.log('res====',response);

    setTimeout(() => {
        kaoQinLoading.value = false;
        kaoQinDialog.value = false;
    }, 1000);
};



</script>

<template>
    <div class="flex flex-col">
        <h1 class="text-xl">账号设置</h1>
        <div class="flex flex-row space-x-5">
            <div class="w-40">
                <a-card :loading="kaoQinLoading">
                    <div class="w-full flex justify-center">
                        <a-space direction="vertical" align="center">
                            <span>考勤</span>
                            <a-avatar :size="60">USER</a-avatar>
                            <a-button type="default" @click="kaoQinDialog = true">设置</a-button>
                        </a-space>
                    </div>
                </a-card>
            </div>
            <div class="w-40">
                <a-card :loading="qingJiaLoading">
                    <div class="w-full flex justify-center">
                        <a-space direction="vertical" align="center">
                            <span>请假</span>
                            <a-avatar :size="60">USER</a-avatar>
                            <a-button type="default" @click="">设置</a-button>
                        </a-space>
                    </div>

                </a-card>
            </div>
        </div>


        <div class="">
            <a-checkbox v-model:checked="checked">Checkbox</a-checkbox>
        </div>
    </div>

    <a-modal v-model:open="kaoQinDialog" title="考勤" width="300px">
        <template #footer>
            <a-button key="back" @click="kaoQinDialog = false">取消</a-button>
            <a-button key="submit" type="primary" :loading="kaoQinLoading" @click="submitKaoQin">确定</a-button>
        </template>
        <div class="flex flex-col space-y-4">
            <a-row :gutter="5" align="middle">
                <a-col :span="6">
                    用户名:
                </a-col>
                <a-col :span="18">
                    <a-input v-model:value="username" :placeholder="__('username_placeholder')" />
                </a-col>
            </a-row>
            <a-row :gutter="5" align="middle">
                <a-col :span="6">
                    密码:
                </a-col>
                <a-col :span="18">
                    <a-input-password v-model:value="password" :placeholder="__('pwd_placeholder')" />
                </a-col>
            </a-row>
        </div>
    </a-modal>
</template>

<style scoped>

</style>