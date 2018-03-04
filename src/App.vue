<template>
    <div class="main">
      <app-header/>
      <router-view />
      <app-footer></app-footer>
    </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
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
    min-width: 800px;
    position: relative;
    display: flex;
    height: auto;
    min-height: 100%;
    font-family: "HiraKakuPro-W6", 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
    overflow: hidden;
  }

  .showbox {
    position: absolute;
    z-index: 1000;
    left: -258px;
    top: 0;
    padding-top: 50px;
    height: 100%;
    transition: left 1s;
  }
  .show {
    left: 0;
    display: block;
  }
</style>
