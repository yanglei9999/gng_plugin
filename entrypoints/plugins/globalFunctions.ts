import { App } from 'vue'

export default {
    install(app:App) {
  
        //多语言 i18n
        app.config.globalProperties.__ = (key:any) => {
            return browser.i18n.getMessage(key)
        }
        
    }
}
  