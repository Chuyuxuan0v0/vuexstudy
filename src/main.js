import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

new Vue({
  // 注入到Vue的原型中
  router,
  store, //给组件的$store赋值
  render: h => h(App)
}).$mount('#app')
