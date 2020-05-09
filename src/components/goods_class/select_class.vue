<template>
  <div>
    <van-popup
      :show="popuShow"
      position="top"
      :custom-style="'top:'+topH+'px'"
      @close="onClose(1)"
    >
      <div class="popup-content">
        <select_popup1 ref="select_popup1" @getPopup="getPopup" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import select_popup1 from '@/components/goods_class/select_popup1'
import navH from '@/mixins/navH'
export default {// 组件
  name: 'SelectClass',
  components: { select_popup1 },
  mixins: [navH],
  data() {
    return {
      popuShow: false
    }
  },
  watch: {
    popuShow(nV, oV) {
      this.$emit('setPopupStatus', nV)
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onClose() {
      this.popuShow = false
    },
    showDialog() {
      this.popuShow = !this.popuShow
    },
    getPopup(data, index) {
      this.$emit('setSelectInfo', data, index)
      this.popuShow = false
    }
  }
}
</script>

<style scoped>
  @import "../../style/goods_class/selcet_popup.css";
</style>

