import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    axiosHeader: {       //请求网络时的header
      navigationH: 66,   //title的高
      toIndex: '/pages/record/record_index/main', //从非首页跳往首页
      toRIndex: '/pages/index/main', //首页
    },
    userInfo:{
      token: '',
      id: "",
      companyId:'',
      companyName:'',
      companyManagerType: "",      // 管理员类型
      userName: "",                //用户名
      loginPermission: 0,         //3 是管理员 2 财务 1 客服
      realName:"",//真实姓名
    },
    tempInfo: {},
  },
  mutations:{
    clearUser: (state) => {
      state.userInfo = {};
      wx.setStorage({key: 'userInfo', data: JSON.stringify({}), success: function(res){}})
      console.log('重置user')
    },
    changeUser: (state, obj) => {
      state.userInfo = Object.assign({}, state.userInfo, obj);

    },
    clearTempInfo: (state) => {
      console.log('clearTemp')
      state.tempInfo = {};
    },
    changeTempInfo: (state, obj) => {
      state.tempInfo = Object.assign({}, state.tempInfo, obj);
      console.log('state.tempInfo:', state.tempInfo);
    },
    changeNavigationH: (state, h) => {  //修改标题的高
      state.axiosHeader.navigationH = parseFloat(h);
      console.log('state.axiosHeader.navigationH:',state.axiosHeader.navigationH);
    },
  }
})
export default store
