
export function reLaunchClear(url, that) {//清除缓存数据
  wx.reLaunch({
    url: url || that.$store.state.axiosHeader.toIndex
  });
}
// 应尽量使用vant的Toast，否则用户使用大字体时会有问题
// 有textarea时用使用wx.showToast，否则会被遮挡
export function wxToast (msg) {
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 1500
  });
}

export function scanCode() {  //扫码校验
  return new Promise((resolve, reject) => {
    wx.scanCode({
      success: (res) => {
        console.log("wx.scanCode", res);
        if (typeof res.result !== "string") {
          // wxToast('无效二维码!')
          reject(1)
          return false;
        }
        if ( res.result.indexOf("type") === -1 || res.result.indexOf("data") === -1) {
          // wxToast('无效二维码!')
          reject(1)
          return false;
        }
        let result = JSON.parse(res.result);
        if (typeof result !== "object" ){
// wxToast('无效二维码!')
          reject(1)
          return false;
        }
        resolve(result);
      },
      fail: (err) => {
        // wxToast("扫描失败！");
        reject(3)
      }
    });
  });
}


export function toUpper(str) { //将输入的小写字母转为大写
  if (/[a-z]/.test(str)) { //有小写
    return str.toUpperCase();
  } else {
    return str;
  }
}

export function formatTime2(date) {  //只返回年月日
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const t1 = [year, month, day].map(formatNumber).join("-");

  return `${t1}`;
}

export function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

export function getLoopArray(start, end) {
  let starts = start || 0;
  let ends = end || 1;
  let array = [];
  for (let i = starts; i <= ends; i++) {
    array.push(withData(i));
  }
  return array;
}

export function getMonthDay(year, month) {
  let flag = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
  let array = null;

  switch (month) {
    case "01":
    case "03":
    case "05":
    case "07":
    case "08":
    case "10":
    case "12":
      array = getLoopArray(1, 31);
      break;
    case "04":
    case "06":
    case "09":
    case "11":
      array = getLoopArray(1, 30);
      break;
    case "02":
      array = flag ? getLoopArray(1, 29) : getLoopArray(1, 28);
      break;
    default:
      array = "月份格式不正确，请重新输入！";
  }
  return array;
}
export function withData(param) {
  return param < 10 ? "0" + param : "" + param;
}

export function getNewDateArry() {
  // 当前时间的处理
  let newDate = new Date();
  let year = withData(newDate.getFullYear());
  let mont = withData(newDate.getMonth() + 1);
  let date = withData(newDate.getDate());
  let hour = withData(newDate.getHours());
  let minu = withData(newDate.getMinutes());
  let seco = withData(newDate.getSeconds());

  return [year, mont, date, hour, minu, seco];
}

export function dateTimePicker(startYear, endYear, date) {
  // 返回默认显示的数组和联动数组的声明
  let dateTime = [];
  let dateTimeArray = [[], [], [], [], [], []];
  let start = startYear || 1978;
  let end = endYear || 2100;
  // 默认开始显示数据
  let defaultDate = date ? [...date.split(" ")[0].split("-"), ...date.split(" ")[1].split(":")] : getNewDateArry();
  // 处理联动列表数据
  /*年月日 时分秒*/
  dateTimeArray[0] = getLoopArray(start, end);
  dateTimeArray[1] = getLoopArray(1, 12);
  dateTimeArray[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray[3] = getLoopArray(0, 23);
  dateTimeArray[4] = getLoopArray(0, 59);
  dateTimeArray[5] = getLoopArray(0, 59);

  dateTimeArray.forEach((current, index) => {
    dateTime.push(current.indexOf(defaultDate[index]));
  });

  return {
    dateTimeArray: dateTimeArray,
    dateTime: dateTime
  };
}

export function inputDataCan(val, cArr) {//是否进行下一步
  let status = true;
  for (let i in val) {
    if (!val[i]) {
      status = false;
    }
  }
  return status;
}
export function formatTimeStamp(date) {  //返回时间戳
  let dat = new Date(date);
  let timestamp = dat.getTime();
  return timestamp;
}



export function formatDate(timestamp) {//时间戳转日期
  let date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join("-");
  const t2 = [hour, minute, second].map(formatNumber).join(':');

  return `${t1} ${t2}`;
}
export function only2digits(newVal, oldVal) {  //只让输入2位小数
  let arr = String(newVal).split(".");
  if (arr[1] && arr[1].length >= 3) {
    if (oldVal) {
      return oldVal;
    } else {
      return arr[0] + "." + arr[1].slice(0, 2);
    }
  } else {
    if (newVal[0] === "0" && newVal[1] === "0") {  //去掉重复输入0
      return newVal[0];
    }
    return newVal;
  }
}

export function imgUploadCan(le, arr) {//图片上传检测
  let setArr = new Set(arr);
  console.log("imgUploadCan--", setArr)
  if (setArr.size >= le) {
    return true;
  } else {
    return false;
  }

}
