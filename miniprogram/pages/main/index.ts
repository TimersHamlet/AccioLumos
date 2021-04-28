const app = getApp<IAppOption>();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    addButton: {
      style: '',
      animation: {},
      status: false
    }
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
      animation.translateY(0).rotate(0).step();
      this.setData({
        ['addButton.animation']: animation
      });
    } else {
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease-in-out'
      });
      animation.translateY(-250).rotate(45).step();
      this.setData({
        ['addButton.animation']: animation
      });
    }
  },

  onAddButtonTap() {
    const { addButton } = this.data;
    this.addButtonAni(addButton.status, 400);
    this.setData({
      ['addButton.status']: !addButton.status
    });
  }
});
