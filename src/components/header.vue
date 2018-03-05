<template>
  <el-header class="header">
    <div class="wrapper">
      <router-link to="/">
        朝舞bbs
      </router-link>
    </div>
  </el-header>
</template>
<script>
  export default {
    name: 'appheader'
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../assets/stylesheet/style";
.el-header{
  width: 100%;
  background-color: map_get($global-color-base, primary);
  top: 0;
  position: fixed;
  z-index: 1000;
  .wrapper{
    text-align: left;
    a{
      line-height: 60px;
      padding: 0 50px;
      font-size: 20px;
      color: #fff;
    }

  }
}


</style>
