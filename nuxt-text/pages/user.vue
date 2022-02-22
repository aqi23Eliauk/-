<template>
  <div>
    用户中心
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware({redirect}){
    console.log('用户');
    redirect('/login')
  }
}
</script>
