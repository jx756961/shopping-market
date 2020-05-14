<template>
  <div class="wrap">
    <navigation_style title-text=" " />
    <div class="car-header">
      <div class="title">购物车</div>
      <div class="delete" @click="deleteOrder">删除</div>
    </div>
    <div class="car-content">
      <div v-if="cartList.length <= 0 || !cartList" class="no-goods" >
        <noHasImage :smallFont="false" :margin-top="20" tips="购物车为空" />
        <div class="tips-info">赶紧慰劳一下自己吧</div>
        <div class="go-shopping" @click="goShopping">去逛逛</div>
      </div>
      <div v-else class="car-list">
        <div class="title">全选栏</div>
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
      </div>
    </div>
    <div class="submit-order">
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        button-class="button-status"
        button-type="primary"
        :tip="true"
        @submit="onClickButton"
      >
        <van-tag type="primary">标签</van-tag>
<!--        <view slot="tip">您的收货地址不支持同城送, <text>修改地址</text></view>-->
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import navigation_style from '@/components/common/navigation_style'
import noHasImage from '@/components/common/noHasImage'
// import submit_order from '@/components/shopping_cart/submit_order'
import { wxToast } from '../../../utils/utils'
export default {// 购物车组件
  name: 'ShoppingCart',
  components: { navigation_style,noHasImage},
  data() {
    return {
      cartList: [1]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    deleteOrder() {
      // TODO
      wxToast('删除商品')
    },
    goShopping(){
      wxToast('去购物')
      wx.setTabBarBadge({
        index: 1,
        text: '5'
      })
    },
    onClickButton() {
      wxToast('提交订单')
    },
    options: {
      styleIsolation: 'isolated'
    }
  },
  onload(){

  }
}
</script>
<style scoped>
  .van-button--primary {
    background: #81c1af;
  }
</style>
<style scoped lang="scss">
  @import "../../../style/variables";
  .wrap{
    background-color: $shoppingThemeBg;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    width: $shoppingWidth;
    border-radius: $shoppingRadius;
    background-color: #fff;
    min-height: 300px;
    .car-list{
      width: 100%;
      .title{
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 1px #8A8A8A solid;
        box-sizing: border-box;
      }
      .item{
        padding: 0 10px;
        box-sizing: border-box;
        height: 100px;
      }
    }
    .no-goods{
      text-align: center;
      .tips-info{
        color: #ccc;
        font-size: 12px;
      }
      .go-shopping{
        font-size: 13px;
        color: #8A8A8A;
        border-radius: 25px;
        margin: 10px auto;
        width: 80px;
        height: 25px;
        line-height: 25px;
        border:1px solid #cccccc;
      }
    }
  }

</style>

