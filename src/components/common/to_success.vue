<template>
	<div>
    <navigation_style :noHome="noHome" :titleText="titleText"></navigation_style>
    <div style="width: 100%;height: 10px;background-color: #FAFAFA"></div>
    <div class="global-content-wrap-no-progress">
      <success_icon :img-url="imgUrl" :tip-info="tipInfo"/>
      <div v-if="subTitle" class="blance">当前账户余额：<span>¥{{subTitle}}</span></div>
      <div class="global-btn-v global-car-btn-canLogin canNext" @click="toNext(url)">{{buttonText?buttonText:'完成'}}</div>
    </div>
  </div>
</template>

<script>
  import navigation_style from "@/components/common/navigation_style";
  import success_icon from '@/components/common/success_icon';
  import {reLaunchClear} from "@/utils/utils";
  export default {//成功组件
    props:['titleText','tipInfo','imgUrl','url','progress','buttonText','subTitle'],
    name: "to_success",
    data() {
      return {
        noHome:true
      }
    },
    components: {
      success_icon,
      navigation_style,
    },
    methods: {
      toNext(url){
        reLaunchClear(url,this);
      }
    }
  }
</script>

<style scoped>
  .blance{
    font-size:14px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
    text-align: center;
    margin-top: 15px;
  }
  .blance span{
    color: #FE3824;
    text-align: center;
  }
</style>
