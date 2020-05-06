<template>
  <div class="connect_popup bottom_popup">
    <van-popup :show="showSelect" position="bottom"
               @close="cancel">
      <div class="popup-title">
        <span @click="cancel">取消</span>
        <span>{{info.title}}</span>
        <span @click="sure">确定</span>
      </div>
      <div class="popup-list">
        <template v-if="info.list && info.list.length>0">
          <div v-for="(item, i) in info.list" :key="i" wx:key="i" @click="selectItem(item)">
            <div :class="{selectedItem: tempSelected.id===item.id}">
              <span>{{item.value}}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="noList">
            <img src="https://img.sudichina.com/public/app_car_imgs/no_tips.png" />
            <span>暂无其他单价</span>
          </div>
        </template>
      </div>
    </van-popup>
  </div>
</template>

<script>
  // 下拉选择框的样式
export default {
  props: ['info', 'className'],
  data(){
    return {
      showSelect: false,
      selected: {},    //已经选中的
      tempSelected: '',  //临时选中的
    }
  },
  methods: {
    showPopup(){  //显示此组件
      this.showSelect = true;
    },
    selectItem(item){    //临时选中
      this.tempSelected = item;
      console.log('selectItem',item)
    },
    cancel(){  //取消选择框
      this.showSelect = false;
      this.tempSelected = this.selected;
    },
    sure(){  //确定
      this.selected = this.tempSelected;
      console.log('sure',this.selected)
      this.$emit('selectItemValue', this.selected.value);  //传向父组件
      this.showSelect = false;
    }
  },
  options: {
    styleIsolation: 'isolated'
  },
  onLoad(){
    console.log('popup-list',this.info.list)
  },
  onUnload(){
    console.log('重置vant_popup_bottom的数据');
    this.resetData();
  }
}
</script>

<style scoped>
  .bottom_popup .popup-title,
  .bottom_popup .popup-list>div{
    height: 53px;
    line-height: 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    font-size:15px;
    border-bottom: 1px solid #EFEFEF;
  }
  .bottom_popup .popup-list>div:last-child{
    border-bottom: none;
  }
  .bottom_popup .popup-title{
    font-size:16px;
    white-space: nowrap;
  }
  .bottom_popup .popup-title>span:first-child{
    width: 30px;
    font-size:15px;
    color:rgba(153,153,153,1);
    padding: 0 20px;
  }
  .bottom_popup .popup-title>span:last-child{
    width: 30px;
    font-size:15px;
    color:rgba(73,135,255,1);
    padding: 0 20px;
  }
  .bottom_popup .point{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .bottom_popup .selected{
    width: 22px;
    height: 14px;
  }

  .bottom_popup .popup-list>div{
    padding: 0 20px;
  }
  .popup-list>div>div{
    flex-grow: 1;
    text-align: center;
  }
  .selectedItem{
    color: #4C94FF;
  }
  .noList{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0 45px 0 !important;
    height: auto !important;
    box-sizing: content-box !important;
  }
  .noList img{
    width: 50px;
    height: 50px;
  }
  .noList>span:nth-child(2){
    margin-top: 20px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:20px;
  }
</style>
