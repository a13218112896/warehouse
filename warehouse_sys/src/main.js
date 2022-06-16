import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// main.ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')