import './assets/main.scss'
import './assets/response.scss'
import './assets/animations.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
