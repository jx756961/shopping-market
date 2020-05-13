<template>
  <div class="wrap">
    <navigation_style title-text=" " />
    <div class="car-header">
      <div class="title">购物车</div>
      <div class="delete" @click="deleteOrder">删除</div>
    </div>
    <div class="car-content">
      <div class="car-list">
        <div class="title">全选栏</div>
        <div class="item" />
      </div>
    </div>
  </div>
</template>
<script>
import navigation_style from '@/components/common/navigation_style'
export default {// 购物车组件
  name: 'ShoppingCart',
  components: { navigation_style },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
    deleteOrder() {
      // TODO
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../../../market-shopping/shopping-market-master/src/style/variables";
  .wrap{
    background-color: $shoppingThemeBg;
    width: 100%;
    height: 100vh;
  }
  .car-header{
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: $themeBg;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-family:PingFangSC;
    .delete{
      font-size: 13px;
      font-weight:400;
      width: 80px;
      text-align: right;
    }
    .title{
      font-size: 16px;
      font-weight:bold;
    }
  }
  .car-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .car-list{
      margin-top: 16px;
      width: $shoppingWidth;
      border-radius: $shoppingRadius;
      background-color: #fff;
      .item{
        height: 100px;
      }
    }
  }
</style>

