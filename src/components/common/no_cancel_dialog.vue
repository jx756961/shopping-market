<template>
	<div class="car_driver">
    <van-dialog
      use-slot
      :title="' '"
      :show="dialogStatus"
      @close="onClose"
    >
      <div class="dialog-content">
        <img class="img" src="https://www.sudichina.com/v1.0/cars/img-wraning.png" alt="">
        <div class="phone">{{tipOption.title}}</div>
        <div class="check">{{tipOption.info}}</div>
      </div>
    </van-dialog>
	</div>
</template>

<script>
  export default {// 组件
    name: "no_cancel_dialog",
    data() {
      return {
        dialogStatus: false,
        tipOption: {}
      }
    },
    components: {},
    created() {
    },
    mounted() {
    },
    methods: {
      showDialog(options) {
        if (options) {
          this.tipOption = options;
          this.dialogStatus = true;
        };
      },
      onClose() {
        this.dialogStatus = false;
      }
    },
    options: {
      styleIsolation: 'isolated'
    }
  }
</script>

<style scoped>
@import "../../style/no_cancel_dialog.css";
</style>
