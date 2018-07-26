// pages/identify/identify.js
var footer = require("../../utils/util.js");
var page = 1;
var list = [];
var tool = require('../../utils/tool.js');
var util = tool.util,//工具手柄
  getIdentifications = tool.configApi.getIdentifications;  //鉴定 - 获取鉴定列表
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identifications:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array_pl2 = footer.array_pl2
    this.setData({
      array_pl2
    })
  
  },
  // 鉴定 - 获取鉴定列表
  getIdentifications: function (page) {
    var that = this;
    var suCb = function (res) {
      list = list.concat(res.data.content)
      that.setData({
        identifications: list
      })
    //  console.log(that.data.identifications)
    };
    var erCb = function (res) {
      console.log("失败")

    };
    var postData = {
      page: page,
      size: 10
    };
    var palyParam = {
      url: getIdentifications,
      method: "POST",
      data: postData,
      success: suCb,
      error: erCb,
    }
    util.request(palyParam);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  
  },
  onShow:function(){
    this.getIdentifications(1)
  },
  //tab事件调用
  nearby: function () {
    footer.footer.nearby();
  },
  find: function () {
    footer.footer.find();
  },
  index: function () {
    footer.footer.index();
  },
  identify: function () {
    footer.footer.identify();
  },
  mine: function () {
    footer.footer.mine();
  },
  //跳转到鉴别详情页
  _identifyDetail:function(e){
    wx.navigateTo({
      url: '../identifyDetail/identifyDetail?identificationId=' + e.detail,
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    page = page + 1;
    this.getIdentifications(page);
  },

})