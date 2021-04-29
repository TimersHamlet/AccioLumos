"use strict";
var app = getApp();
Page({
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
        inputAnimation: {},
        litteLightAni: {
            blue: {},
            red: {}
        }
    },
    onLoad: function () {
        this.littleLightAniFun();
    },
    littleLightAniFun: function () {
        var _this = this;
        var lightStatus = false;
        setInterval(function () {
            var _a, _b;
            if (lightStatus) {
                var animation = wx.createAnimation({
                    duration: 1100,
                    timingFunction: 'ease-in-out'
                });
                animation.backgroundColor('#ffffff').step();
                _this.setData((_a = {},
                    _a['litteLightAni.red'] = animation,
                    _a['litteLightAni.blue'] = animation,
                    _a));
                lightStatus = !lightStatus;
            }
            else {
                var animationRed = wx.createAnimation({
                    duration: 1100,
                    timingFunction: 'ease-in-out'
                });
                animationRed.backgroundColor('#FF4500').step();
                var animationBlue = wx.createAnimation({
                    duration: 1100,
                    timingFunction: 'ease-in-out'
                });
                animationBlue.backgroundColor('#1E90FF').step();
                _this.setData((_b = {},
                    _b['litteLightAni.red'] = animationRed,
                    _b['litteLightAni.blue'] = animationBlue,
                    _b));
                lightStatus = !lightStatus;
            }
        }, 1200);
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    addButtonAni: function (status, duration) {
        var _a, _b;
        if (status) {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.rotate(0).step();
            this.setData((_a = {},
                _a['addButton.animation'] = animation,
                _a));
        }
        else {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.rotate(45).step();
            this.setData((_b = {},
                _b['addButton.animation'] = animation,
                _b));
        }
    },
    topAni: function (status, duration) {
        if (status) {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.translateY(0).step();
            this.setData({
                topAnimation: animation.export()
            });
        }
        else {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.translateY(-250).step();
            this.setData({
                topAnimation: animation
            });
        }
    },
    lineAni: function (status, duration) {
        if (status) {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.width(0).step();
            this.setData({
                lineAnimation: animation
            });
        }
        else {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.width('260rpx').step();
            this.setData({
                lineAnimation: animation
            });
        }
    },
    inputAni: function (status, duration) {
        if (status) {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.height(0).step().width(0).step();
            this.setData({
                inputAnimation: animation
            });
        }
        else {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.width('710rpx').step().height('960rpx').step();
            this.setData({
                inputAnimation: animation
            });
        }
    },
    onAddButtonTap: function () {
        var _a, _b;
        var addButton = this.data.addButton;
        this.addButtonAni(addButton.status, 400);
        this.topAni(addButton.status, 400);
        this.lineAni(addButton.status, 400);
        this.inputAni(addButton.status, 400);
        this.setData((_a = {},
            _a['addButton.status'] = !addButton.status,
            _a));
        this.setData((_b = {},
            _b['inputContainer.style'] = addButton.status
                ? 'display:flex'
                : 'display:none',
            _b));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFO1lBQ1QsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELFlBQVksRUFBRSxFQUFFO1FBQ2hCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLEVBQUU7U0FDUjtLQUNGO0lBS0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUFqQixpQkFnQ0M7UUEvQkMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQzs7WUFDVixJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUNuQyxRQUFRLEVBQUUsSUFBSTtvQkFDZCxjQUFjLEVBQUUsYUFBYTtpQkFDOUIsQ0FBQyxDQUFDO2dCQUNILFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVDLEtBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsbUJBQW1CLElBQUcsU0FBUztvQkFDaEMsR0FBQyxvQkFBb0IsSUFBRyxTQUFTO3dCQUNqQyxDQUFDO2dCQUNILFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUN0QyxRQUFRLEVBQUUsSUFBSTtvQkFDZCxj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QUFFLFNBQVM7YUFDMUIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsY0FBYzs7UUFDSixJQUFBLFNBQVMsR0FBSyxJQUFJLENBQUMsSUFBSSxVQUFkLENBQWU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxrQkFBa0IsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNO2dCQUN2QyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLHNCQUFzQixJQUFHLFNBQVMsQ0FBQyxNQUFNO2dCQUN4QyxDQUFDLENBQUMsY0FBYztnQkFDaEIsQ0FBQyxDQUFDLGNBQWM7Z0JBQ2xCLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XG5cblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgYWRkQnV0dG9uOiB7XG4gICAgICBhbmltYXRpb246IHt9LFxuICAgICAgc3RhdHVzOiBmYWxzZVxuICAgIH0sXG4gICAgaW5wdXRDb250YWluZXI6IHtcbiAgICAgIHN0eWxlOiAnJ1xuICAgIH0sXG4gICAgdG9wQW5pbWF0aW9uOiB7fSxcbiAgICBsaW5lQW5pbWF0aW9uOiB7fSxcbiAgICBpbnB1dEFuaW1hdGlvbjoge30sXG4gICAgbGl0dGVMaWdodEFuaToge1xuICAgICAgYmx1ZToge30sXG4gICAgICByZWQ6IHt9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5saXR0bGVMaWdodEFuaUZ1bigpO1xuICB9LFxuXG4gIGxpdHRsZUxpZ2h0QW5pRnVuKCkge1xuICAgIGxldCBsaWdodFN0YXR1cyA9IGZhbHNlO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChsaWdodFN0YXR1cykge1xuICAgICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgIGR1cmF0aW9uOiAxMTAwLFxuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICAgIH0pO1xuICAgICAgICBhbmltYXRpb24uYmFja2dyb3VuZENvbG9yKCcjZmZmZmZmJykuc3RlcCgpO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIFsnbGl0dGVMaWdodEFuaS5yZWQnXTogYW5pbWF0aW9uLFxuICAgICAgICAgIFsnbGl0dGVMaWdodEFuaS5ibHVlJ106IGFuaW1hdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgbGlnaHRTdGF0dXMgPSAhbGlnaHRTdGF0dXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhbmltYXRpb25SZWQgPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgIGR1cmF0aW9uOiAxMTAwLFxuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICAgIH0pO1xuICAgICAgICBhbmltYXRpb25SZWQuYmFja2dyb3VuZENvbG9yKCcjRkY0NTAwJykuc3RlcCgpO1xuICAgICAgICBjb25zdCBhbmltYXRpb25CbHVlID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICBkdXJhdGlvbjogMTEwMCxcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgICB9KTtcbiAgICAgICAgYW5pbWF0aW9uQmx1ZS5iYWNrZ3JvdW5kQ29sb3IoJyMxRTkwRkYnKS5zdGVwKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgWydsaXR0ZUxpZ2h0QW5pLnJlZCddOiBhbmltYXRpb25SZWQsXG4gICAgICAgICAgWydsaXR0ZUxpZ2h0QW5pLmJsdWUnXTogYW5pbWF0aW9uQmx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgbGlnaHRTdGF0dXMgPSAhbGlnaHRTdGF0dXM7XG4gICAgICB9XG4gICAgfSwgMTIwMCk7XG4gIH0sXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog5o6n5Yi25re75Yqg5oyJ6ZKu56e75Yqo55qE5Yqo55S75pa55rOVXG4gICAqIEBwYXJhbSBzdGF0dXMg5oyJ6ZKu5b2T5YmN55qE54q25oCBXG4gICAqIEBwYXJhbSBkdXJhdGlvbiDmjInpkq7liqjnlLvml7bpl7TvvIzljZXkvY3vvJrmr6vnp5JcbiAgICovXG4gIGFkZEJ1dHRvbkFuaShzdGF0dXM6IGJvb2xlYW4sIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi5yb3RhdGUoMCkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgWydhZGRCdXR0b24uYW5pbWF0aW9uJ106IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLnJvdGF0ZSg0NSkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgWydhZGRCdXR0b24uYW5pbWF0aW9uJ106IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHRvcEFuaShzdGF0dXM6IGJvb2xlYW4sIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHRvcEFuaW1hdGlvbjogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgtMjUwKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB0b3BBbmltYXRpb246IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGxpbmVBbmkoc3RhdHVzOiBib29sZWFuLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24ud2lkdGgoMCkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGluZUFuaW1hdGlvbjogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24ud2lkdGgoJzI2MHJweCcpLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpbmVBbmltYXRpb246IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGlucHV0QW5pKHN0YXR1czogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlcikge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLmhlaWdodCgwKS5zdGVwKCkud2lkdGgoMCkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5wdXRBbmltYXRpb246IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLndpZHRoKCc3MTBycHgnKS5zdGVwKCkuaGVpZ2h0KCc5NjBycHgnKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnB1dEFuaW1hdGlvbjogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgb25BZGRCdXR0b25UYXAoKSB7XG4gICAgY29uc3QgeyBhZGRCdXR0b24gfSA9IHRoaXMuZGF0YTtcbiAgICB0aGlzLmFkZEJ1dHRvbkFuaShhZGRCdXR0b24uc3RhdHVzLCA0MDApO1xuICAgIHRoaXMudG9wQW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XG4gICAgdGhpcy5saW5lQW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XG4gICAgdGhpcy5pbnB1dEFuaShhZGRCdXR0b24uc3RhdHVzLCA0MDApO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2FkZEJ1dHRvbi5zdGF0dXMnXTogIWFkZEJ1dHRvbi5zdGF0dXNcbiAgICB9KTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydpbnB1dENvbnRhaW5lci5zdHlsZSddOiBhZGRCdXR0b24uc3RhdHVzXG4gICAgICAgID8gJ2Rpc3BsYXk6ZmxleCdcbiAgICAgICAgOiAnZGlzcGxheTpub25lJ1xuICAgIH0pO1xuICB9XG59KTtcbiJdfQ==