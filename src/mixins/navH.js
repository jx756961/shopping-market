export default {
  computed: {
    navigationH() {
      return `calc(100vh - ${this.$store.state.axiosHeader.navigationH}px)`
    },
    topH(){
      return this.$store.state.axiosHeader.navigationH
    }
  }
}
