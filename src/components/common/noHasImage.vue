<template>
  <div>
    <div class="no-has" :style="{'margin-top':marginTop +'px'}">
      <img :src="imgUrl" alt="">
      <div v-if="smallFont">
        {{ tips }}
      </div>
      <div class="large">{{ tips }}</div>
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
    smallFont: {
      type: Boolean,
      default: true
    },
    marginTop: {
      type: Number,
      default: 100
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
    margin:100px auto 10px;
    text-align: center;
    width: 220px;

  }
  .no-has img{
    width: 120px;
    height: 120px;
  }

  .large{
    font-size: 16px;
  }
</style>
