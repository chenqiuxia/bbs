<template>
    <div class="main">
      <app-header></app-header>
      <router-view />
    </div>
</template>

<script>
  import AppHeader from '@/components/header.vue'
  export default {
    name: 'app',
    components: {
      AppHeader
    },
    data () {
      return {
        active: 'false'
      }
    },
    created () {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  .main {
    position: relative;
    display: flex;
    height: auto;
    min-height: 100%;
    font-family: "PingHei","Helvetica Neue","Helvetica","Arial","Verdana","sans-serif";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
