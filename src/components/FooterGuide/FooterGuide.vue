<template>
  <footer class="footer_guide">
    <span class="guide_item" :class="{on: $route.path === '/msite'}" @click="goTo('/msite')" >
      <span class="item_icon">
        <i class="iconfont icon-huiyuan"></i>
      </span>
      <span>外卖</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/search'}" @click="goTo('/search')" >
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/order'}" @click="goTo('/order')" >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/profile'}" @click="goTo('/profile')" >
      <span class="item_icon">
        <i class="iconfont icon-geren2"></i>
      </span>
      <span>我的</span>
    </span>
  </footer>
</template>

<script>
  export default{
    name:'FooterGuide',
    methods:{
      goTo(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="less">
  @import "../../common/style/mixins.less";
  .footer_guide{
    .top-border-1px(#e4e4e4);
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    .guide_item{
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;
      align-items: center;
      margin: 5px;
      color: #999999;
      &.on{
        color: #02a774;
      }
      span{
        font-size: 12px;
        margin-top: 2px;
        user-select: none;
        .iconfont{
          font-size: 22px;
        }
      }
    }
  }
  @font-face {
  font-family: 'iconfont';  /* Project id 3589516 */
  src: url('//at.alicdn.com/t/c/font_3589516_effr1r24f9i.woff2?t=1660755554957') format('woff2'),
       url('//at.alicdn.com/t/c/font_3589516_effr1r24f9i.woff?t=1660755554957') format('woff'),
       url('//at.alicdn.com/t/c/font_3589516_effr1r24f9i.ttf?t=1660755554957') format('truetype');
  }
</style>
