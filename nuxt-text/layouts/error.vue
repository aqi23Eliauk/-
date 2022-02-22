<template>
  <div>
      <h1 v-if="error.statusCode">{{error.message}}</h1>
      出现错误啦
      
      <button @click="$router.replace('/index')">跳转到首页</button>
  </div>
</template>

<script>
export default {
    props:['error']
}
</script>

<style>

</style>