// src/main.js
import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueResource from 'vue-resource'
import  'babel-polyfill'
Vue.use(VueResource);

//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);

// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  ...App,
});
