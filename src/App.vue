<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route" />
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default{
    components: {
      FooterGuide
    }
  }
</script>

<style lang="less">
  #app{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: relative;
  }
</style>
