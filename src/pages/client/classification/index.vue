<template>
  <div>
    <navigation_style title-text="分类" />
    <div :style="{height: navigationH }">
      <mp-vtabs
        :vtabs="vtabs"
        :active-tab="activeTab"
        :animation="true"
        tab-line-color="#81c1af"
        tab-active-text-color="#81c1af"
        @change="onChange"
        @tabclick="setTabs"
      >
        <div v-for="(item, index) in vtabs" :key="index" class="item-tabs" wx:key="index">
          <mp-vtabs-content :tab-index="index">
            <view class="vtabs-content-item">我是第{{ index + 1 }}项： {{ item.title }}</view>
          </mp-vtabs-content>
        </div>
      </mp-vtabs>
    </div>
  </div>
</template>

<script>
import navH from '@/mixins/navH'

export default {// 分类组件
  name: 'Index',
  components: {},
  mixins: [navH],
  data() {
    return {
      vtabs: [],
      activeTab: 0
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    setTabs(e) {
      const index = e.mp.detail.index
      console.log('tabClick', index)
    },
    onChange(e) {
      const index = e.mp.detail.index
      console.log('change', index)
    }
  },
  onLoad() {
    const titles = ['热搜推荐', '手机数码', '家用电器',
      '生鲜果蔬', '酒水饮料', '生活美食',
      '美妆护肤', '个护清洁', '女装内衣',
      '男装内衣', '鞋靴箱包', '运动户外',
      '生活充值', '母婴童装', '玩具乐器',
      '家居建材', '计生情趣', '医药保健',
      '时尚钟表', '珠宝饰品', '礼品鲜花',
      '图书音像', '房产', '电脑办公']

    const vtabs = titles.map(item => (
      { title: item }))
    this.vtabs = vtabs
  }
}
</script>

<style scoped>
  /*@import "../../../style/weui.css";*/
  page{
    background-color: #F8F8F8;
    font-size: 16px;
    font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
  }
  /* .weui-btn{width:184px;} */

  page{
    background-color: #FFFFFF;
    height: 100%;
  }

  .vtabs-content-item {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
  .page__hd {
    padding: 40px;
  }
  .page__bd {
    padding-bottom: 40px;
  }
  .page__bd_spacing {
    padding-left: 15px;
    padding-right: 15px;
  }

  .page__ft{
    padding-bottom: 10px;
    text-align: center;
  }

  .page__title {
    text-align: left;
    font-size: 20px;
    font-weight: 400;
  }

  .page__desc {
    margin-top: 5px;
    color: #888888;
    text-align: left;
    font-size: 14px;
  }
  .weui-cell_example:before{
    left:52px;
  }
</style>
