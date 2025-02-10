import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue';
import Setting from '@/components/Setting.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/setting', component: Setting },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router