<template>
  <div>
    <bottom_navigation ref="bottom_bar" :type="3" />
  </div>
</template>

<script>
import bottom_navigation from '@/components/common/bottom_navigation'
export default {// 用户中心组件
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
