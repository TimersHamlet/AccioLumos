"use strict";
var app = getApp();
Page({
    data: {
        addButtonStyle: ''
    },
    onLoad: function () {
        var _a;
        var distance = (((_a = app.globalData.globalHeight) === null || _a === void 0 ? void 0 : _a.navigationBarHeightRpx) || 0) / 2;
        this.setData({
            addButtonStyle: "bottom: " + distance + "rpx"
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osY0FBYyxFQUFFLEVBQUU7S0FDbkI7SUFLRCxNQUFNLEVBQUU7O1FBQ04sSUFBTSxRQUFRLEdBQ1osQ0FBQyxPQUFBLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSwwQ0FBRSxzQkFBc0IsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGNBQWMsRUFBRSxhQUFXLFFBQVEsUUFBSztTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTyxFQUFFLGNBQWEsQ0FBQztJQUt2QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLE1BQU0sRUFBRSxjQUFhLENBQUM7SUFLdEIsUUFBUSxFQUFFLGNBQWEsQ0FBQztJQUt4QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFLakMsYUFBYSxFQUFFLGNBQWEsQ0FBQztDQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcblxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBhZGRCdXR0b25TdHlsZTogJydcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRpc3RhbmNlID1cbiAgICAgIChhcHAuZ2xvYmFsRGF0YS5nbG9iYWxIZWlnaHQ/Lm5hdmlnYXRpb25CYXJIZWlnaHRScHggfHwgMCkgLyAyO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhZGRCdXR0b25TdHlsZTogYGJvdHRvbTogJHtkaXN0YW5jZX1ycHhgXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9XG59KTtcbiJdfQ==