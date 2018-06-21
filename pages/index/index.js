//index.js
//获取应用实例
const recorderManager = wx.getRecorderManager()

recorderManager.onStop((res) => {
  const { tempFilePath } = res
  wx.uploadFile({
    url: 'http://29089c45.ngrok.io/audio',
    filePath: tempFilePath,
    name: 'audio',
    success: function (res) {
      var data = res.data
      console.log(res)
    },
    fail: function (err) {
      console.log(err)
    }
  })
})

Page({
  data: {
  },
  start_say () {
    recorderManager.start()
  },
  start_end () {
    recorderManager.stop()
  },
  onLoad: function () {
   
  }
})
