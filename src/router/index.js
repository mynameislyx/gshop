// 引入vue和vue-router
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入routes
import routes from './routes';
// 声明使用插件
Vue.use(VueRouter)
// 实例化路由器对象，并暴露
export default new VueRouter({
  mode: "history",
  routes
})