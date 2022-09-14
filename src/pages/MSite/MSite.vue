<template>
  <div class="msite">
    <HeaderTop title="地址地址地址地址地址">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利1</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利2</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利3</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利4</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利5</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利6</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利7</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利8</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利9</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利10</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利11</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利12</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利13</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利14</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利15</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./imgs/Hamburger.png">
              </div>
              <span>商超便利16</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang shop_icon"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script>
  import ShopList from '../../components/ShopList/ShopList';
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
  export default{
    mounted(){
      //实例 Swiper对象
      new Swiper('.swiper-container',{
        loop: true, //循环
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    },
    components:{
      HeaderTop,ShopList
    }
  }
</script>

<style lang="less">
  @import "../../common/style/mixins.less";
  .msite{
    width: 100%;
    overflow: hidden;
    .msite_header{
      background-color: #02a774;
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;
      width: 100%;
      height: 45px;
      .header_search{
        position: absolute;
        left: 15px;
         top: 50%;
         transform: translateY(-50%);
         width: 10%;
         height: 50%;
         .icon-sousuo{
           font-size: 25px;
           color: #fff;
         }
      }
      .header_title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        color: #fff;
        text-align: center;
        .header_title_text{
          font-size: 20px;
          color: #fff;
          display: block;
        }
      }
      .header_login{
        font-size: 14px;
        color: #fff;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        .header_login_text{
          color: #fff;
        }
      }
    }
    .msite_nav{
      .bottom-border-1px(#e4e4e4);
      margin-top: 45px;
      height: 200px;
      background-color: #fff;
      .swiper-container{
        width: 100%;
        height: 100%;
        .swiper-wrapper{
          width: 100%;
          height: 100%;
          .swiper-slide{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            .link_to_food{
              width: 25%;
              .food_container{
                display: block;
                width: 100%;
                text-align: center;
                padding-bottom: 10px;
                font-size: 0;
                img{
                  display: inline-block;
                  width: 50px;
                  height: 50px;
                }
              }
              span{
                  display: block;
                  width: 100%;
                  text-align: center;
                  font-size: 13px;
                  color: #666;
              }
            }
          }
        }
        .swiper-pagination>.swiper-pagination-bullet-active{
          background-color: #02a774;
        }
      }
    }
    .msite_shop_list{
      .top-border-1px(#e4e4e4);
      margin-top: 10px;
      background-color: #fff;
      .shop_header{
        padding: 10px 10px 0;
        .shop_icon{
          margin-left: 5px;
          color: #999;
        }
        .shop_header_title{
          color: #999;
          font-size: 14px;
          line-height: 20px;
          margin-left: 5px;
        }
      }
    }
  }
</style>
