import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createI18n} from 'vue-i18n'
import messages from './translations'
import './css/index.scss'

// 'en', 'es', etc
const defaultLanguage = navigator.language.substr(0,2)

const i18n = createI18n({
    locale: defaultLanguage,
    fallbackLocale: 'en',
    messages,
    // ...
})

createApp(App)
    .use(router)
    .use(i18n)
    // .mixin(globalMixins)
    .mount('#app')
