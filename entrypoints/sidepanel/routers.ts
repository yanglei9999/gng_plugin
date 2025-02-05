import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router