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
  onLoad: function () {
    const distance =
      (app.globalData.globalHeight?.navigationBarHeightRpx || 0) / 2;
    this.setData({
      ['addButton.style']: `bottom: ${distance}rpx`
    });
  },

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
   */
  addButtonAni(status: boolean) {
    if (status) {
      const animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-in-out'
      });
      animation.translateY(0).step();
      this.setData({
        ['addButton.animation']: animation
      });
    } else {
      const animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-in-out'
      });
      animation.translateY(-200).step();
      this.setData({
        ['addButton.animation']: animation
      });
    }
  },

  onAddButtonTap() {
    const { addButton } = this.data;
    this.addButtonAni(addButton.status);
    this.setData({
      ['addButton.status']: !addButton.status
    });
  }
});
