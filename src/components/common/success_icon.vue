<template>
	<div class="success">
    <div class="img">
      <img :src="imgUrl" alt="">
    </div>
    <div class="tips">{{tipInfo}}</div>
  </div>
</template>

<script>
  export default {//成功图片组件
    props:['tipInfo','imgUrl'],
    name: "success_icon",
    data() {
      return {};
    },
    created() {
    },
    mounted() {
    },
    methods: {}
  };
</script>

<style scoped>
  .success{
    width: 100%;
    padding: 83px 0 20px;
    box-sizing: border-box;
    text-align: center;
  }
  .img{
    width: 107px;
    height: 107px;
    margin: 0 auto 15px;
  }
  .img img{
    width: 100%;
    height: 100%;
  }
  .tips{
    font-size:16px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:bold;
    color:rgba(48,55,71,1);
  }
</style>
