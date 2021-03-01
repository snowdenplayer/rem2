import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.scss'
import './assets/styles/index.scss'
import 'material-design-icons-iconfont'

createApp(App).use(router).mount('#app')
