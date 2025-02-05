import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import globalFunctions from '../plugins/globalFunctions' // 引入插件

createApp(App)
    .use(Antd)
    .use(globalFunctions) // 使用插件
    .mount('#app');
