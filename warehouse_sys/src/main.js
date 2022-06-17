import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// main.ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index.js'

app.use(router).use(ElementPlus).mount('#app')