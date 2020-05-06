<template>
  <div class="index-page">
    market index
  </div>
</template>

<script>
  import no_cancel_dialog from '@/components/common/no_cancel_dialog';
  import {reLaunchClear} from "../../utils/utils";
  import {inputDataCan} from "@/utils/utils";

  export default {
    data() {
      return {
        motto: '',
        userInfo: {
          nickName: '',
          avatarUrl: ''
        },
        forms:{
          userpwd:'',
          userName:''
        },
        canNext:false,
      }
    },
    components: {
      no_cancel_dialog
    },
    methods: {
      getUserLoginStatus() {
        if (this.$store.state.userInfo.id){
          reLaunchClear('../record/record_index/main')
        }
      },
      toNext(){
        if (!this.canNext){
          let options={
            title:'请输入用户名和密码',
            info:'用户名和密码不能为空'
          }
          this.$refs.no_cancel_dialog.showDialog(options)
          return false;
        }
        this.getUserInfo();
      },
      getUserInfo(){
        this.$axios.get("/base/restful/managerUser/exclude/loginMangerUser",
          {params: {userName: this.forms.userName, password: this.forms.userpwd}, urlType: "query"}).then(res => {
            if (res.data.code==='0000'){
              console.log('test', res);
              let userInfo = res.data.data;
              if (userInfo.loginPermission===2){
                let options={
                  title:'登录失败',
                  info:'请切换管理员业务员账号操作'
                }
                this.$refs.no_cancel_dialog.showDialog(options)
                return false;
              }else {
                this.$store.commit('changeUser',userInfo);
                reLaunchClear('../record/record_index/main');
              }

            } else {
              let options={
                title:res.data.msg,
                info:'请您检查后重新输入或联系管理员修改'
              }
              this.$refs.no_cancel_dialog.showDialog(options)
            }

        }).catch(err => {
          console.warn('test', err);
        })
      }
    },
    watch:{
      forms:{
        handler(nV,oV){
          this.canNext=inputDataCan(nV);
        },
        deep:true
      },

    },
    onLoad(){
      this.getUserLoginStatus()
    },
    onShow() {
      this.getUserLoginStatus()
    },
    onShareAppMessage() {
      return {
        title: "快来使用分通录单小程序",
        path: this.$store.state.axiosHeader.toIndex,
        success: function(res) {
        },
        fail: function(res) {
        }
      };
    },
    created() {
      // let app = getApp()
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/login_page";
</style>
