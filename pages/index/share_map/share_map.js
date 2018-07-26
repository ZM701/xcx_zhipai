var tool = require('../../../utils/tool.js');
var util = tool.util; //工具手柄
var code = tool.configApi.getCode; //获取店铺详情
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["../../../images/share/mode1.jpg", "../../../images/share/mode2.jpg", "../../../images/share/mode3.jpg"],
    mapBg: { //背景图片信息
      url: "/images/share/modebg1.png",
      x_axis: 0,
      y_axis: 0,
      width: 375,
      height: 589,
    },
    map: { //图片信息(img,sx,sy,swidth,sheight,x,y,width,height)
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531377914445&di=ac2a34702d7ea9061dc91d807c741436&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd833c895d143ad4b20ca82d188025aafa40f063f.jpg",
      x_axis: 10,
      y_axis: 10,
      width: 355,
      height: 570,
    },
    headerMap: { //头像信息
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531393175141&di=f412feae4890e261697084ce3cd85fcf&imgtype=0&src=http%3A%2F%2Fwww.ghost64.com%2Fqqtupian%2FqqTxImg%2F2013%2F12%2Fka_3%2F01-082929_571.jpg",
      x_axis: 120,
      y_axis: 510,
      width: 40,
      height: 40,
    },
    QRcode: { //二维码
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531452388413&di=31f0917f53bb1255e0316261686e6669&imgtype=0&src=http%3A%2F%2Fimg.atobo.com%2FProductImg%2FEWM%2FUWeb%2F4%2F1%2F0%2F0%2F6123%2F41006123%2F1.gif",
      x_axis: 5,
      y_axis: 600,
      width: 50,
      height: 50,
    },
    authorInfo: { //用户名
      name: "by-- 胡诗伟",
      x_axis: 177,
      y_axis: 535,
      size: 12,
      color: "rgba(0,0,0,.8)",
    },
    hint: { //长按二维码提示
      text: "长按识别二维码/查看更多植物故事",
      x_axis: 55,
      y_axis: 630,
      size: 12,
      color: "rgba(0,0,0,.8)",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.getCode()
    console.log(options)
    // this.data.map.url = options.mapurl
    this.setData({
      map: { 
        url:options.mapUrl,
        x_axis: 10,
        y_axis: 10,
        width: 355,
        height: 570,
      },
    })
    this.getUserInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.drawMap()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 绘制海报
  drawMap: function() {
    var that = this;
    // ----------定义canvas 画布----------
    const ctx = wx.createCanvasContext('share-map');
    ctx.save();
    // // ----------绘制画布的展示图片----------
    var map_width = that.data.map.width,
      map_height = that.data.map.height,
      map_bg = that.data.map.url,
      map_x_axis = that.data.map.x_axis,
      map_y_axis = that.data.map.y_axis;
    ctx.drawImage(map_bg, map_x_axis, map_y_axis, map_width, map_height, 0, 0,370, 580);
    // ---------- 绘制画布背景----------
    var mapBg_width = that.data.mapBg.width,
      mapBg_height = that.data.mapBg.height,
      mapBg_bg = that.data.mapBg.url,
      mapBg_x_axis = that.data.mapBg.x_axis,
      mapBg_y_axis = that.data.mapBg.y_axis;

    ctx.drawImage(mapBg_bg, mapBg_x_axis, mapBg_y_axis, mapBg_width, mapBg_height);
    // ---------- 绘制画布的用户名----------
    var authorInfo_name = that.data.authorInfo.name,
      authorInfo_x_axis = that.data.authorInfo.x_axis,
      authorInfo_y_axis = that.data.authorInfo.y_axis,
      authorInfo_size = that.data.authorInfo.size,
      authorInfo_color = that.data.authorInfo.color;
    ctx.setFillStyle(authorInfo_color) //文字颜色
    ctx.setFontSize(authorInfo_size) //设置字体大小，
    ctx.fillText(authorInfo_name, authorInfo_x_axis, authorInfo_y_axis)
    // ---------- 绘制画布二维码旁边提示文字----------
    var hint_text = that.data.hint.text,
      hint_x_axis = that.data.hint.x_axis,
      hint_y_axis = that.data.hint.y_axis,
      hint_size = that.data.hint.size,
      hint_color = that.data.hint.color;
    ctx.setFillStyle(hint_color) //文字颜色
    ctx.setFontSize(hint_size) //设置字体大小，
    ctx.fillText(hint_text, hint_x_axis, hint_y_axis)
    // ---------- 绘制画分享二维码----------
    var code_width = that.data.QRcode.width,
      code_height = that.data.QRcode.height,
      code_bg = that.data.QRcode.url,
      code_x_axis = that.data.QRcode.x_axis,
      code_y_axis = that.data.QRcode.y_axis;
    ctx.drawImage(code_bg, code_x_axis, code_y_axis, code_width, code_height);
    // ---------- 绘制画布的用户头像----------
    var headerMap_width = that.data.headerMap.width,
      headerMap_width = that.data.headerMap.height,
      headerMap_bg = that.data.headerMap.url,
      headerMap_x_axis = that.data.headerMap.x_axis,
      headerMap_y_axis = that.data.headerMap.y_axis;
    //画圆
    ctx.arc(headerMap_x_axis + (headerMap_width / 2), headerMap_y_axis + (headerMap_width / 2), headerMap_width / 2, 0, 2 * Math.PI, true);
    //从画布上裁剪出这个圆形
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(headerMap_bg, headerMap_x_axis, headerMap_y_axis, headerMap_width, headerMap_width);
    // ---------- 绘制画布----------
    ctx.draw()
  },
  //点击保存图片
  saveMap: function() {
    wx.canvasToTempFilePath({
      canvasId: 'share-map',
      fileType: 'jpg',
      success: function(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.hideLoading();
            wx.showToast({
              title: '保存成功',
            });
          },
          fail() {
            wx.hideLoading()
          }
        })
      }
    })
  },
  //暂存用户头像
  getUserInfo: function() {
    var value = wx.getStorageSync('userInfo');
    console.log(value)
    this.setData({
      headerMap: { //头像信息
        url: value.avatarUrl,
        x_axis: 120,
        y_axis: 510,
        width: 40,
        height: 40,
      },
    })
  },
  //请求二维码图片
  getCode: function() {
    var that = this;
    var cbOk = function(res) {
      console.log("分享二维码图片", res)
      // that.setData({
      //   recommondGoods: res.data.data
      // })
    };
    var cbErr = function(res) {
      wx.showToast({
        title: '获取二维码失败',
        icon: 'none',
        duration: 4000
      });
    };
    var param = {
      url: code,
      method: "POST",
      data: {
        width: "10",
        height: "10"
      },
      success: cbOk,
      error: cbErr,
    };
    util.request(param);
  }
})