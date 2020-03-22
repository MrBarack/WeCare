// pages/my/myinfo.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  onFirstItemClick: function (options){
    wx.navigateTo({
      url: '../../pages/firstArticle/firstArticle',
    })
  },

  onSecondItemClick: function (options){
    wx.navigateTo({
      url: '../../pages/secondArticle/secondArticle',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})