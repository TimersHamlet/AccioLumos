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
    onLoad: function () { },
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
            animation.translateY(0).rotate(0).step();
            this.setData((_a = {},
                _a['addButton.animation'] = animation,
                _a));
        }
        else {
            var animation = wx.createAnimation({
                duration: duration,
                timingFunction: 'ease-in-out'
            });
            animation.translateY(-250).rotate(45).step();
            this.setData((_b = {},
                _b['addButton.animation'] = animation,
                _b));
        }
    },
    onAddButtonTap: function () {
        var _a;
        var addButton = this.data.addButton;
        this.addButtonAni(addButton.status, 400);
        this.setData((_a = {},
            _a['addButton.status'] = !addButton.status,
            _a));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxTQUFTLEVBQUUsRUFBRTtZQUNiLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7S0FDRjtJQUtELE1BQU0sRUFBRSxjQUFhLENBQUM7SUFLdEIsT0FBTyxFQUFFLGNBQWEsQ0FBQztJQUt2QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLE1BQU0sRUFBRSxjQUFhLENBQUM7SUFLdEIsUUFBUSxFQUFFLGNBQWEsQ0FBQztJQUt4QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFLakMsYUFBYSxFQUFFLGNBQWEsQ0FBQztJQU83QixZQUFZLEVBQVosVUFBYSxNQUFlLEVBQUUsUUFBZ0I7O1FBQzVDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDbkMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLGNBQWMsRUFBRSxhQUFhO2FBQzlCLENBQUMsQ0FBQztZQUNILFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMscUJBQXFCLElBQUcsU0FBUztvQkFDbEMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNuQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsY0FBYyxFQUFFLGFBQWE7YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLHFCQUFxQixJQUFHLFNBQVM7b0JBQ2xDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxjQUFjOztRQUNKLElBQUEsU0FBUyxHQUFLLElBQUksQ0FBQyxJQUFJLFVBQWQsQ0FBZTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGtCQUFrQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ3ZDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XG5cblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgYWRkQnV0dG9uOiB7XG4gICAgICBzdHlsZTogJycsXG4gICAgICBhbmltYXRpb246IHt9LFxuICAgICAgc3RhdHVzOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDmjqfliLbmt7vliqDmjInpkq7np7vliqjnmoTliqjnlLvmlrnms5VcbiAgICogQHBhcmFtIHN0YXR1cyDmjInpkq7lvZPliY3nmoTnirbmgIFcbiAgICogQHBhcmFtIGR1cmF0aW9uIOaMiemSruWKqOeUu+aXtumXtO+8jOWNleS9je+8muavq+enklxuICAgKi9cbiAgYWRkQnV0dG9uQW5pKHN0YXR1czogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlcikge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkucm90YXRlKDApLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFsnYWRkQnV0dG9uLmFuaW1hdGlvbiddOiBhbmltYXRpb25cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKC0yNTApLnJvdGF0ZSg0NSkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgWydhZGRCdXR0b24uYW5pbWF0aW9uJ106IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIG9uQWRkQnV0dG9uVGFwKCkge1xuICAgIGNvbnN0IHsgYWRkQnV0dG9uIH0gPSB0aGlzLmRhdGE7XG4gICAgdGhpcy5hZGRCdXR0b25BbmkoYWRkQnV0dG9uLnN0YXR1cywgNDAwKTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydhZGRCdXR0b24uc3RhdHVzJ106ICFhZGRCdXR0b24uc3RhdHVzXG4gICAgfSk7XG4gIH1cbn0pO1xuIl19