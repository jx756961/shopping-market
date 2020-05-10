<template>
  <div>
    <div class="bottom_navigation">
      <van-tabbar
        :active="active"
        active-color="#81c1af"
        inactive-color="#ccc"
        @change="onChange"
      >
        <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" info="5">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
// 车主的底部导航
export default {
  props: {
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onChange(e) {
      console.log(e.mp)
      this.active = e.mp.detail
      this.$emit('setActiveTabBar', this.active)
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
