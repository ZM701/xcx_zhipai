// components/identifyDetail/identifyDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ideInfo:{
      type:Object
    },
    content:{
      type:String,
      value:""
    },
    remarkContent:{
      type:Object
    },
    uid: {
      type: Number
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    content:''

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //返回
    _back(){
      this.triggerEvent("back")
    },
    //得到评论文本框的值
    content(e){
      this.setData({
        content:e.detail.value
      })
    },
    //跳转到个人主页
    _personalPage(e) {
      console.log(e)
      this.setData({
        uid: e.currentTarget.dataset.uid
      })
      this.triggerEvent("personalPage", this.data.uid)
    },
    //点击评论
    _remark(){
      this.triggerEvent("remark", this.data.content)
    },
    //点击数量增加
    _nums(e){
      // console.log(e.currentTarget.dataset.name);
      this.triggerEvent("nums", e.currentTarget.dataset.name)
    }

  }
})
