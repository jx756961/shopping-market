<template>
  <div class="admin-class">
    <navigation_style2 :is-order-show="isPopupStatus" @navBarClick="navBarClick" />
    <div class="srcoll-item">
      <pull-down-refresh :refreshing="refreshing" :refreshed="refreshed" @refresh="getDataList(1)">
        <div v-if="!goodList || goodList<=0">
          <noHasImage tips="暂无记录" />
        </div>
        <div v-else>
          <div v-for="(item,i) in goodList" :key="i" class="item" wx:key="i">
            <good-list :infos="item" @deleteSuccess="deleteSuccess(i)" />
          </div>
        </div>
        <div v-if="goodList && goodList.length>=4" class="global-loading">{{ loadingText }}</div>
      </pull-down-refresh>
    </div>
    <div class="add-good-btn" @click="addGoods">+添加商品</div>
    <select_class ref="select_class" @setPopupStatus="setPopupStatus" />
  </div>
</template>

<script>
import navigation_style2 from '@/components/common/navigation_style2'
import noHasImage from '@/components/common/noHasImage'
import select_class from '@/components/goods_class/select_class'
import pull_down from '@/mixins/pull_down'
import GoodList from '@/components/goods_class/good_list'
export default {// 分类管理组件
  name: 'Index',
  components: { GoodList, navigation_style2, select_class, noHasImage },
  mixins: [pull_down],
  data() {
    return {
      isPopupStatus: false,
      goodList: [1],
      loadingText: '加载中...'
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    navBarClick(dialogIsShow) {
      console.log(dialogIsShow)
      this.$refs.select_class.showDialog()
    },
    setPopupStatus(status) {
      this.isPopupStatus = status
    },
    getDataList() {
      console.log('获取数据')
      this.changeRefreshed(false)
      setTimeout(() => {
        console.log('关闭下拉')
        this.changeRefreshed(true)
      }, 2000)
    },
    addGoods() {
      // TODO
      this.navigate('')
    },
    deleteSuccess() {
      // TODO
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../../style/variables";
  .admin-class{
    width: 100%;
    height: 100vh;
    background: #f7f6fa;
  }
  .add-good-btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    height:52px;
    background:rgba(255,255,255,1);
    box-shadow:0px -1px 4px 0px rgba(0,0,0,0.06);
    color: $themeBg;
    font-size:16px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:bold;
    color: $themeBg;
    line-height:52px;
    text-align: center;
    z-index: 99;
  }
  .srcoll-item{
    /*margin-top: 120rpx;*/
    width: 100%;
    margin: 0 auto;
    bottom: 52px;
    background-color: #F4F8F9;
  }
</style>
