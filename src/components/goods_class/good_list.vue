<template>
  <div>
    <div class="info">
      <div class="car-info">
        <div class="img">
          <img src="https://www.sudichina.com/v1.0/cars/img-success4.png" alt="">
        </div>
        <div class="info-detals">
          <div class="vehicle">名称。。。</div>
          <div class="infos"><span style="color: #999999;">详情信息。。。。</span></div>
        </div>
        <div class="point" @click.stop="showPopup">
          <span />
          <span />
          <span />
        </div>
        <div v-show="showList" class="popup_list popup_select status2">
          <span @click="seeDetails('../car_details/main',1)">修改</span>
          <span @click="deleteCar">删除</span>
        </div>
      </div>
      <div class="car-progress">
        <div class="result">上线时间：</div>
        <div class="see-detals" @click="addDriver">查看详情<span><img
          class="global-icon-img-right"
          src="https://www.sudichina.com/v1.0/cars/img-right.png"
          alt=""
        ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {// 组件
  name: 'GoodList',
  components: {},
  data() {
    return {
      showList: false
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    showPopup() {
      this.showList = true
      setTimeout(() => {
        this.showList = false
      }, 2000)
    },
    seeDetails() {
      // TODO
    },
    deleteCar() {
      // TODO
    },
    addDriver() {
      // TODO
    }
  }
}
</script>

<style scoped>
  div{
    font-weight: normal;
  }
  .info{
    width: 100%;
    /*margin-top: 10px;*/
    padding: 15px 15px 8px;
    box-sizing: border-box;
    background:#F4F8F9;
    border-radius:2px;
    position: relative;
  }
  .car-info{
    position: relative;
    width: 100%;
    display: flex;
    height: 80px;
    border-bottom: 1px solid #EFEFEF;
    padding: 15px 17px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .car-info .img{
    margin-right: 20px;
    width: 44px;
    height: 44px;
  }
  .car-info .img img{
    vertical-align: middle;
  }

  .info-detals .vehicle {
    font-size:16px;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
    margin-bottom: 8px;
  }
  .info-detals .infos{
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,92,0,1);
  }
  .car-progress{
    display: flex;
    width: 100%;
    background-color: #fff;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    padding:0 17px;
    box-sizing: border-box;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
  }
  .car-progress .result{
    color:rgba(51,51,51,1);
  }
  .car-progress .result .u-name{
    padding-left: 20px;
  }
  .car-progress .see-detals{
    color:rgba(153,153,153,1);
  }
  .car-progress .see-detals span{
    margin-left: 10px;
  }
  .car-info .point{
    width: 25px;
    height: 5px;
    padding: 5px 0px 20px 20px;
    position: absolute;
    right: 27px;
    /*transform: translateY(-50%);*/
    top: 15px;
    display: flex;
    justify-content: space-between;
    /*z-index: 99999;*/
  }
  .car-info .point>span{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #606770;
  }
  .info >>> .popup_list{
    background-color: transparent;
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    width: 100px;
    line-height:40px;
    position: absolute;
    top: 30px;
    right: 24px;
    left: auto;
    bottom: auto;
    max-height: 150px;
    transform: none;
    text-align: center;
  }
  .info >>> .popup_list:before{
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #333333 transparent ;
    position: absolute;
    right: 10px;
    top: -5px;
  }
  .info .popup_select{
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    padding-top: 5px;
    opacity: 1;
  }
  .info .popup_select span{
    display: block;
    height: 40px;
    border-bottom: 1px solid #8A8A8A;
  }
  .info .popup_select span{
    background-color: #333333;
  }
  .info .popup_select span:last-child{
    border-bottom: none;
  }
  /*.info .popup_select.status2,*/
  /*.info .popup_select.status6{*/
  /*background-image: url("https://img.sudichina.com/public/app_car_imgs/certify_info2.png");*/
  /*}*/
  .info .popup_select span{
    display: block;
    height: 40px;
    border-bottom: 1px solid #8A8A8A;
  }
  .info .popup_select span:active{
    background-color: #333333;
  }
  .info .popup_select span:last-child{
    border-bottom: none;
  }

</style>
