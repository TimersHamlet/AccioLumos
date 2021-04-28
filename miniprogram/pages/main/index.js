"use strict";
var app = getApp();
Page({
    data: {
        addButton: {
            style: '',
            animation: {},
            status: false
        }
    },
    onLoad: function () {
        var _a;
        var _b;
        var distance = (((_b = app.globalData.globalHeight) === null || _b === void 0 ? void 0 : _b.navigationBarHeightRpx) || 0) / 2;
        this.setData((_a = {},
            _a['addButton.style'] = "bottom: " + distance + "rpx",
            _a));
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    addButtonAni: function (status) {
        var _a, _b;
        if (status) {
            var animation = wx.createAnimation({
                duration: 500,
                timingFunction: 'ease-in-out'
            });
            animation.translateY(0).step();
            this.setData((_a = {},
                _a['addButton.animation'] = animation,
                _a));
        }
        else {
            var animation = wx.createAnimation({
                duration: 500,
                timingFunction: 'ease-in-out'
            });
            animation.translateY(-200).step();
            this.setData((_b = {},
                _b['addButton.animation'] = animation,
                _b));
        }
    },
    onAddButtonTap: function () {
        var _a;
        var addButton = this.data.addButton;
        this.addButtonAni(addButton.status);
        this.setData((_a = {},
            _a['addButton.status'] = !addButton.status,
            _a));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxTQUFTLEVBQUUsRUFBRTtZQUNiLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7S0FDRjtJQUtELE1BQU0sRUFBRTs7O1FBQ04sSUFBTSxRQUFRLEdBQ1osQ0FBQyxPQUFBLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSwwQ0FBRSxzQkFBc0IsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGlCQUFpQixJQUFHLGFBQVcsUUFBUSxRQUFLO2dCQUM3QyxDQUFDO0lBQ0wsQ0FBQztJQUtELE9BQU8sRUFBRSxjQUFhLENBQUM7SUFLdkIsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUt0QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLFFBQVEsRUFBRSxjQUFhLENBQUM7SUFLeEIsaUJBQWlCLEVBQUUsY0FBYSxDQUFDO0lBS2pDLGFBQWEsRUFBRSxjQUFhLENBQUM7SUFNN0IsWUFBWSxFQUFaLFVBQWEsTUFBZTs7UUFDMUIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNuQyxRQUFRLEVBQUUsR0FBRztnQkFDYixjQUFjLEVBQUUsYUFBYTthQUM5QixDQUFDLENBQUM7WUFDSCxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMscUJBQXFCLElBQUcsU0FBUztvQkFDbEMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNuQyxRQUFRLEVBQUUsR0FBRztnQkFDYixjQUFjLEVBQUUsYUFBYTthQUM5QixDQUFDLENBQUM7WUFDSCxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxxQkFBcUIsSUFBRyxTQUFTO29CQUNsQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsY0FBYzs7UUFDSixJQUFBLFNBQVMsR0FBSyxJQUFJLENBQUMsSUFBSSxVQUFkLENBQWU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGtCQUFrQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ3ZDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XG5cblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgYWRkQnV0dG9uOiB7XG4gICAgICBzdHlsZTogJycsXG4gICAgICBhbmltYXRpb246IHt9LFxuICAgICAgc3RhdHVzOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRpc3RhbmNlID1cbiAgICAgIChhcHAuZ2xvYmFsRGF0YS5nbG9iYWxIZWlnaHQ/Lm5hdmlnYXRpb25CYXJIZWlnaHRScHggfHwgMCkgLyAyO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2FkZEJ1dHRvbi5zdHlsZSddOiBgYm90dG9tOiAke2Rpc3RhbmNlfXJweGBcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOaOp+WItua3u+WKoOaMiemSruenu+WKqOeahOWKqOeUu+aWueazlVxuICAgKiBAcGFyYW0gc3RhdHVzIOaMiemSruW9k+WJjeeahOeKtuaAgVxuICAgKi9cbiAgYWRkQnV0dG9uQW5pKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFsnYWRkQnV0dG9uLmFuaW1hdGlvbiddOiBhbmltYXRpb25cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgtMjAwKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbJ2FkZEJ1dHRvbi5hbmltYXRpb24nXTogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgb25BZGRCdXR0b25UYXAoKSB7XG4gICAgY29uc3QgeyBhZGRCdXR0b24gfSA9IHRoaXMuZGF0YTtcbiAgICB0aGlzLmFkZEJ1dHRvbkFuaShhZGRCdXR0b24uc3RhdHVzKTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydhZGRCdXR0b24uc3RhdHVzJ106ICFhZGRCdXR0b24uc3RhdHVzXG4gICAgfSk7XG4gIH1cbn0pO1xuIl19