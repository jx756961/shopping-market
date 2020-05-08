<template>
  <div>
    购物车
    <bottom_navigation ref="bottom_bar" :type="2" />
  </div>
</template>

<script>

import bottom_navigation from '@/components/common/bottom_navigation'
export default {// 购物车组件
  name: 'Index',
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
