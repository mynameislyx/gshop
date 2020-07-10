// 引入Home，Register，Login,Search，
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
// 注册路由，并暴露
export default [
  // 注册路由
  // Home组件
  {
    path: '/',
    component: Home
  },
  // Register组件
  {
    path: '/register',
    component: Register
  },
  // Login组件
  {
    path: '/login',
    component: Login
  },
  // Search组件
  {
    path: '/search',
    component: Search
  },
  // 路由从定向
  {
    path: "/",
    redirect: "/"
  }


]