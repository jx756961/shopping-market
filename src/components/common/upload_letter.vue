<template>
  <div class="main">
    <div class="title" v-if="!noTitle">{{data[type].text}}</div>
    <div class="img" @click="uploadSelect">
      <img :src="img_url" />
      <span v-if="progress>0 && progress!=100"
            :style="{width: progress+'%'}">{{progress}}%</span>
      <span v-if="progress==100"
            style="width:100%">上传成功，再次点击可更改</span>
    </div>

    <template v-if="type==='upload_idcard1' || type==='upload_idcard2' || type==='upload_idcard3'">
      <!--|| type==='upload_drivingLicenseImg' || type==='upload_vehicleImg' || type==='upload_roadTransportLicPermitImg'-->
      <van-action-sheet
        :show="actionSheetShow"
        :actions="actions2"
        @select="actionSelect"
        @cancel="actionClose"
        class="upload-action-sheet"
        cancel-text="取消"
      />
    </template>
    <template v-else>
      <van-action-sheet
        :show="actionSheetShow"
        :actions="actions"
        @select="actionSelect"
        @cancel="actionClose"
        class="upload-action-sheet"
        cancel-text="取消"
      />
    </template>
    <div class="mask_container" v-show="data[type].exampleImg && actionSheetShow">
      <img :src="data[type].exampleImg" :class="type" v-if="data[type].exampleImg" />
      <div class="list">
        <span>请按照示例图提交{{data[type].text}}。</span>
        <span>照片要四角对齐，如有模糊、反光、太暗、有遮挡则不予认证。</span>
        <span>不可使用美图软件美化照片。</span>
        <span v-if="type==='upload_letter'">必须加盖公章！</span>
      </div>
    </div>
  </div>
</template>

<script>
  // 上传资质，可弹出一个 拍照 或 从手机相册选择 选项
import {uploadImg} from '@/utils/upload_img'
import store from '@/store'
export default {
  props: ['type', 'noTitle','repair'],  //认证的图片类型，noTitle是否没有标题(为否时才有标题)
  data(){
    return {
      progress: 0,    //上传进度
      img_url: null,
      actionSheetShow: false,
      actions: [
        {
          name: '拍照',
          sourceType: 'camera',  //使用相机
        },
        {
          name: '从手机相册选择',
          sourceType: 'album',   //从相册选图
        },
      ],
      actions2: [
        {
          name: '拍照',
          sourceType: 'camera',  //使用相机
        },
      ],
      data: {
        upload_loading: {   //装货单
          imgUrl: 'https://img.sudichina.com/public/app_car_imgs/loading_img.png',      //图片地址
          text: '装货单',
          exampleImg: false,
          imageType: 'loadingEvidenceImg',
        },
        upload_unloading: {   //卸货单
          imgUrl: 'https://img.sudichina.com/public/app_car_imgs/unloading_img.png',      //图片地址
          text: '卸货单',
          exampleImg: false,
          imageType: 'unloadingEvidenceImg',
        },
      },
    }
  },
  methods: {
    actionSelect(e){    //选择选项

      this.upload(e.mp.detail.sourceType);
    },
    actionClose(){     //取消选择
      this.actionSheetShow = false;
    },
    uploadSelect(){     //选择上传图片方式
      this.actionSheetShow = true;
    },
    upload(sourceType){  //上传图片
      let userType = 'car';  //车主
      let uploadType = 'certification/'+userType+'/personal';  //车主个人上传图片地址
      this.actionSheetShow = false;
      uploadImg(this, {
        uploadType: uploadType,
        sourceType: sourceType,
      }, (uploadImgUrl)=>{
        let imgKey = this.data[this.type].imageType;
        let obj = {};
        obj[imgKey] = uploadImgUrl;
        console.log('上传成功的地址：',uploadImgUrl);
        // this.progress = 100;
        if (this.repair){
          console.log('uploadSuccess::',obj)
          this.$emit('uploadSuccess',imgKey);
          store.commit('changeTempInfo', obj);//修改临时信息
        } else{
          this.$emit('uploadSuccess');
          store.commit('changeTempInfo', obj);//修改临时信息
        }
      })
    }
  },
  onLoad(){
    this.resetData();
    this.actionSheetShow = false;  //todo：HACK:隐藏选择
    this.img_url = this.data[this.type].imgUrl;  //第一次上传时有时无法回显，需要转换一次
    let temp = store.state.tempInfo;
    if(temp.identificationMarkings){  //认证成功重新认证
      this.data.upload_license.imgUrl = temp.businessLicenseImage;
      this.data.upload_allow.imgUrl = temp.openingPermitImage;
      this.data.upload_letter.imgUrl = temp.certificationLetterImage;
      this.canNext = true;
    }else if(temp.id && temp.taxpayerIdentificationCode){  //再次添加增票资质
      // this.data.invoice_license.imgUrl = temp.businessLicenseImg;
      // this.data.invoice_allow.imgUrl = temp.openingPermitImg;
      this.data.invoice_letter.imgUrl = temp.supplementalConfirmationImg;
      this.canNext = true;
    }
    console.log('tempinfo:',temp);
    if(temp[this.data[this.type].imageType]){
      this.img_url = temp[this.data[this.type].imageType];  //图片回显
      this.$emit('uploadSuccess');
    }
  }
}
</script>

