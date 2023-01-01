import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createI18n} from 'vue-i18n'
import {messages, dontTranslate} from './translations'
import './css/index.scss'
import globalMixins from "./utilities/globalMixins";

// 'en', 'es', etc
const defaultLanguage = navigator.language.substr(0,2)

const i18n = createI18n({
    locale: defaultLanguage,
    fallbackLocale: 'en',
    messages,
    missing: (locale, key) => {
        if (dontTranslate.includes(key))
        return key
        console.log(`No translation for "${key}" in ${locale} locale.
        Add a translation or `)
    },
    // ...
})

createApp(App)
    .use(router)
    .use(i18n)
    .mixin(globalMixins)
    .mount('#app');
