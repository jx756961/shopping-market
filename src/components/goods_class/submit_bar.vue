<template>
  <div class="submit-order">
    <van-checkbox :value="checkedAll" checked-color="#81c1af" @change="onChange">
      <div class="content">
        <div class="text-select">全选</div>
        <div class="to-submit">
          <div class="text-total">合计: <span style="color: red">¥{{ totalPrice }}</span></div>
          <div class="submit-button" @click.stop="toPaySubmit">去结算</div>
        </div>
      </div>
    </van-checkbox>
  </div>
</template>
<script>
import { wxToast } from '../../utils/utils'

export default {
  props: {
  },
  data() {
    return {
      checked: false,
      totalPrice: '10.00',
      checkedAll:false
    }
  },
  methods: {
    toPaySubmit() {
      wxToast('提交订单')
    },
    onChange(e) {

      console.log(e)
      this.checkedAll = e.mp.detail
    }
  },
  options: {
    styleIsolation: 'isolated'
  }
}
</script>
<style scoped>
  .submit-order {
    /*background: #81c1af!important;*/
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;

    padding: 0 20px ;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
  }
  .content{
    width: 320px;
    display: flex;
    justify-content: space-between;
  }
  .text-select{
    width: 30px;
    font-size: 13px;
    color: #333333;line-height: 50px;
  }
  .to-submit{
    width: 185px;
    display: flex;
  }
  .text-total{
    font-size: 14px;
    text-align: center;
    line-height: 50px;
  }
  .submit-button{
    margin-top: 10px;
    margin-left: 10px;
    height: 30px;
    background-color:#81c1af ;
    width: 80px;
    border-radius: 20px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 30px;
  }
</style>
