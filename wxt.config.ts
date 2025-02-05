import { defineConfig, WxtViteConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    default_locale: 'zh_CN',
    action: {},
    side_panel: {default_path:"/sidepanel.html"},
    permissions: ['storage', 'sidePanel', 'alarms']
  },
  
  vite: () => {
    return {
      plugins: [tailwindcss()],
    } as WxtViteConfig;
  },
});
