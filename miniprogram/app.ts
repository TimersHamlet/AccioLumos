// app.ts

App<IAppOption>({
  globalData: {
    globalHeight: {
      screenHeight: 0,
      windowHeight: 0,
      navigationBarHeight: 0,
      windowHeightRpx: 0,
      navigationBarHeightRpx: 0,
      screenHeightRpx: 0
    }
  },

  onLaunch() {
    // 这里获得要用到的高度
    const scrHeight = wx.getSystemInfoSync().screenHeight;
    const winHeight = wx.getSystemInfoSync().windowHeight;
    const navHeight = scrHeight - winHeight;
    // 这里计算rpx
    const scrWidth = wx.getSystemInfoSync().screenWidth;
    const rpxRate = 750 / scrWidth;
    const heightObject = {
      screenHeight: scrHeight,
      windowHeight: winHeight,
      navigationBarHeight: navHeight,
      windowHeightRpx: winHeight * rpxRate,
      navigationBarHeightRpx: navHeight * rpxRate,
      screenHeightRpx: scrHeight * rpxRate
    };
    this.globalData.globalHeight = heightObject;
    console.log('=====================>', this.globalData.globalHeight);

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  }
});
