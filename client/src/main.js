// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as uiv from 'uiv'
import './assets/css/bootstrap.css'
import './assets/css/grails.css'
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'
import sidebar from './components/sidebar'

Vue.config.productionTip = false

Vue.use(uiv)
/* eslint-disable no-new */
Vue.use(BootstrapVue);
Vue.component('sidebar', sidebar)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