<style scoped>
  .main >>> .img{
    margin: 0 auto;
    width: 359px;
    height: 233px;
  }
  .main{
    text-align: center;
    padding: 15px 0 20px 0;
  }
  .title{
    font-size:14px;
    color:rgba(51,51,51,1);
    line-height:20px;
  }
  .img{
    width: 275px;
    height: 177px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  .img span{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 37px;
    line-height: 37px;
    background-color: rgba(0,0,0,0.6);
    font-size:12px;
    color:rgba(255,255,255,1);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  /*选择上传图片的方式的遮罩层*/
  .mask_container{
    background-color:rgba(0, 0, 0, .7);
    position: fixed;
    top: 65px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
  }
  .mask_container img{
    width: 185px;
    height: 260px;
    margin: 29px auto 0 auto;
  }
  .mask_container .upload_license,
  .mask_container .invoice_license{
    width: 185px;
    height: 264px;
  }
  .mask_container .upload_letter,
  .mask_container .invoice_letter{
    width: 185px;
    height: 260px;
  }
  .mask_container .upload_allow,
  .mask_container .invoice_allow,
  .mask_container .upload_idcard1,
  .mask_container .upload_idcard1_2,
  .mask_container .upload_idcard2,
  .mask_container .upload_idcard3,
  .mask_container .upload_vehicleImg,
  .mask_container .upload_roadTransportLicPermitImg{
    width: 345px;
    height: 220px;
    margin: 72px auto 0 auto;
  }
  .mask_container .upload_drivingLicenseImg{
    width: 215px;
    height: 288px;
  }
  .list{
    text-align: left;
    margin-top: 15px;
  }
  .list span{
    display: block;
    height: 27px;
    line-height: 27px;
    font-size:12px;
    color:rgba(255,255,255,1);
    padding-left: 33px;
    position: relative;
  }
  .list span:before{
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    background-color: rgba(255,92,0,1);
    border-radius: 50%;
  }
  /*  .car_driver .list span:before{
			background-color: rgba(255,92,0,1);
		}*/

</style>
<style>
  .upload-action-sheet .van-popup--bottom{
    z-index: 102 !important;
    width: 355px;
    bottom: 10px;
    background-color: transparent;
  }
  .upload-action-sheet .van-action-sheet__cancel{
    margin-top: 6px;
    border-radius:13px;
    background-color: #FFF;
    height: 57px;
    line-height: 57px;
  }
  .upload-action-sheet .van-action-sheet__cancel:before{
    display: none;
  }
  .upload-action-sheet .van-action-sheet__item:first-child{
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background:rgba(255,255,255,0.8);
    border-bottom: 1px solid rgba(0,0,0,0.2);
    height: 55px;
    line-height: 55px;
  }
  .upload-action-sheet .van-action-sheet__item:nth-child(2){
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background:rgba(255,255,255,0.8);
    height: 55px;
    line-height: 55px;
  }
  .upload-action-sheet .van-action-sheet__item,
  .upload-action-sheet .van-action-sheet__cancel{
    font-size:20px;
    color:rgba(0,122,255,1);
    overflow: hidden;
  }
</style>
