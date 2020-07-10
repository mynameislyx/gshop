<template>
  <div>
    <!-- Header组件 -->
    <Header />
    <!-- 展示路由组件 -->
    <router-view></router-view>
    <!-- Footer组件 -->
    <Footer />
  </div>
</template>

<script>
// 引入Header，Footer组件
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped></style>
