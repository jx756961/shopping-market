<template>
  <div>
    <div class="bottom_navigation" :class="'active'+type">
      <div class="item" @click="handle(1)">
        <img v-if="type===1" src="https://img.sudichina.com/public/app_car_imgs/bottom_navigation1_2.png">
        <img v-else src="https://img.sudichina.com/public/app_car_imgs/bottom_navigation1_1.png">
        <span>首页</span>
      </div>
      <div class="item" @click="handle(2)">
        <img src="https://img.sudichina.com/public/app_car_imgs/bottom_navigation3_2.png">
      </div>
      <div class="item" @click="handle(3)">
        <img v-if="type===3" src="https://img.sudichina.com/public/app_car_imgs/bottom_navigation5_2.png">
        <img v-else src="https://img.sudichina.com/public/app_car_imgs/bottom_navigation5_1.png">
        <span>我的</span>
      </div>
    </div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
// 车主的底部导航
import store from '@/store'
export default {
  props: ['type'], // 第几个导航处于活动状态
  methods: {
    navigateNext(url) { // 跳转页面
      if (this.type === 1) {
        wx.navigateTo({ url: url })
      } else {
        wx.redirectTo({ url: url })
      }
    },
    handle(type) { // 点击底部导航
      if (this.type === type) { // 无法重复调至当前页
        return false
      } else if (type === 1) { // 首页
        wx.reLaunch({ url: this.$store.state.axiosHeader.toIndex })
      } else if (type === 2) { // 购物车
        this.navigate('/pages/client/shopping_cart/main')
      } else if (type === 3) { // 我的
        this.navigate('/pages/client/user_manager/main')
      }
    }
  }
}
</script>

<style scoped>
  .bottom_navigation {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 19;
    height: 64px;
    padding: 0 17px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;

    font-size: 13px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 23, 23, 1);
    line-height: 18px;
    background-color: #FFF;
    text-align: center;
  }

  .bottom_navigation .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    width: 50px;
  }

  .bottom_navigation .item:nth-child(2) {
    width: 70px;
  }

  .bottom_navigation .item:first-child img {
    width: 20px;
    height: 20px;
  }

  .bottom_navigation .item:nth-child(2) img {
    width: 17px;
    height: 20px;
  }

  .bottom_navigation .item:nth-child(2) img {
    width: 60px;
    height: 60px;
  }

  .bottom_navigation .item:nth-child(3) img {
    width: 18px;
    height: 20px;
  }

  .bottom_navigation .item > span {
    margin-top: 6px;
  }
</style>
