import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'
import './style/global.scss'
import { wxToast } from '@/utils/utils'
import navigation_style from './components/common/navigation_style'
import to_success from './components/common/to_success'
import navbar_notitle from './components/common/navbar_notitle'

const pathList = { // 网络请求地址列表
  // 线上
  // common: 'https://ft.sudichina.com/member-service',  //9080基础接口
  // order: 'https://ft.sudichina.com/trade-service',    //9081查询订单接口
  // query: 'https://ft.sudichina.com/base-service',     //9082查询省市区街道、公司、图片文件夹接口
  // car: 'https://ft.sudichina.com/vehicle-service',   //9083用车接口

  // 测试
  common: 'http://192.168.0.200:7777/member-service', // 9080基础接口
  order: 'http://192.168.0.200:7777/trade-service', // 9081查询订单接口
  query: 'http://192.168.0.200:7777/base-service', // 9082查询省市区街道、公司、图片文件夹接口
  car: 'http://192.168.0.200:7777/vehicle-service' // 用车

  // 开发
  // common: "http://192.168.0.200:5555/member-service", //9080基础接口
  // order: "http://192.168.0.200:5555/trade-service", //9081查询订单接口
  // query: "http://192.168.0.200:5555/base-service", //9082查询省市区街道、公司、图片文件夹接口
  // car: "http://192.168.0.200:5555/vehicle-service", //用车
  // test: "http://192.168.0.200:9080",
  // test2: "http://192.168.0.200:9082"

  // 线上测试
  // common: 'https://www.sudichina.com/member-service', //9080基础接口
  // order: 'https://www.sudichina.com/trade-service',   //9081查询订单接口
  // query: 'https://www.sudichina.com/base-service',    //9082查询省市区街道、公司、图片文件夹接口
  // car: 'https://www.sudichina.com/vehicle-service',   //9083用车接口
}

Vue.prototype.$store = store
Vue.prototype.$axios = axios

Vue.component('navigation_style', navigation_style)
Vue.component('to_success', to_success)
Vue.component('navbar_notitle', navbar_notitle)

function rand() { // 获取8位的随机数
  return parseInt(Math.random() * (99999999 - 10000000 + 1) + 10000000)
}

function objFlat(obj) { // 将obj扁平化为&连接
  if (!obj) return ''
  let param = ''
  for (const key in obj) {
    param += key + '=' + obj[key] + '&'
  }
  return '?' + param.slice(0, -1)
}

function dataFlat(d) { // 将data中的number类型，转化为string，再传给后台
  if (!d) return d
  if (typeof d === 'string') d = JSON.parse(d)
  const data = Object.assign({}, d) // 复制一个data，防止直接修改data
  for (const key in data) {
    if (typeof data[key] === 'number') {
      data[key] = String(data[key])
    } else if (key === '__keyPath') { // 小程序会为object自动添加__keyPath属性
      delete data[key]
    }
  }
  console.log('dataFlat:', data)
  return data
}

axios.defaults.adapter = function(config) {
  return new Promise((resolve, reject) => {
    if (config.LoginRequired && !store.state.userInfo.id) return reject() // 需要登录且未登录
    const path = config.urlType ? pathList[config.urlType] : pathList.common
    let header = Object.assign({}, config.header, {
      device_type: 'PcMgr',
      request_id: '' + rand() + rand() + rand() + rand(),
      app_business: '4',
      version: '1.0.1'
    })

    if (store.state.userInfo.id) { // 若已登录，每次请求都添加id、mobile
      header = Object.assign({}, header, {
        token: store.state.userInfo.token,
        user_id: store.state.userInfo.id,
        user_code: store.state.userInfo.userCode || 1,
        user_mobile: 111111111111,
        company_id: store.state.userInfo.companyId,
        user_name: encodeURIComponent(store.state.userInfo.userName),
        real_name: encodeURIComponent(store.state.userInfo.realName),
        company_name: encodeURIComponent(store.state.userInfo.companyName),
        company_manager_type: encodeURIComponent(store.state.userInfo.companyManagerType)
      })
    }
    console.log('config:', config)
    wx.request({ // 发起网络请求
      url: path + config.url + objFlat(config.params),
      data: dataFlat(config.param) || dataFlat(config.data),
      method: config.methodType || 'POST',
      header: header,
      success: function(res) {
        console.log('wx.request:', res)
        if (res.data.code === '0004') { // 登录失效
          wxToast('登录信息已失效')
          wx.reLaunch({ url: store.state.axiosHeader.toRIndex })
          return reject(res)
        } else if (res.data.code === '0000' && config.headOff) {
          return resolve(res)
        } else if (res.data.code === '0000' || !config.hasToast) { // 无提示
          return resolve(res)
        } else { // 有提示
          return reject(res)
        }
      },
      fail: function(err) {
        if (err.status > 200) {
          wx.showToast({
            title: res.error || '服务器繁忙，请您稍后再试',
            icon: 'none',
            duration: 1500
          })
          return false
        }
        console.log(err)
        if (config.noErrToast) return reject(err) // 不需要err提示
        let failText = config.failText || '网络错误，请稍后再试'
        if (err.errMsg.indexOf('timeout') !== -1) {
          failText = '请求超时，请稍后再试'
        }
        wx.showToast({
          title: failText,
          icon: 'none',
          duration: 1500
        })
        return reject(err)
      },
      complete: function(res) {
      }
    })
  })
}

Vue.prototype.navigate = function(url) { // 纯粹的跳转
  wx.navigateTo({
    url: url
  })
}
// 使用：this.navigate();

Vue.prototype.$preventReClick = function() { // 重复点击
  if (!this.buttonClicked) {
    this.buttonClicked = true
    setTimeout(() => {
      this.buttonClicked = false
    }, 3500)
    console.log('正常点击')
    return true
  } else {
    console.log('重复点击')
    return false
  }
}
Vue.prototype.navigateBack = function() {
  if (getCurrentPages().length > 1) {
    wx.navigateBack(1)
  } else {
    wx.reLaunch({
      url: store.state.axiosHeader.toIndex
    })
  }
}

Vue.prototype.resetData = function() { // 清空还原数据(不可在onShow中重置，否则其子组件也需要重置)
  Object.assign(this.$data, this.$options.data())
  console.log('resetData---------', this.$data)
}
// 使用：this.resetData();
Vue.prototype.$systemTop = function(navH, margin) {
  let navHei = ''
  wx.getSystemInfo({
    success: function(res) {
      navHei = (navH * (750 / res.windowWidth)) + (margin * (750 / res.windowWidth)) // 将高度乘以换算后的该设备的rpx与px的比例
    }
  })
  return parseFloat(navHei)
}


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
