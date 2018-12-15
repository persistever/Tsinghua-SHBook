// pages/publish/publish.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    netTestValue: "后台访问失败",
    itemID: null,
    itemCourseName: "",
    itemName: "",
    itemPrice: "",
    itemShortInfo: "",
    itemSubjectList: ["理科", "工科", "文科", "其它"],
    itemSubject: 0,
    itemSortArray: [["课程资料", "非课程资料"], ["课本","讲义","作业","参考书","其他"]],
    itemSort: [0, 0],
    itemInfo: "",
    itemPublisher: "",
    itemPublishVersion: "",
    itemCourseNO: "",
    itemCourseTeacher: "",
    itemPicturePath: [],
    bookToastHidden:true,
    useServer: app.globalData.useServer,
    serverURL: app.globalData.serverURL,
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
      url: that.data.serverURL + 'data.php',
      data: {
        netTestValue: '后台访问失败',
      },
      success: function (res) {
        // console.log("success")
        //console.log(res.data)
        // console.log(res.statusCode)
        that.setData({
          netTestValue: res.data['netTestValue']
        })

      },
      fail: function () {
        console.log("fail")
      },
      complete: function () {
        //console.log("complete")
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
      count: 3 - that.data.itemPicturePath.length,
      sizeType: ['compressed'], //目前先只支持缩略图，'original'原图上传下载都比较慢
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        // that.setData({
        //   itemPicturePath: images.length <= 3 ? images : images.slice(0, 3)
        // });
        for (let i = 0; i < tempFilePaths.length; i++) {
          wx.saveFile({
            tempFilePath: tempFilePaths[i],
            success(res1) {
              const savedFilePath = res1.savedFilePath
              that.setData({
                itemPicturePath: that.data.itemPicturePath.concat(savedFilePath)
              })
              console.log('图片保存的地址')
              console.log(that.data.itemPicturePath[i])
            }
          })
        }
      }
    })
  },
  wxGetItemName: function (e) {
    this.setData({
      itemName: e.detail.value
    })
  },

  wxGetItemPrice: function (e) {
    if (e.detail.value > 1000){
      e.detail.value = 1000
    }
    this.setData({
      itemPrice: e.detail.value
    })
  },

  wxGetItemShortInfo(e) {
    this.setData({ itemShortInfo: e.detail.value });
  },

  wxGetItemSubject(e) {
    this.setData({ 
      itemSubject: e.detail.value 
      });
  },

  // process the column change (课程资料/非课程资料)
  wxGetItemSortColumnChange: function (e) {
    var data = {
      itemSortArray: this.data.itemSortArray,
      itemSort: this.data.itemSort
    };
    data.itemSort[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.itemSort[0]) {
          // dynamically change the second column when the first column change
          case 0:
            //课程资料
            data.itemSortArray[1] = ["课本", "讲义", "作业", "参考书", "其他"];
            break;
          case 1:
            //非课程资料
            data.itemSortArray[1] = ["科技", "艺术", "人文社科", "经济金融", "其他"];
            break;
        }
        data.itemSort[1] = 0;
        break;
      case 1:
        break;
    }
    this.setData(data);
  },

  wxGetItemSort: function (e) {
    this.setData({
      itemSort: e.detail.value
    })
    console.log(this.data.itemSort)
  },

  wxGetItemInfo: function (e) {
    this.setData({
      itemInfo: e.detail.value
    })
  },

  wxGetItemPublisher: function (e) {
    this.setData({
      itemPublisher: e.detail.value
    })
  },

  wxGetItemPublishVersion: function (e) {
    this.setData({
      itemPublishVersion: e.detail.value
    })
  },


  wxGetItemCourseName: function (e) {
    this.setData({
      itemCourseName: e.detail.value
    })
  },

  wxGetItemCourseNO: function (e) {
    this.setData({
      itemCourseNO: e.detail.value
    })
  },

  wxGetItemCourseTeacher: function (e) {
    this.setData({
      itemCourseTeacher: e.detail.value
    })
  },

  removeImage(e) {
    const idx = e.target.dataset.idx
    var newItemPicturePath = this.data.itemPicturePath
    wx.removeSavedFile({  //之前把图片保存到缓存中了，删除缩略图的时候需要删除对应的图
      filePath: this.data.itemPicturePath[idx],
      success(res) {
        console.log('[publish.js][删除已缓存图片] success')
        console.log(res)
      }
    })
    newItemPicturePath.splice(idx, 1)
    this.setData({
      itemPicturePath: newItemPicturePath
      })
    console.log(this.data.itemPicturePath)
  },

  handleImagePreview(e) {
    //delete this function if cannot return
    const idx = e.target.dataset.idx
    const images = this.data.itemPicturePath
    console.log(images)
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },

  // Modify this function to update data to database
  bindPublish: function () {
    var that = this
    console.log('发布成功')
    wx.request({
      url: that.data.serverURL + 'publish.php',
      data: {
        itemName: that.data.itemName,
        itemPrice: that.data.itemPrice,
        itemShortInfo: that.data.itemShortInfo,
        itemSubject: that.data.itemSubject,
        itemSortIsClass: that.data.itemSort[0],  //新增一个类型用来表示是否是课程类的物品，方便后台存储和交互
        itemSort: that.data.itemSort[1],
        itemInfo: that.data.itemInfo,
        itemPublisher: that.data.itemPublisher,
        itemPublishVersion: that.data.itemPublishVersion,
        itemCourseName: that.data.itemCourseName,
        itemCourseNO: that.data.itemCourseNO,
        itemCourseTeacher: that.data.itemCourseTeacher,
        itemUserID: app.globalData.userID
      },
      success: function (res) {
        console.log('[publish.js][发布文本数据上传数据库] request success')
        console.log(that.data)
        console.log(res)
        that.setData({
          itemID: res.data['itemID']
          
        })
        for (let i = 0; i < that.data.itemPicturePath.length; i++) {
          wx.uploadFile({
            url: that.data.serverURL + 'uploadPictures.php',
            filePath: that.data.itemPicturePath[i],
            name: 'file',
            formData: {
              itemPictureNO: that.data.itemPicturePath.length,
              num: i + 1,
              itemID: that.data.itemID,
              itemUserID: app.globalData.userID,
              useServer: that.data.useServer
            },
            success(res) {
              console.log('[test.js][上传照片] success')
              console.log(res)
            },
            fail() {
              console.log('[test.js][上传照片] failed')
            },
            complete(){
            }
          })
        }    
      },
      fail: function () {
        console.log("[publish.js][发布文本数据上传数据库] fail")
      },
      complete: function () {
        //console.log("[publish.js][发布文本数据上传数据库] complete")
        for (let i = 0; i < that.data.itemPicturePath.length; i++) {
          wx.removeSavedFile({  //之前把图片保存到缓存中了，删除缩略图的时候需要删除对应的图
            filePath: that.data.itemPicturePath[i],
            success(res) {
              console.log('[publish.js][删除已缓存图片] success')
              console.log(res)
            }
          })
        }
        that.setData({
          itemPicturePath: [],//认为图片上传成功就算发布成功了，隐去Toast的阴影
          bookToastHidden: false// show the success icon 
        })
      }
    })
    
    //wx.reLaunch({
    //  url: '../index/index'
    //})
  },
  hideToast: function () {
    this.setData({
      // hide the success icon
      bookToastHidden: true,
    })
    wx.reLaunch({
      url: '../index/index'
    })
  }
})