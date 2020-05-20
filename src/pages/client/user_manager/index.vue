<template>
  <div>
    <navigation_style title-text=" " />
    <div class="manager-header">
      <div class="m-left">
        <div class="img-p">
          <img class="img" src="https://img-blog.csdnimg.cn/20200507205514379.png" alt="">
        </div>
        <div class="manager-info">
          <div class="nick-name">lvjiaxing</div>
          <div class="user-name">会员名: lvjiax222</div>
        </div>
      </div>
      <div class="m-right">
        <div class="address" @click="seeAddress">
          <div> <img class="img" src="https://img-blog.csdnimg.cn/20200507205514379.png" alt=""></div>
          <div>地址</div>
        </div>
        <div class="customer" @click="callCustomer">
          <div><img class="img" src="https://img-blog.csdnimg.cn/20200507205514379.png" alt=""></div>
          <div>客服</div>
        </div>
      </div>
    </div>
    <div class="manager">
      <div class="discount">
        <div class="d-title">我的优惠券</div>
        <div class="d-right"><span>0</span>张未使用 <img class="img" src="https://img-blog.csdnimg.cn/20200507205514379.png" alt=""></div>
      </div>
      <div>
        <div class="my-order">
          <div class="o-title">
            <div>我的订单</div>
            <div>查看全部订单 ></div>
          </div>
          <div class="order-module">
            <div>
              <div><img class="img" src="https://img-blog.csdnimg.cn/20200507205514379.png" alt=""></div>
              <div>代付款</div>
            </div>
            <div>
              <div><img class="img" src="https://img-blog.csdnimg.cn/20200507205514379.png" alt=""></div>
              <div>代配送</div>
            </div>
            <div>
              <div><img class="img" src="https://img-blog.csdnimg.cn/20200507205514379.png" alt=""></div>
              <div>待收货</div>
            </div>
          </div>
        </div>
      </div>

      <span>个人中心</span>
      <button @click="navigate('../../business/admin_index/main')">后台管理</button>
    </div>
  </div>
</template>

<script>
import { wxToast } from '../../../utils/utils'

export default {// 用户中心组件
  name: 'UserManager',
  components: { },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
    seeAddress() {
      wxToast('查看地址')
    },
    callCustomer() {
      wxToast('打客服电话')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../style/variables";
  .manager-header{
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    /*line-height: 40px;*/
    background-color: $themeBg;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-family:PingFangSC;
    img{
      width: 100%;
      height: 100%;
    }
    .m-left{
      width: 240px;
      display: flex;
      .img-p{
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }
      .manager-info{
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        .nick-name{
          margin-top: 10px;
          margin-bottom: 0px;
        }
        .user-name{
          font-weight: normal;
          font-size: 12px;
          color: rgba(255,255,255,0.6);
        }
      }
    }
    .m-right{
      margin-top: 10px;
      width: 70px;
      font-size: 11px;
      display: flex;
      justify-content: space-between;
      &>div{
        width: 30px;
        padding-left: 5px;
      }
      .img{
        width: 20px;
        height: 20px;
      }
    }
  }
  .manager{
    background-color: $adminThemeBg;
    padding: 14px 14px 0;
    height: calc(100vh - 80px);
    box-sizing: border-box;
    .discount{
      display: flex;
      justify-content: space-between;
      padding:0 15px;
      box-sizing: border-box;
      height: 50px;
      line-height: 50px;
      border-radius: 10px;
      background-color: #fff;
      .d-title{
        font-size: 14px;
        color: #333333;

      }
      .d-right{
        width: 80px;
        font-size: 12px;
        color: #999;
        &>span{
          padding-right: 5px;
          font-size: 14px;
          color: #333;
          font-weight: bold;
        }
        .img{
          width: 7px;
          height: 14px;
          vertical-align: middle;
        }
      }
    }
    .my-order{
      margin-top: 15px;
      width: 100%;
      border-radius: 10px;
      background-color: #fff;
      padding: 10px 14px;
      box-sizing: border-box;
      .o-title{
        display: flex;
        justify-content: space-between;
        &>div:last-child{
          text-align: right;
          font-size: 12px;
          color: #999;
        }
      }
      .order-module{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        .img{
          width: 40px;
          height: 40px;
        }
        &>div{
          width: 40px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
</style>
