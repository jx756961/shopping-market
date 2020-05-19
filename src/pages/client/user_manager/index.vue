<template>
  <div>
    <navigation_style title-text=" " />
    <div class="car-header">

    </div>
    <span>个人中心</span>
    <button @click="navigate('../../business/admin_index/main')">后台管理</button>
  </div>
</template>

<script>
export default {// 用户中心组件
  name: 'UserManager',
  components: { },
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
  .car-header{
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    line-height: 40px;
    background-color: $themeBg;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-family:PingFangSC;

  }
</style>
