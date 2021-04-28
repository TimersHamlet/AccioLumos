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
        inputAnimation: {}
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
                ? 'display:block'
                : 'display:none',
            _b));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFakMsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFO1lBQ1QsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELFlBQVksRUFBRSxFQUFFO1FBQ2hCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGNBQWMsRUFBRSxFQUFFO0tBQ25CO0lBS0QsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUt0QixPQUFPLEVBQUUsY0FBYSxDQUFDO0lBS3ZCLE1BQU0sRUFBRSxjQUFhLENBQUM7SUFLdEIsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUt0QixRQUFRLEVBQUUsY0FBYSxDQUFDO0lBS3hCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUtqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0lBTzdCLFlBQVksRUFBWixVQUFhLE1BQWUsRUFBRSxRQUFnQjs7UUFDNUMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNuQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsY0FBYyxFQUFFLGFBQWE7YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLHFCQUFxQixJQUFHLFNBQVM7b0JBQ2xDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDbkMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLGNBQWMsRUFBRSxhQUFhO2FBQzlCLENBQUMsQ0FBQztZQUNI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QSxTQUFTLEdBQUssSUFBSSxDQUFDLElBQUksVUFBZCxDQUFlO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsa0JBQWtCLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDdkMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxzQkFBc0IsSUFBRyxTQUFTLENBQUMsTUFBTTtnQkFDeEMsQ0FBQyxDQUFDLGVBQWU7Z0JBQ2pCLENBQUMsQ0FBQyxjQUFjO2dCQUNsQixDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xuXG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGFkZEJ1dHRvbjoge1xuICAgICAgYW5pbWF0aW9uOiB7fSxcbiAgICAgIHN0YXR1czogZmFsc2VcbiAgICB9LFxuICAgIGlucHV0Q29udGFpbmVyOiB7XG4gICAgICBzdHlsZTogJydcbiAgICB9LFxuICAgIHRvcEFuaW1hdGlvbjoge30sXG4gICAgbGluZUFuaW1hdGlvbjoge30sXG4gICAgaW5wdXRBbmltYXRpb246IHt9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog5o6n5Yi25re75Yqg5oyJ6ZKu56e75Yqo55qE5Yqo55S75pa55rOVXG4gICAqIEBwYXJhbSBzdGF0dXMg5oyJ6ZKu5b2T5YmN55qE54q25oCBXG4gICAqIEBwYXJhbSBkdXJhdGlvbiDmjInpkq7liqjnlLvml7bpl7TvvIzljZXkvY3vvJrmr6vnp5JcbiAgICovXG4gIGFkZEJ1dHRvbkFuaShzdGF0dXM6IGJvb2xlYW4sIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi5yb3RhdGUoMCkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgWydhZGRCdXR0b24uYW5pbWF0aW9uJ106IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLnJvdGF0ZSg0NSkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgWydhZGRCdXR0b24uYW5pbWF0aW9uJ106IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHRvcEFuaShzdGF0dXM6IGJvb2xlYW4sIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHRvcEFuaW1hdGlvbjogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgtMjUwKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB0b3BBbmltYXRpb246IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGxpbmVBbmkoc3RhdHVzOiBib29sZWFuLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24ud2lkdGgoMCkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGluZUFuaW1hdGlvbjogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24ud2lkdGgoJzI2MHJweCcpLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpbmVBbmltYXRpb246IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGlucHV0QW5pKHN0YXR1czogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlcikge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLmhlaWdodCgwKS5zdGVwKCkud2lkdGgoMCkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5wdXRBbmltYXRpb246IGFuaW1hdGlvblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uLndpZHRoKCc3MTBycHgnKS5zdGVwKCkuaGVpZ2h0KCc5NjBycHgnKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnB1dEFuaW1hdGlvbjogYW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgb25BZGRCdXR0b25UYXAoKSB7XG4gICAgY29uc3QgeyBhZGRCdXR0b24gfSA9IHRoaXMuZGF0YTtcbiAgICB0aGlzLmFkZEJ1dHRvbkFuaShhZGRCdXR0b24uc3RhdHVzLCA0MDApO1xuICAgIHRoaXMudG9wQW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XG4gICAgdGhpcy5saW5lQW5pKGFkZEJ1dHRvbi5zdGF0dXMsIDQwMCk7XG4gICAgdGhpcy5pbnB1dEFuaShhZGRCdXR0b24uc3RhdHVzLCA0MDApO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2FkZEJ1dHRvbi5zdGF0dXMnXTogIWFkZEJ1dHRvbi5zdGF0dXNcbiAgICB9KTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydpbnB1dENvbnRhaW5lci5zdHlsZSddOiBhZGRCdXR0b24uc3RhdHVzXG4gICAgICAgID8gJ2Rpc3BsYXk6YmxvY2snXG4gICAgICAgIDogJ2Rpc3BsYXk6bm9uZSdcbiAgICB9KTtcbiAgfVxufSk7XG4iXX0=