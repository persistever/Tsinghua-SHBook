//index.js
//获取应用实例
var WxSearch = require('./wxSearch/wxSearch.js')
var app = getApp()
Page({
  data: {
    // wxSearchData:{
    //   view:{
    //     isShow: true
    //   }
    // }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['计算机程序设计基础', '电子电路与系统基础', '微积分', '线性代数']);
    WxSearch.initMindKeys(['计算机程序设计基础', '电子电路与系统基础', '微积分', '线性代数']);
  },
  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);
    this.wxSearchBack(e);
  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSearchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
    this.wxSearchBack(e);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },
  // Modify this function to interact with database
  wxSearchBack: function(e) {
    // do something for searching with searchText and return an arr
    var searchText = this.data.wxSearchData.value
    console.log(searchText)
    var arr = [
        {
          subject: "火力发电厂水资源1",
          coverpath: "../../images/example.jpg",
          price: '¥25',
          message: '火力发电厂水资源教材'
        },
        {
          subject: "火力发电厂水资源2",
          coverpath: "../../images/example.jpg",
          price: '¥25',
          message: '火力发电厂水资源教材'
        },
      ]
    this.setData({
      wxSearchBackData: arr
    });
    
  }
})
