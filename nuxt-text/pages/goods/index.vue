<template>
  <div>
    <h3>商品</h3>
    <nuxt-link to="/goods/1?a=1">商品01</nuxt-link>
    <a @click="heandle"> 商品02</a>
    <nuxt-link :to="{ name: 'goods-id', params: { id: 3 }, query: { a: 33 } }"
      >商品03</nuxt-link
    >

    <nuxt-link :to="{ path: '/goods/comment', query: { a: 33 } }"
      >商品03</nuxt-link
    >

    <nuxt />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    heandle() {
      this.$router.push("/goods/1?a=2");
    },
  },
  mounted(){
    
  }
};
</script>
