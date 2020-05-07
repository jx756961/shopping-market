<template>
  <div class="nav-bar">
    <div class="icon" :style="{'padding': TopH+'px 22px 16px'}" @click="goBack">
      <img :style="{ width: width + 'px', height: height + 'px' }" :src="imgUrl" alt="">
    </div>
  </div>
</template>

<script>
export default {// 组件
  name: 'NavbarNotitle',
  components: {},
  props: {
    width: {
      type: Number,
      default: 12
    },
    height: {
      type: Number,
      default: 18
    },
    imgUrl: {
      type: String,
      default: 'https://www.sudichina.com/v1.0/cars/img-goback.png'
    }
  },
  data() {
    return {
      TopH: parseFloat(this.$store.state.axiosHeader.navigationH - 33)
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    goBack() {
      this.refreshPrevPage()
      // wx.navigateBack({
      //   delta: 1
      // })
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    width: 100%;
  }
  .nav-bar .icon{
    /*padding: 33px 22px;*/
    box-sizing: border-box;
  }
  .nav-bar .icon img{
    width: 12px;
    height: 18px;
  }
</style>
