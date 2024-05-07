// pages/home/home.js

Page({
    data: {
      powerList:[
        {
          backgroundSrc:"http://8.219.238.51/images/powerBC1.png",
          title: "启蒙版",
          tip: "提供启蒙课程学习"
        },
        {
          backgroundSrc:"http://8.219.238.51/images/powerBC2.png",
          title: "基础版",
          tip: "提供基础课程学习"
        },
        {
          backgroundSrc:"http://8.219.238.51/images/powerBC3.png",
          title: "进阶版",
          tip: "提供进阶课程学习"
        }
      ]
    },
    onClick:function(event){
      console.log(event.currentTarget.dataset.index);
      let index = event.currentTarget.dataset.index;
      if(index === 0){
        wx.navigateTo({
          url: '../enlightenment/enlightenment'
        })
      }
      else if(index === 1){
        wx.navigateTo({
          url: '../foundation/foundation'
        })
      }
      else{
        wx.navigateTo({
          url: '../advanced/advanced'
        })
      }
    }
  })
  