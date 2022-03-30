
import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'


createApp(App).use(store).use(router).mount('#app')

// Vue.config.productionTip = false
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
