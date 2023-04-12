import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

const app = createApp(App)
const bus = mitt()


app.config.globalProperties.$bus = bus
app.use(store).use(router).mount('#app')

