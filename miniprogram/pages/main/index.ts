const app = getApp<IAppOption>();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    addButton: {
      animation: {},
      status: false
    },
    inputContainer: {
      style: ''
    },
    topAnimation: {},
    lineAnimation: {},
    inputAnimation: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 控制添加按钮移动的动画方法
   * @param status 按钮当前的状态
   * @param duration 按钮动画时间，单位：毫秒
   */
  addButtonAni(status: boolean, duration: number) {
    if (status) {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.rotate(0).step();
      this.setData({
        ['addButton.animation']: animation
      });
    } else {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.rotate(45).step();
      this.setData({
        ['addButton.animation']: animation
      });
    }
  },

  topAni(status: boolean, duration: number) {
    if (status) {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.translateY(0).step();
      this.setData({
        topAnimation: animation.export()
      });
    } else {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.translateY(-250).step();
      this.setData({
        topAnimation: animation
      });
    }
  },

  lineAni(status: boolean, duration: number) {
    if (status) {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.width(0).step();
      this.setData({
        lineAnimation: animation
      });
    } else {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.width('260rpx').step();
      this.setData({
        lineAnimation: animation
      });
    }
  },

  inputAni(status: boolean, duration: number) {
    if (status) {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.height(0).step().width(0).step();
      this.setData({
        inputAnimation: animation
      });
    } else {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.width('710rpx').step().height('960rpx').step();
      this.setData({
        inputAnimation: animation
      });
    }
  },

  onAddButtonTap() {
    const { addButton } = this.data;
    this.addButtonAni(addButton.status, 400);
    this.topAni(addButton.status, 400);
    this.lineAni(addButton.status, 400);
    this.inputAni(addButton.status, 400);
    this.setData({
      ['addButton.status']: !addButton.status
    });
    this.setData({
      ['inputContainer.style']: addButton.status
        ? 'display:flex'
        : 'display:none'
    });
  }
});
