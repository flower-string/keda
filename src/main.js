// vue本体
import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// vuex
import store from './store'
// 饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// axios
import instance from './utils/axios';

Vue.prototype.$axios = instance;

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
