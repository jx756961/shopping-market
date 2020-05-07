
<script>
import store from './store'
export default {
  onLaunch(option) {
    const userInfo = wx.getStorageSync('userInfo') // 同步获取数据
    if (userInfo) {
      store.commit('changeUser', JSON.parse(userInfo))
    } else {
      wx.setStorage({ // 防止报错
        key: 'userInfo',
        data: JSON.stringify({}),
        success: function(res) {}
      })
    }
    console.log('wx.getMenuButtonBoundingClientRect().bottom+10', wx.getMenuButtonBoundingClientRect().bottom + 10)
    store.commit('changeNavigationH', wx.getMenuButtonBoundingClientRect().bottom + 8) // 加10px的padding-bottom
  },
  onHide() { // 页面隐藏
    wx.setStorage({ // 页面隐藏，保存用户信息到缓存
      key: 'userInfo',
      data: JSON.stringify(store.state.userInfo),
      success: function(res) {}
    })
  },
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({ key: 'logs' }).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },

  log() {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
  page{
    min-height: 100%;
    font-family:PingFangSC-Regular;
    font-weight:400;
    box-sizing: border-box;
  }
  page{
    background: #ffffff;
  }

  img{
    width: 100%;
    height: 100%;
  }
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
