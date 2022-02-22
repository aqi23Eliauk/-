<template>
  <div>
    详情页面
    {{this.$route.query.a}}
  </div>
</template>

<script>
export default {
  name:'goodsdetail',
  validata({params,query}){
    return typeof params.id === 'number'
  }
}
</script>

<style>

</style>