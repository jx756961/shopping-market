export default {
  data() {
    return {
      refreshing: false, // 将refreshing设为true，可支持自动触发下拉刷新的场景。同样会触发refresh事件
      refreshed: false // 将本属性设置为true，收起下拉刷新，可多次设置为true（即便原来已经是true了）
      // lastRefreshTime: 0,    //上次刷新的时间
    }
  },
  methods: {
    changeRefreshed(bool) { // 修改refreshed的状态
      console.log('changeRefreshed:', bool)
      this.refreshed = bool
      /*      this.lastRefreshTime = +new Date();
      setTimeout(()=>{    //3s后自动取消下拉刷新状态
        if(+new Date()-this.lastRefreshTime>2500){
          this.refreshed = true;
        }
      },3000)*/
    },
    delayRefreshed(delay) { // 延迟修改refreshed的状态
      // delay：axios调用catch时，隔一段时间再修改refreshed的状态
      setTimeout(() => {
        this.refreshed = true // 成功之后，将refreshed设为true，收起下拉刷新组件
      }, 1500)
    }
  }
}
