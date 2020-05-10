<template>
  <div class="index-content">
    <navigation_style title-text="首页" />
    <pull-down-refresh :refreshing="refreshing" :refreshed="refreshed" @refresh="getGoods(1)">
      <div>
        <van-sticky :offset-top="topH">
          <div class="search-wrap">
            <div class="address">
              <!--<img src="https://www.sudichina.com/v1.0/cars/img-location.png" alt="">-->
              <img class="location" src="https://img.sudichina.com/public/app_goods_imgs/location_point.png" alt="">
              <span>分通科技</span>
              <img class="arrow" src="https://www.sudichina.com/v1.0/cars/img-arrow-to-bottom.png" alt="">
            </div>
            <div class="search" @click="navigate('')">
              <!--<img src="" alt="">-->
              <span>搜索</span>
            </div>
          </div>
        </van-sticky>
        <swiper
          :current="swiperCurrent"
          indicator-dots="true"
          circular="true"
          indicator-color="#C8C8C8"
          indicator-active-color="#E6933D"
          autoplay="true"
          @change="swiperChange"
        >
          <swiper-item v-for="(item, i) in bannerList" :key="i" class="swiper-item" wx:key="i">
            <img :src="item.imgUrl" @click="see_banner(item.href)">
            <!--<img :src="item.imgUrl" @click="see_banner(item.href)">-->
          </swiper-item>
        </swiper>
        <div class="product-content">
          <div class="introduce">
            <div>蘑菇屯鲜生</div>
            <div>最快5分钟达</div>
            <div>每日消费88免配送费</div>
          </div>
          <div class="grid-list">
            <van-sticky class="list--list" :offset-top="topH+40">
              <van-grid :border="false">
                <van-grid-item
                  icon="https://img-blog.csdnimg.cn/20200507205514379.png"
                  text="超市"
                  link-type="navigateTo"
                  url="/pages/dashboard/index"
                  icon-class="icon-style"
                />
                <van-grid-item
                  icon="https://img-blog.csdnimg.cn/20200507205514359.png"
                  text="水果"
                  @click="natigateTo"
                />
                <van-grid-item icon-class="icon-style" icon="https://img-blog.csdnimg.cn/20200507205514311.png" text="蔬菜" />
                <van-grid-item icon-class="icon-style" icon="https://img-blog.csdnimg.cn/20200507205514352.png" text="百货" />
              </van-grid>
            </van-sticky>
          </div>
          <div class="flash-sale">
            <div class="title">
              限时抢购
            </div>
          </div>
        </div>
        <div class="global-btn-v global-car-btn-canLogin canNext" @click="navigate('../client/classification/main')">
          market index
        </div>
      </div>
    </pull-down-refresh>
  </div>
</template>

<script>

import navH from '@/mixins/navH'
import { reLaunchClear } from '../../utils/utils'
import { inputDataCan } from '@/utils/utils'
import pull_down from '@/mixins/pull_down'
export default {
  name: 'IndexComponets',
  mixins: [pull_down, navH],
  data() {
    return {
      motto: '',
      userInfo: {
        nickName: '',
        avatarUrl: ''
      },
      forms: {
        userpwd: '',
        userName: ''
      },
      canNext: false,
      swiperCurrent: 0, // swiper所在滑块的index
      bannerList: [
        {
          href: null,
          id: '2',
          imgUrl: 'https://fentong.oss-cn-qingdao.aliyuncs.com/ft/2019/guoqing70.png',
          name: '22',
          seqNum: 1,
          state: 1,
          type: 1
        },
        {
          href: 'https://fentong.oss-cn-qingdao.aliyuncs.com/public/help_center/html/driver/index.html',
          id: '1',
          imgUrl: 'https://fentong.oss-cn-qingdao.aliyuncs.com/ft/2019/help.png',
          name: '2',
          seqNum: 2,
          state: 1,
          type: 1
        }
      ]
    }
  },
  watch: {
    forms: {
      handler(nV, oV) {
        this.canNext = inputDataCan(nV)
      },
      deep: true
    }

  },
  created() {
    // let app = getApp()
  },
  methods: {
    swiperChange(e) {
      this.swiperCurrent = e.mp.detail.current
    },
    see_banner() {
      console.log('查看banner')
    },
    toNext() {
      if (!this.canNext) {
        const options = {
          title: '请输入用户名和密码',
          info: '用户名和密码不能为空'
        }
        this.$refs.no_cancel_dialog.showDialog(options)
        return false
      }
      this.getUserInfo()
    },
    getUserInfo() {
      this.$axios.get('/base/restful/managerUser/exclude/loginMangerUser',
        { params: { userName: this.forms.userName, password: this.forms.userpwd }, urlType: 'query' }).then(res => {
        if (res.data.code === '0000') {
          console.log('test', res)
          const userInfo = res.data.data
          if (userInfo.loginPermission === 2) {
            const options = {
              title: '登录失败',
              info: '请切换管理员业务员账号操作'
            }
            this.$refs.no_cancel_dialog.showDialog(options)
            return false
          } else {
            this.$store.commit('changeUser', userInfo)
            reLaunchClear('../record/record_index/main')
          }
        } else {
          const options = {
            title: res.data.msg,
            info: '请您检查后重新输入或联系管理员修改'
          }
          this.$refs.no_cancel_dialog.showDialog(options)
        }
      }).catch(err => {
        console.warn('test', err)
      })
    },
    getGoods() {
      console.log('下拉')
      this.changeRefreshed(false)
      setTimeout(() => {
        console.log('关闭下拉')
        this.changeRefreshed(true)
      }, 2000)
    },
    natigateTo() {

    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/index_page.scss";
</style>
