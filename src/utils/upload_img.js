// 上传图片
import { wxToast } from '@/utils/utils'

function queryFile($axios, p, success) { // 查询上传文件夹名
  $axios.get('/base/restful/oss/object/exclude/getPolicy?p=images-test/' + p, {
    // 测试环境：images-test/xxx
    // 生产环境：images/xxx
    urlType: 'query'
  }).then(res => {
    return success(res)
  }).catch((res) => {
    wxToast('上传文件出错1')
  })
}

export function uploadImg(that, obj, success) {
  const $axios = that.$axios
  queryFile($axios, obj.uploadType, (response) => {
    console.log('queryFile', response)
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'], // 上传时压缩图片，否则可能会闪退
      sourceType: typeof obj.sourceType === 'object' ? obj.sourceType : [obj.sourceType], // 若是数组则使用数组，否则变成数组
      success: (res) => {
        console.log('图片大小：', res.tempFiles[0].size / (1024 * 1024) + 'MB')

        if (res.tempFiles[0].size / (1024 * 1024) > 8) { // 图片小于8M
          wxToast('上传图片应小于8M')
          return false
        }
        that.progress = 0
        const tempFilePaths = res.tempFilePaths
        that.img_url = tempFilePaths[0]
        const tempArr = tempFilePaths[0].split('.')
        const key = response.data.dir + '.' + tempArr[tempArr.length - 1]
        const uploadTask = wx.uploadFile({
          url: response.data.host, // 请求返回的上传图片的地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            name: tempFilePaths[0],
            key: key,
            policy: response.data.policy,
            OSSAccessKeyId: response.data.accessid,
            signature: response.data.signature,
            success_action_status: '200'
          },
          success: (res) => {
            console.log(res)
            if (res.statusCode == 200) {
              // 返回的图片地址加上域名
              return success('http://img.sudichina.com/' + key)
            } else {
              wxToast('上传文件出错')
            }
          },
          fail: (err) => {
            if (err.errMsg.indexOf('uploadFile:fail') !== -1) { // 上传失败
              wxToast('上传失败')
              that.progress = 0
            }
          },
          complete: (res) => {
            // that.actionSheetShow = false;
          }
        })
        uploadTask.onProgressUpdate((res) => {
          if (that.progress !== 100) {
            that.progress = res.progress // 上传进度
          }
        })
      }
    })
  })
}

export default {
  uploadImg
}
