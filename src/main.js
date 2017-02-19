import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import  store from './store/index.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.component('icon', Icon)
new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
