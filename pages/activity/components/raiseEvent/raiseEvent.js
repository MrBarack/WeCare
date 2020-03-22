// pages/activity/components/raiseEvent/raiseEvent.js
Page({

  /**
   * Page initial data
   */
  data: {
    raiseTypes: {
      items: [
        { name: 'withCS', value: 'Raise event with CS', checked: 'true' },
        { name: 'withoutCS', value: 'Raise event without CS' },
      ]
    },
    eventTags: {
      items: [
        { name: 'volunteer', value: 'Volunteer' },
        { name: 'collectFund', value: 'Collect Funding' },
        { name: 'others', value: 'Others' },
      ]
    }
  },

  radioChange: function (e) {
    console.log('radio changed，value is：', e.detail.value)
  },

  checkboxChange: function (e) {
    console.log('checkbox change, value is: ', e.detail.value)
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