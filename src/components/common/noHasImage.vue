<template>
  <div>
    <div class="no-has">
      <img :src="imgUrl" alt="">
      <div>
        {{ tips }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoHasImage',
  components: {}, // 组件
  props: {
    tips: {
      type: String,
      default: '暂无数据'
    },

    imgUrl: {
      type: String,
      default: 'https://www.sudichina.com/v1.0/cars/no_details.png'
    }
  },
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

<style scoped>
  .no-has{
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color: #666666;
    margin:100px auto ;
    text-align: center;
    width: 220px;

  }
  .no-has img{
    width: 120px;
    height: 120px;
  }
</style>
