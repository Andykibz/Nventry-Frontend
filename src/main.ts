import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'hover.css/css/hover-min.css'
import Store from '@/store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).use(Store).mount('#app')
