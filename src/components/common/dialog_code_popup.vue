<template>
  <div class="code-popup">
    <van-popup
      :show="popuShow"
      @click-overlay="hiddenAreaSelect"
      @:click-overlay="hiddenAreaSelect"
      position="bottom"
      custom-style="height:40%"
      @close="onClose"
    >
      <div class="areaSelect" @click="selectArea">
        <div class="item">
          <span id="京">京</span><span id="沪">沪</span>
          <span id="浙">浙</span><span id="苏">苏</span>
          <span id="粤">粤</span><span id="鲁">鲁</span>
          <span id="晋">晋</span><span id="冀">冀</span>
        </div>
        <div class="item">
          <span id="豫">豫</span><span id="川">川</span>
          <span id="渝">渝</span><span id="辽">辽</span>
          <span id="吉">吉</span><span id="黑">黑</span>
          <span id="皖">皖</span><span id="鄂">鄂</span>
        </div>
        <div class="item">
          <span id="湘">湘</span><span id="赣">赣</span>
          <span id="闽">闽</span><span id="陕">陕</span>
          <span id="甘">甘</span><span id="宁">宁</span>
          <span id="蒙">蒙</span><span id="津">津</span>
        </div>
        <div class="item">
          <span id="贵">贵</span><span id="云">云</span>
          <span id="桂">桂</span><span id="琼">琼</span>
          <span id="青">青</span><span id="新">新</span>
          <span id="藏">藏</span><span style="visibility: hidden"></span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {//车牌号码
    name: "dialog_code_popup",
    data() {
      return {
        popuShow:false,
        area:''
      };
    },
    created() {
    },
    mounted() {
    },
    methods: {
      showDialog() {
        this.popuShow = true;
      },
      onClose(){
        this.popuShow=false
      },
      hiddenAreaSelect(){
        this.popuShow=false
      },
      selectArea(e){  //选择车牌地区
        if(e.mp.target.id){
          this.area = e.mp.target.id;  //选择的地区
          this.$emit('selectArea',this.area)
          this.popuShow=false;     //关闭地区选择器
          // this.focusBool = true;       //弹出键盘

        }
      },
    }
  };
</script>

<style scoped>
  /*地区选择器*/
  .areaSelect{
    height: 235px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 22px;
    box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.08);
    margin-top: 4px;
    box-sizing: border-box;
  }
  .areaSelect .item{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .areaSelect .item>span{
    width: 30px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: rgba(255,255,255,1);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
    border-radius: 5px;
  }
</style>
