<template>
  <div>
    <div class="navigationFill" :style="{'height': (paddingTopH+40)+'px'}" />
    <div class="navigationStyle" :style="{'padding-top': paddingTopH+'px','height':'32px','padding-bottom': '8px'}">
      <div class="navigation_left">
        <!--返回按钮更改-->
        <img v-if="showGoback || gobackUrl" src="https://img.sudichina.com/public/app_goods_imgs/bar_goback.png" class="bar_goback" @click="goback">
        <!--<img v-if="showGohome && !noHome" src="https://img.sudichina.com/public/app_goods_imgs/bar_gohome.png" class="bar_gohome" @click="gohome">-->
      </div>
      <!--分类管理-->
      <div class="navigation_center" style="line-height:32px" @click="showDialog">
        <span>{{ titleText }}</span>
        <span :class="isOrderShow ? 'selected-up' : 'selected-down'" />
      </div>
    </div>
  </div>

</template>

<script>

// 头部下拉属性
// 小程序定义的navigationStyle：custom 自定义导航栏
/*
  * 除web-view页面外，其它页面都使用自定义导航
  * 货主、车主、司机首页导航[标题文字]写死
  * handle_success根据option修改标题
  * 其它页面在main.js中引入main.json中的navigationBarTitleText，设为[标题文字]pages/car_driver/index/main
  * */

import navigation_head from '@/mixins/navigation_head'

export default {
  name: 'NavigationStyle2', // 我的订单头部
  mixins: [navigation_head],
  props: { // gobackUrl:goback必须显示，且返回到指定的url,用于模拟wx.navigateBack()
    titleText: {
      type: [String, Object],
      default: '商品列表'
    },
    isOrderShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  methods: {
    goback() {
      // TODO getCurrPage 为true this.$emit('回调方法是否弹出提示框')
      if (this.isHasData) {
        return
      }
      if (this.gobackUrl) {
        wx.redirectTo({ url: this.gobackUrl })
      } else {
        wx.navigateBack({ delta: 1 })
      }
    },
    showDialog() {
      this.isOrderShow = !this.isOrderShow
      this.$emit('navBarClick', this.isOrderShow)
    }
  }

}
</script>

<style scoped>
  @import "../../style/navigation_style.css";
</style>
<style>
  .navigationStyle9999{  /*超过标题栏的层级*/
    z-index: 9998 !important;
  }
  /*toast提示*/
  .toast-index--van-toast__container{
    z-index: 9999 !important;
  }

/*  !*需要提高层级的弹窗(从上面弹的)*!
  .overlay-index--van-overlay{
    z-index: 9990 !important;
  }
  .van-popup{
    z-index: 9991 !important;
  }*/
  .global-z-index101{  /*比遮罩层高一层*/
    z-index: 101 !important;
  }
  .navigation_center .selected-down {
    transform: translateY(3px);
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-top: 5px solid #fff;
  }
  .navigation_center .selected-up {
    transform: translateY(-3px);
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    border-top: 5px solid  transparent;
  }
</style>
