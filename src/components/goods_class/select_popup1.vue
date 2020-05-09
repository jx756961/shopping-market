<template>
  <div class="select_popup1">
    <div class="own-car">
      <div :class="{'active':1==aIndex || currentVe===1}" @click="setVeNum(1,'京A64383')">全部商品</div>
    </div>
    <div class="other-car">
      <div :class="{'active':4==aIndex || currentVe===4}" @click="setVeNum(4,'京B83933')">京B83933</div>
      <div :class="{'active':5==aIndex || currentVe===5}" @click="setVeNum(5,'京Y83U32')">京Y83U32</div>
      <div :class="{'active':6==aIndex || currentVe===6}" @click="setVeNum(6,'京A37282')">京A37282</div>
      <div :class="{'active':7==aIndex || currentVe===7}" @click="setVeNum(7,'京N47282')">京N47282</div>
      <div :class="{'active':8==aIndex || currentVe===8}" @click="setVeNum(8,'京DHSKS2')">京DHSKS2</div>
      <div :class="{'active':9==aIndex || currentVe===9}" @click="setVeNum(9,'京D39322')">京D39322</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPopup1',
  components: {},
  props: ['aIndex'],
  data() {
    return {
      currentVe: 0
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    setVeNum(T, veNum) {
      this.currentVe = T
      this.$emit('getPopup', veNum, this.currentVe)
    },
    setNum(T) {
      this.currentVe = T
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/variables.scss";
  .select_popup1 .title {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: rgba(48, 55, 71, 1);
    margin-bottom: 20px;
  }

  .own-car,
  .other-car {
    width: 100%;
    display: flex;
    /*justify-content: space-between;*/
    flex-wrap: wrap;
  }
  .own-car div,
  .other-car div {
    width: 103px;
    height: 33px;
    background: rgba(244, 244, 244, 1);
    border-radius: 2px;
    text-align: center;
    line-height: 33px;
    margin-bottom: 20px;
    font-size:13px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(110,112,120,1);
    margin-right: 9rpx;
    margin-left: 9rpx;
  }
  .select_popup1 .active{
    background-color: $themeBg;
    color: rgba(255,255,255,1);
  }
</style>
