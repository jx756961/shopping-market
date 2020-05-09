<template>
  <div class="admin-manager">
    <navigation_style title-text="管理后台"/>
    <div class="admin-details">
      <div class="admin-top">
        <div class="admin-info">
          <img class="avatar" src="https://www.sudichina.com/v1.0/cars/img-user-color-avatar.png" alt="">
          <span>管理员</span>
          <img class="arrow" src="https://www.sudichina.com/v1.0/cars/img-right.png" alt="">
        </div>
        <div class="manager">管理员工</div>
      </div>
      <div class="admin-bottom">
        <div class="item">
          <div class="number">0.00</div>
          <div class="tips">今日收入(元)</div>
        </div>
        <div class="middle-line"></div>
        <div class="item">
          <div class="number">0</div>
          <div class="tips">员工人数(人)</div>
          </div>
      </div>
    </div>
    <div class="product-manager">
      <div class="title">
        <img src="https://www.sudichina.com/v1.0/cars/img-user-settings.png" alt="">
        <span>商品管理</span>
      </div>
      <div class="manager">
        <div @click="navigate('../admin_class/main')">
          <div class="number">0 <span class="small">(款)</span> </div>
          <div class="tips">当前商品</div>
        </div>
        <div>
          <div class="number">0 <span class="small">(笔)</span> </div>
          <div class="tips">当前订单</div>
        </div>
        <div>
          <div class="number"><span style="color: #FE3824">0  <span class="small">(笔)</span> </span></div>
          <div class="tips">当前退款</div>
        </div>
      </div>
    </div>
    <!--img-user-my-wallet.png-->
    <div class="order-manager">
      <div class="title">
        <img src="https://www.sudichina.com/v1.0/cars/img-user-my-wallet.png" alt="">
        <span>交易额统计(元)</span>
      </div>
      <div class="manager">
        <div>
          <div class="number">0 <span class="small">(条)</span> </div>
          <div class="tips">交易记录</div>
        </div>
        <div>
          <div class="number">0 <span class="small">(笔)</span> </div>
          <div class="tips">交易金额</div>
        </div>
        <div>
          <div class="number">0 <span class="small">(笔)</span> </div>
          <div class="tips">当前退款</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {// 组件
  name: 'Index',
  components: {},
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "../../../style/variables";
  .admin-manager{
    width: 100%;
    height: 100vh;
    background:$adminThemeBg;
    display: flex;
    flex-direction: column;
    align-items: center;
    .small{
      font-size: 11px;
      font-weight: normal;
    }
    & >div{
      width:355px;
      background:rgba(255,255,255,1);
      margin-top: 10px;
    }
    .admin-details{
      padding: 22px 20px 26px;
      box-sizing: border-box;
      .admin-top{
        width: 100%;
        padding-bottom: 23px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px #EFEFEF solid;
      }
      .admin-info{
        width: 243px;
        font-size:15px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        span{
          margin-right: 60px;
        }
        .avatar{
          width:26px;
          height:26px;
          margin-right: 10px;
          vertical-align: middle;
        }
        .arrow{
          width:8px;
          height:14px;
          float: right;
          transform: translateY(2px);
        }
      }
      .manager{
        width:50px;
        height:20px;
        text-align: center;
        line-height: 20px;
        border-radius:2px;
        border:1px solid rgba(114,221,196,1);
        font-size:11px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(114,221,196,1);
      }
      .admin-bottom{
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size:26px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        margin-top: 20px;
        .middle-line{
          margin-top: 5px;
          width:1px;
          height:60px;
          background:rgba(239,239,239,1);
        }
        .item{
          width: 86px;
          text-align: center;
          .number{
            margin-bottom: 10px;
          }
          .tips{
            font-size:15px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
          }
        }
      }

    }

    .product-manager,
    .order-manager{
      padding: 20px 10px 9px;
      box-sizing: border-box;
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(51,51,51,1);
      .title{
        font-weight:bold;
        color:rgba(51,51,51,1);
        font-size:15px;
        img{
          width:15px;
          height:15px;
          margin: 0 10px;
          vertical-align: middle;
        }
      }
      .manager{
        padding-top: 26px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        width:335px;
        height:102px;
        border-radius:5px;
        border:1px solid rgba(223,223,223,1);
        margin-top: 14px;
        & > div{
          width: 56px;
          text-align: center;
        }
        & > div .number{
          font-weight:600;
          color:rgba(51,51,51,1);
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
