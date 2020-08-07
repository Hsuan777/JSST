import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/styles/main.scss'
/* 套件 */
// axios，AJAX套件
import axios from 'axios'
import VueAxios from 'vue-axios'
// router，管理/建立網頁路由
import router from './router'
// loading，讀取特效
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// vee-validate，表單驗證
import Validate from './assets/js/validate.js'

Vue.config.productionTip = false

// 將套件加入到原型或者作為元件
Vue.use(VueAxios, axios)

Vue.use(Validate)

Vue.component('loading', Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
