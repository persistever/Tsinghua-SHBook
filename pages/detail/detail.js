// pages/detail/detail.js
Page({
  data: {
    img_url: [
      '/images/wjf1.jpg',
      '/images/wjf2.jpg',
      '/images/wjf3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    book_name : '微积分',
    book_price : '15.9',
    //书籍信息
    book_info : '微积分是高等数学中研究函数的微分、积分以及有关概念和应用的数学分支。它是数学的一个基础学科。内容主要包括极限、微分学、积分学及其应用。'
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})