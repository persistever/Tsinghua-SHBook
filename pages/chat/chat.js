// pages/index/to_news/to_news.js
//reference:
//https://blog.csdn.net/qq_35713752/article/details/78688311
var app = getApp();
var util = require('../../utils/util.js');
var message = '';
var text = '';
var user = {};
var length;
var zx_info_id;
var openid_talk;
Page({
  data: {
    news: '',
    scrollTop: 0,
    message: '',
    text: text,
    centendata: '',
    nickName: '',
    avatarUrl: '',
    news_input_val: '',
    tabdata: '',
    bookname: '微积分（上）',
    bookprice: '15.9',
    bookstatus: '在售',
    date_time: '',
    my_message: '哈哈哈哈哈哈'
  },
  bindChange: function (e) {
    message = e.detail.value
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      date_time: time
    });
  },
  ToBook: function () {
    wx.navigateTo({
      url: '/pages/detail/detail'
    });
  }

})




