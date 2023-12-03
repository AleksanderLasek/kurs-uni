import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ViewManager from './services/ViewManager';
import store from '../store'

ViewManager.checkStatus()
createApp(App).use(router).use(store).mount('#app')
