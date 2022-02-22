<template>
  <div>
    <nuxt-link to="/index" active-class="app_header_active">首页</nuxt-link>
    <nuxt-link to="/goods" active-class="app_header_active">商品</nuxt-link>
    <nuxt-link to="/user" active-class="app_header_active">用户</nuxt-link>
    <nuxt-link to="/login" active-class="app_header_active">登录</nuxt-link>
    <nuxt-link to="/reg" active-class="app_header_active">注册</nuxt-link>

    <!-- 展示区 -->
    <nuxt />
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.app_header_active {
  background-color: pink;
  color: red;
}
</style>