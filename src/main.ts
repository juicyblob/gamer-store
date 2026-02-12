import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'modern-normalize/modern-normalize.css'
import './style.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
