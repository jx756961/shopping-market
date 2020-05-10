<template>
  <div class="index-page">
    <template v-if="tabBarActive===0">
      <index_componets />
    </template>
    <template v-else-if="tabBarActive===1">
      <shopping_cart />
    </template>
    <template v-else-if="tabBarActive===2">
      <user_manager />
    </template>
    <bottom_navigation ref="bottom_bar" @setActiveTabBar="setActiveTabBar" />
  </div>
</template>

<script>
import bottom_navigation from '@/components/common/bottom_navigation'
import index_componets from '@/components/home/index_componets'
import shopping_cart from '@/components/home/shopping_cart'
import user_manager from '@/components/home/user_manager'
import { reLaunchClear } from '@/utils/utils'
export default {
  components: {
    bottom_navigation,
    index_componets,
    shopping_cart,
    user_manager
  },
  data() {
    return {
      tabBarActive: 0
    }
  },
  created() {
    // let app = getApp()
  },
  methods: {
    getUserLoginStatus() {
      if (this.$store.state.userInfo.id) {
        reLaunchClear('../index/main')
      }
    },
    setActiveTabBar(index) {
      this.tabBarActive = index
    }
  },
  onLoad() {
    this.getUserLoginStatus()
  },
  onShow() {
    this.getUserLoginStatus()
  },
  onShareAppMessage() {
    return {
      title: '快来使用小程序',
      path: this.$store.state.axiosHeader.toIndex,
      success: function(res) {
      },
      fail: function(res) {
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
