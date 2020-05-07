<template>
  <div>
    <div class="navigationFill" :style="{'height': (paddingTopH+40)+'px'}" />

    <div class="navigationStyle" :class="{'record-style':currentPage==='record-index'}" :style="{'padding-top': paddingTopH+'px','height':'32px','padding-bottom': '8px'}">
      <div class="navigation_left">
        <img v-if="showGoback || gobackUrl" src="https://img.sudichina.com/public/app_goods_imgs/bar_goback.png" class="bar_goback" @click="goback">
        <img v-else-if="showGohome && !noHome" src="https://img.sudichina.com/public/app_goods_imgs/bar_gohome.png" class="bar_gohome" @click="gohome">
      </div>
      <div class="navigation_center" style="line-height:32px">{{ titleText || ' ' }}</div>
    </div>
  </div>

</template>

<script>
// 小程序定义的navigationStyle：custom 自定义导航栏
/*
  * 除web-view页面外，其它页面都使用自定义导航
  * 货主、车主、司机首页导航[标题文字]写死
  * handle_success根据option修改标题
  * 其它页面在main.js中引入main.json中的navigationBarTitleText，设为[标题文字]pages/car_driver/index/main
  * */

// import {getCurrPage} from "@/utils/utils_vt";

export default {
  props: ['titleText', 'noHome', 'gobackUrl', 'isHasData', 'currentPage'], // gobackUrl:goback必须显示，且返回到指定的url,用于模拟wx.navigateBack() isHasData 认证页面认证读取返回清除
  data() {
    return {
      paddingTopH: 34, // padding-top
      showGoback: false,
      showGohome: false
    }
  },
  created() {
    this.paddingTopH = parseFloat(this.$store.state.axiosHeader.navigationH - 40)
    console.log(this.paddingTopH)
  },
  methods: {
    goback() {
      // TODO getCurrPage 为true this.$emit('回调方法是否弹出提示框')
      console.log('ishasdata---', this.isHasData)
      if (this.isHasData) {
        console.log('ishasdata---', this.isHasData)
        this.$emit('isGoBack')
        return
      }
      if (this.gobackUrl) {
        wx.redirectTo({ url: this.gobackUrl })
      } else {
        wx.navigateBack({ delta: 1 })
      }
    },
    gohome() {
      wx.reLaunch({ url: this.$store.state.axiosHeader.toIndex })
    },
    showDrawer() {
      this.$emit('showDrawer')
    },
    showMessage() {
      this.$emit('showMessage')
    },
    setBills(T) {
      this.$emit('setBillsParent', T)
    }
  },
  onLoad() {
    const pages = getCurrentPages()
    console.log(pages, this.showGoback)
    this.showGoback = pages.length > 1 // 页面历史栈拥有至少2个页面
    this.showGohome = pages[0].route !== this.$store.state.axiosHeader.theIndex && !this.gobackUrl // 第一个页面不是首页，且没有强制返回键，且不是选择客户端页
    // && pages[0].route !== 'pages/select_client/main'
  },
  onShow() {
    console.log('getCurrentPages---', getCurrentPages())
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
</style>
