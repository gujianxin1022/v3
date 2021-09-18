import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

console.log('ElementLocale')
import i18n from '@/assets/locales';

import router from '@/router'
const app = createApp(App)
app.use(ElementPlus, { size: 'small' })
app.use(router)
app.use(i18n)
app.mount('#app')