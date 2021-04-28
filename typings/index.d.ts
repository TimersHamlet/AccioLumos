/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo;
    globalHeight?: IGlobalHeight;
  };
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
}

interface IGlobalHeight {
  /** 窗口的高 单位px 类型number*/
  windowHeight: number;
  /** navigationBar的高 单位px 类型number*/
  navigationBarHeight: number;
  /** 屏幕的高 单位px 类型number*/
  screenHeight: number;
  /** 窗口的高 单位rpx 类型number*/
  windowHeightRpx: number;
  /** navigationBar的高 单位rpx 类型number*/
  navigationBarHeightRpx: number;
  /** 屏幕的高 单位rpx 类型number*/
  screenHeightRpx: number;
}
