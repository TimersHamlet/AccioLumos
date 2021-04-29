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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFO1lBQ1QsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELFlBQVksRUFBRSxFQUFFO1FBQ2hCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLEVBQUU7U0FDUjtRQUNELEtBQUssRUFBRTtZQUNMLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDOUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1NBQ2hFO0tBQ0Y7SUFLRCxNQUFNLEVBQUU7UUFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUJBQWlCO1FBQWpCLGlCQWdDQztRQS9CQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBVyxDQUFDOztZQUNWLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQ25DLFFBQVEsRUFBRSxJQUFJO29CQUNkLGNBQWMsRUFBRSxhQUFhO2lCQUM5QixDQUFDLENBQUM7Z0JBQ0gsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUMsS0FBSSxDQUFDLE9BQU87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LEVBQUUsUUFBUTtnQkFDbEIsY0FBYyxFQUFFLGFBQWE7YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxjQUFjLEVBQUUsU0FBUzthQUMxQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxjQUFjOztRQUNKLElBQUEsU0FBUyxHQUFLLElBQUksQ0FBQyxJQUFJLFVBQWQsQ0FBZTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGtCQUFrQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ3ZDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsc0JBQXNCLElBQUcsU0FBUyxDQUFDLE1BQU07Z0JBQ3hDLENBQUMsQ0FBQyxjQUFjO2dCQUNoQixDQUFDLENBQUMsY0FBYztnQkFDbEIsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcblxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBhZGRCdXR0b246IHtcbiAgICAgIGFuaW1hdGlvbjoge30sXG4gICAgICBzdGF0dXM6IGZhbHNlXG4gICAgfSxcbiAgICBpbnB1dENvbnRhaW5lcjoge1xuICAgICAgc3R5bGU6ICcnXG4gICAgfSxcbiAgICB0b3BBbmltYXRpb246IHt9LFxuICAgIGxpbmVBbmltYXRpb246IHt9LFxuICAgIGlucHV0QW5pbWF0aW9uOiB7fSxcbiAgICBsaXR0ZUxpZ2h0QW5pOiB7XG4gICAgICBibHVlOiB7fSxcbiAgICAgIHJlZDoge31cbiAgICB9LFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHZhbHVlOiAnVVNBJywgbmFtZTogJ+aUtuWFpScsIGNvbG9yOiAnIzFFOTBGRicgfSxcbiAgICAgIHsgdmFsdWU6ICdDSE4nLCBuYW1lOiAn5pSv5Ye6JywgY2hlY2tlZDogJ3RydWUnLCBjb2xvcjogJyNGRjQ1MDAnIH1cbiAgICBdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxpdHRsZUxpZ2h0QW5pRnVuKCk7XG4gIH0sXG5cbiAgbGl0dGxlTGlnaHRBbmlGdW4oKSB7XG4gICAgbGV0IGxpZ2h0U3RhdHVzID0gZmFsc2U7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGxpZ2h0U3RhdHVzKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgZHVyYXRpb246IDExMDAsXG4gICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgICAgfSk7XG4gICAgICAgIGFuaW1hdGlvbi5iYWNrZ3JvdW5kQ29sb3IoJyNmZmZmZmYnKS5zdGVwKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgWydsaXR0ZUxpZ2h0QW5pLnJlZCddOiBhbmltYXRpb24sXG4gICAgICAgICAgWydsaXR0ZUxpZ2h0QW5pLmJsdWUnXTogYW5pbWF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICBsaWdodFN0YXR1cyA9ICFsaWdodFN0YXR1cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblJlZCA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgZHVyYXRpb246IDExMDAsXG4gICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgICAgfSk7XG4gICAgICAgIGFuaW1hdGlvblJlZC5iYWNrZ3JvdW5kQ29sb3IoJyNGRjQ1MDAnKS5zdGVwKCk7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkJsdWUgPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgIGR1cmF0aW9uOiAxMTAwLFxuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICAgIH0pO1xuICAgICAgICBhbmltYXRpb25CbHVlLmJhY2tncm91bmRDb2xvcignIzFFOTBGRicpLnN0ZXAoKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBbJ2xpdHRlTGlnaHRBbmkucmVkJ106IGFuaW1hdGlvblJlZCxcbiAgICAgICAgICBbJ2xpdHRlTGlnaHRBbmkuYmx1ZSddOiBhbmltYXRpb25CbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBsaWdodFN0YXR1cyA9ICFsaWdodFN0YXR1cztcbiAgICAgIH1cbiAgICB9LCAxMjAwKTtcbiAgfSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDmjqfliLbmt7vliqDmjInpkq7np7vliqjnmoTliqjnlLvmlrnms5VcbiAgICogQHBhcmFtIHN0YXR1cyDmjInpkq7lvZPliY3nmoTnirbmgIFcbiAgICogQHBhcmFtIGR1cmF0aW9uIOaMiemSruWKqOeUu+aXtumXtO+8jOWNleS9je+8muavq+enklxuICAgKi9cbiAgYWRkQnV0dG9uQW5pKHN0YXR1czogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlcikge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLnJvdGF0ZSgwKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbJ2FkZEJ1dHRvbi5hbmltYXRpb24nXTogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24ucm90YXRlKDQ1KS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbJ2FkZEJ1dHRvbi5hbmltYXRpb24nXTogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgdG9wQW5pKHN0YXR1czogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlcikge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdG9wQW5pbWF0aW9uOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKC0yNTApLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHRvcEFuaW1hdGlvbjogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgbGluZUFuaShzdGF0dXM6IGJvb2xlYW4sIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi53aWR0aCgwKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaW5lQW5pbWF0aW9uOiBhbmltYXRpb25cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi53aWR0aCgnMjYwcnB4Jykuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGluZUFuaW1hdGlvbjogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgaW5wdXRBbmkoc3RhdHVzOiBib29sZWFuLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24uaGVpZ2h0KDApLnN0ZXAoKS53aWR0aCgwKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnB1dEFuaW1hdGlvbjogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24ud2lkdGgoJzcxMHJweCcpLnN0ZXAoKS5oZWlnaHQoJzk2MHJweCcpLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlucHV0QW5pbWF0aW9uOiBhbmltYXRpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBvbkFkZEJ1dHRvblRhcCgpIHtcbiAgICBjb25zdCB7IGFkZEJ1dHRvbiB9ID0gdGhpcy5kYXRhO1xuICAgIHRoaXMuYWRkQnV0dG9uQW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XG4gICAgdGhpcy50b3BBbmkoYWRkQnV0dG9uLnN0YXR1cywgNDAwKTtcbiAgICB0aGlzLmxpbmVBbmkoYWRkQnV0dG9uLnN0YXR1cywgNDAwKTtcbiAgICB0aGlzLmlucHV0QW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnYWRkQnV0dG9uLnN0YXR1cyddOiAhYWRkQnV0dG9uLnN0YXR1c1xuICAgIH0pO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2lucHV0Q29udGFpbmVyLnN0eWxlJ106IGFkZEJ1dHRvbi5zdGF0dXNcbiAgICAgICAgPyAnZGlzcGxheTpmbGV4J1xuICAgICAgICA6ICdkaXNwbGF5Om5vbmUnXG4gICAgfSk7XG4gIH1cbn0pO1xuIl19