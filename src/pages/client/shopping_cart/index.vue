<template>
  <div class="wrap">
    <navigation_style title-text=" " />
    <div class="car-header">
      <div class="title">购物车</div>
      <div class="delete" @click="deleteOrder">删除</div>
    </div>
    <div class="car-content">
      <div v-if="cartList.length <= 0 || !cartList" class="no-goods">
        <noHasImage :small-font="false" :margin-top="20" tips="购物车为空" />
        <div class="tips-info">赶紧慰劳一下自己吧</div>
        <div class="go-shopping" @click="goShopping">去逛逛</div>
      </div>
      <div v-else class="car-list">
        <div class="title">
<!--          <van-checkbox-->
<!--            :value="checkedAll"-->
<!--            checked-color="#81c1af"-->
<!--            @change="onChangeAll"-->
<!--          >-->
<!--            -->
<!--          </van-checkbox>-->
          <div class="header-goods">
            <img class="img" src="https://img-blog.csdnimg.cn/20200507205514379.png" alt="">
            <span style="padding-left: 10px;line-height: 40px;font-size: 13px"> 蘑菇屯</span>
          </div>
        </div>
        <div class="item">
          <van-checkbox-group :value="result" @change="onChange">
            <van-checkbox
              checked-color="#81c1af"
              name="a"
            >
              <div class="order-items">
                <div class="small-img">
                  <img src="https://img-blog.csdnimg.cn/20200507205514379.png" alt="">
                </div>
                <div>
                  <div class="goods-name">大白菜111001</div>
                  <div class="on-time">送达时间</div>
                  <div class="price">10 <span>/斤</span> </div>
                </div>
                <div class="add-goods" @click.stop>
                  <span class="button" @click.stop="subGoodsToCar">-</span>
                  <span class="count">{{ count }}</span>
                  <span class="button" @click.stop="addGoodsToCar">+</span>
                </div>
              </div>
            </van-checkbox>
            <van-checkbox
              checked-color="#81c1af"
              name="b"
            ><div class="order-items">
              <div class="small-img">
                <img src="https://img-blog.csdnimg.cn/20200507205514379.png" alt="">
              </div>
              <div>
                <div class="goods-name">大白菜111001</div>
                <div class="on-time">送达时间</div>
                <div class="price">10 <span>/斤</span> </div>
              </div>
              <div class="add-goods">
                <span class="button">-</span>
                <span class="count">10</span>
                <span class="button">+</span>
              </div>
            </div>
            </van-checkbox>
            <van-checkbox
              checked-color="#81c1af"
              name="c"
            ><div class="order-items">
              <div class="small-img">
                <img src="https://img-blog.csdnimg.cn/20200507205514379.png" alt="">
              </div>
              <div>
                <div class="goods-name">大白菜111001</div>
                <div class="on-time">送达时间</div>
                <div class="price">10 <span>/斤</span> </div>
              </div>
              <div class="add-goods">
                <span class="button">-</span>
                <span class="count">10</span>
                <span class="button">+</span>
              </div>
            </div>
            </van-checkbox>
          </van-checkbox-group>
        </div>
      </div>
    </div>
    <submit_bar :checkAll="checkedAll"/>

  </div>
</template>
<script>
import navigation_style from '@/components/common/navigation_style'
import noHasImage from '@/components/common/noHasImage'
import submit_bar from '@/components/goods_class/submit_bar'
// import submit_order from '@/components/shopping_cart/submit_order'
import { wxToast } from '../../../utils/utils'
export default {// 购物车组件
  name: 'ShoppingCart',
  components: { navigation_style, noHasImage, submit_bar },
  data() {
    return {
      cartList: [1],
      result: [],
      count: 11,
      checkedAll: false

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
    goShopping() {
      wxToast('去购物')
      wx.setTabBarBadge({
        index: 1,
        text: '5'
      })
    },
    onChangeAll(e) {
      this.checkedAll = e.mp.detail
    },
    onChange(e) {
      this.result = e.mp.detail
    },
    subGoodsToCar() {
      if (this.count > 0) {
        this.count--
      }
    },
    addGoodsToCar() {
      this.count++
    },
    setCheckAll(val){
      this.checkedAll = val
    }

  },
  onload() {

  }

}
</script>

<style scoped lang="scss">
  @import "../../../style/variables";
  .wrap{
    font-family:PingFangSC;
    background-color: $shoppingThemeBg;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img{
      width: 100%;
      height: 100%;
    }
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
        border-bottom: 1px rgba(138,138,138,0.2) solid;
        box-sizing: border-box;
      }
      .item{
        padding: 0 10px;
        box-sizing: border-box;
        /*height: 100px;*/
        .order-items{
          padding: 15px 0;
          box-sizing: border-box;
          width: 300px;
          /*height: 80px;*/
          display: flex;
          position: relative;
          .small-img{
            width: 60px;
            height: 60px;
            margin-right: 10px;
            transform: translateY(10px);
          }
          .goods-name{
            font-size: 13px;
            margin-bottom: 4px;
            color: #333333;
            margin-top: 6px;
          }
          .on-time{
            border: 1px solid $themeBg;
            width: 50px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 11px;
            margin-bottom: 8px;
            color: $themeBg;

          }
          .price{
            font-size: 13px;
            font-weight: bold;
            color: red;
            &>span{
              font-size: 12px;
              font-weight: normal;
              color: #ccc;
            }
          }
          .add-goods{
            position: absolute;
            width: 120px;
            height: 30px;
            border: 1px solid rgba(204,204,204,0.2);
            line-height: 30px;
            border-radius: 5px;
            color: #666;

            font-size: 13px;
            bottom: 15px;
            right: 10px;
            .button{
              display: inline-block;
              width: 35px;
              text-align: center;
              font-size: 16px;
            }
            .count{
              display: inline-block;
              width: 47px;
              text-align: center;
              border-left: 1px solid rgba(204,204,204,0.2);
              border-right: 1px solid rgba(204,204,204,0.2);
            }
          }
        }
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
    .header-goods{
      line-height: 40px;
      .img{
        width: 20px;
        height: 20px;
        transform: translateY(5px);
      }
    }
  }

</style>

