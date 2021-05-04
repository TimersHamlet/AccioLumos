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
        },
        items: [
            { value: 'USA', name: '收入', color: '#1E90FF' },
            { value: 'CHN', name: '支出', checked: 'true', color: '#FF4500' }
        ]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFO1lBQ1QsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELFlBQVksRUFBRSxFQUFFO1FBQ2hCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLEVBQUU7U0FDUjtRQUNELEtBQUssRUFBRTtZQUNMLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDOUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1NBQ2hFO0tBQ0Y7SUFLRCxNQUFNLEVBQUU7UUFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUJBQWlCO1FBQWpCLGlCQWdDQztRQS9CQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBVyxDQUFDOztZQUNWLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQ25DLFFBQVEsRUFBRSxJQUFJO29CQUNkLGNBQWMsRUFBRSxhQUFhO2lCQUM5QixDQUFDLENBQUM7Z0JBQ0gsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUMsS0FBSSxDQUFDLE9BQU87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LEVBQUUsUUFBUTtnQkFDbEIsY0FBYyxFQUFFLGFBQWE7YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxjQUFjLEVBQUUsU0FBUzthQUMxQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxjQUFjOztRQUNKLElBQUEsU0FBUyxHQUFLLElBQUksQ0FBQyxJQUFJLFVBQWQsQ0FBZTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGtCQUFrQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ3ZDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsc0JBQXNCLElBQUcsU0FBUyxDQUFDLE1BQU07Z0JBQ3hDLENBQUMsQ0FBQyxjQUFjO2dCQUNoQixDQUFDLENBQUMsY0FBYztnQkFDbEIsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuXHJcblBhZ2Uoe1xyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGFkZEJ1dHRvbjoge1xyXG4gICAgICBhbmltYXRpb246IHt9LFxyXG4gICAgICBzdGF0dXM6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaW5wdXRDb250YWluZXI6IHtcclxuICAgICAgc3R5bGU6ICcnXHJcbiAgICB9LFxyXG4gICAgdG9wQW5pbWF0aW9uOiB7fSxcclxuICAgIGxpbmVBbmltYXRpb246IHt9LFxyXG4gICAgaW5wdXRBbmltYXRpb246IHt9LFxyXG4gICAgbGl0dGVMaWdodEFuaToge1xyXG4gICAgICBibHVlOiB7fSxcclxuICAgICAgcmVkOiB7fVxyXG4gICAgfSxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdmFsdWU6ICdVU0EnLCBuYW1lOiAn5pS25YWlJywgY29sb3I6ICcjMUU5MEZGJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnQ0hOJywgbmFtZTogJ+aUr+WHuicsIGNoZWNrZWQ6ICd0cnVlJywgY29sb3I6ICcjRkY0NTAwJyB9XHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubGl0dGxlTGlnaHRBbmlGdW4oKTtcclxuICB9LFxyXG5cclxuICBsaXR0bGVMaWdodEFuaUZ1bigpIHtcclxuICAgIGxldCBsaWdodFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAobGlnaHRTdGF0dXMpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgZHVyYXRpb246IDExMDAsXHJcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFuaW1hdGlvbi5iYWNrZ3JvdW5kQ29sb3IoJyNmZmZmZmYnKS5zdGVwKCk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFsnbGl0dGVMaWdodEFuaS5yZWQnXTogYW5pbWF0aW9uLFxyXG4gICAgICAgICAgWydsaXR0ZUxpZ2h0QW5pLmJsdWUnXTogYW5pbWF0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGlnaHRTdGF0dXMgPSAhbGlnaHRTdGF0dXM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uUmVkID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgIGR1cmF0aW9uOiAxMTAwLFxyXG4gICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbmltYXRpb25SZWQuYmFja2dyb3VuZENvbG9yKCcjRkY0NTAwJykuc3RlcCgpO1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkJsdWUgPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgZHVyYXRpb246IDExMDAsXHJcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFuaW1hdGlvbkJsdWUuYmFja2dyb3VuZENvbG9yKCcjMUU5MEZGJykuc3RlcCgpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbJ2xpdHRlTGlnaHRBbmkucmVkJ106IGFuaW1hdGlvblJlZCxcclxuICAgICAgICAgIFsnbGl0dGVMaWdodEFuaS5ibHVlJ106IGFuaW1hdGlvbkJsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBsaWdodFN0YXR1cyA9ICFsaWdodFN0YXR1cztcclxuICAgICAgfVxyXG4gICAgfSwgMTIwMCk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog5o6n5Yi25re75Yqg5oyJ6ZKu56e75Yqo55qE5Yqo55S75pa55rOVXHJcbiAgICogQHBhcmFtIHN0YXR1cyDmjInpkq7lvZPliY3nmoTnirbmgIFcclxuICAgKiBAcGFyYW0gZHVyYXRpb24g5oyJ6ZKu5Yqo55S75pe26Ze077yM5Y2V5L2N77ya5q+r56eSXHJcbiAgICovXHJcbiAgYWRkQnV0dG9uQW5pKHN0YXR1czogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlcikge1xyXG4gICAgaWYgKHN0YXR1cykge1xyXG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xyXG4gICAgICB9KTtcclxuICAgICAgYW5pbWF0aW9uLnJvdGF0ZSgwKS5zdGVwKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgWydhZGRCdXR0b24uYW5pbWF0aW9uJ106IGFuaW1hdGlvblxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbmltYXRpb24ucm90YXRlKDQ1KS5zdGVwKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgWydhZGRCdXR0b24uYW5pbWF0aW9uJ106IGFuaW1hdGlvblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0b3BBbmkoc3RhdHVzOiBib29sZWFuLCBkdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdG9wQW5pbWF0aW9uOiBhbmltYXRpb24uZXhwb3J0KClcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xyXG4gICAgICB9KTtcclxuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoLTI1MCkuc3RlcCgpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRvcEFuaW1hdGlvbjogYW5pbWF0aW9uXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxpbmVBbmkoc3RhdHVzOiBib29sZWFuLCBkdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbmltYXRpb24ud2lkdGgoMCkuc3RlcCgpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxpbmVBbmltYXRpb246IGFuaW1hdGlvblxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbmltYXRpb24ud2lkdGgoJzI2MHJweCcpLnN0ZXAoKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsaW5lQW5pbWF0aW9uOiBhbmltYXRpb25cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5wdXRBbmkoc3RhdHVzOiBib29sZWFuLCBkdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbmltYXRpb24uaGVpZ2h0KDApLnN0ZXAoKS53aWR0aCgwKS5zdGVwKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW5wdXRBbmltYXRpb246IGFuaW1hdGlvblxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbmltYXRpb24ud2lkdGgoJzcxMHJweCcpLnN0ZXAoKS5oZWlnaHQoJzk2MHJweCcpLnN0ZXAoKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbnB1dEFuaW1hdGlvbjogYW5pbWF0aW9uXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uQWRkQnV0dG9uVGFwKCkge1xyXG4gICAgY29uc3QgeyBhZGRCdXR0b24gfSA9IHRoaXMuZGF0YTtcclxuICAgIHRoaXMuYWRkQnV0dG9uQW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XHJcbiAgICB0aGlzLnRvcEFuaShhZGRCdXR0b24uc3RhdHVzLCA0MDApO1xyXG4gICAgdGhpcy5saW5lQW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XHJcbiAgICB0aGlzLmlucHV0QW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbJ2FkZEJ1dHRvbi5zdGF0dXMnXTogIWFkZEJ1dHRvbi5zdGF0dXNcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgWydpbnB1dENvbnRhaW5lci5zdHlsZSddOiBhZGRCdXR0b24uc3RhdHVzXHJcbiAgICAgICAgPyAnZGlzcGxheTpmbGV4J1xyXG4gICAgICAgIDogJ2Rpc3BsYXk6bm9uZSdcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==