// 引入vue，App
import Vue from 'vue'
import App from './App.vue'
// 引入路由器对象
import router from './router'

Vue.config.productionTip = false
// 实例化Vue
new Vue({
  // 渲染组件
  render: h => h(App),
  // 配置路由器
  router
}).$mount('#app')