export default {
  props: {
    noHome: {
      type: [String, Boolean],
      default: false
    },

    gobackUrl: {
      type: String,
      default: null
    },

    isHasData: {
      type: [Number, String, Boolean],
      default: null
    }
  },
  created() {
    this.paddingTopH = parseFloat(this.$store.state.axiosHeader.navigationH - 40)
    console.log(this.paddingTopH)
  },
  data() {
    return {
      paddingTopH: 34, // padding-top
      showGoback: false,
      showGohome: false
    }
  },
  methods: {
    gohome() {
      wx.reLaunch({ url: this.$store.state.axiosHeader.toIndex })
    }
  },
  onLoad() {
    const pages = getCurrentPages()
    console.log(pages, this.showGoback)
    this.showGoback = pages.length > 1 // 页面历史栈拥有至少2个页面
    this.showGohome = pages[0].route !== this.$store.state.axiosHeader.theIndex && !this.gobackUrl // 第一个页面不是首页，且没有强制返回键，且不是选择客户端页
    // && pages[0].route !== 'pages/select_client/main'
  }
}
