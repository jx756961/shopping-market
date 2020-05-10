<template>
  <div>
    <span>个人中心</span>
    <button @click="navigate('../../business/admin_index/main')">后台管理</button>
    <bottom_navigation ref="bottom_bar" :active="2" />
  </div>
</template>

<script>
import bottom_navigation from '@/components/common/bottom_navigation'
export default {// 用户中心组件
  name: 'UserManager',
  components: { bottom_navigation },
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
</style>
