// pages/setUp/setUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  //跳转到个人信息
  personalInfo:function(){
    wx.navigateTo({
      url: '../personalInfo/personalInfo',
    })
  },
  //跳转到关于我们
  aboutUs:function(){
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  },
  //跳转到积分规则
  integral:function(){
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  //跳转到共建植物图库
  gallery:function(){
    wx.navigateTo({
      url: '../gallery/gallery',
    })
  }
})