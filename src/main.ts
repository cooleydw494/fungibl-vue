import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createI18n} from 'vue-i18n'
import messages from './translations'
import './css/index.scss'

const defaultLanguage = navigator.languages[1] // 'en', 'es', etc

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
