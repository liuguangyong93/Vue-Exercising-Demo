// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
/* jshint -W033 */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '../store'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(ElementUI)

const bus = new Vue()

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  data: {
    bus
  }
})
