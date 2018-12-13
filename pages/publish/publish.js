// pages/publish/publish.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    netTestValue: "后台访问失败",
    courseName: "课程名",
    price: "价格",
    subject: "资料名",
    bookToastHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.request({
      url: 'http://localhost:80/TsinghuaSHB/data.php',
      data: {
        key1: 10,
        key2: 'helloworld'
      },
      success: function (res) {
        console.log("success")
        console.log(res.data)
        console.log(res.statusCode)
        that.setData({
          netTestValue: res.data['key1']
        })

      },
      fail: function () {
        console.log("fail")
      },
      complete: function () {
        console.log("complete")
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  wxToUploadPhoto: function () {
    var that = this
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://localhost:80/TsinghuaSHB/uploadphoto.php',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            email: 'test@mails.tsinghua.edu.cn',
            courseName: that.data.courseName,
            price: that.data.price,
            subject: that.data.subject,
          },
          success(res) {
            console.log("it's good!")
            const data = res.data
            console.log(data)
            that.setData({
              netTestValue: "上传成功!"
            })
            wx.reLaunch({
              url: '../index/index'
            })
          }
        })
      }
    })
  },
  wxGetName: function (e) {
    this.setData({
      subject: e.detail.value
    })
  },
  wxGetCourseName: function (e) {
    this.setData({
      courseName: e.detail.value
    })
  },

  wxGetPrice: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  // Modify this function to update data to database
  bindToastTap: function () {
    console.log('发布成功')
    this.setData({
      // show the success icon 
      bookToastHidden: false
    })
  },
  hideToast: function () {
    this.setData({
      // hide the success icon
      bookToastHidden: true
    })
  }
})