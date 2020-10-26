import * as Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue
    .createApp(App)
    .use(router)
    .mount('#app')
