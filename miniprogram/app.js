"use strict";
App({
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
    onLaunch: function () {
        var _this = this;
        var scrHeight = wx.getSystemInfoSync().screenHeight;
        var winHeight = wx.getSystemInfoSync().windowHeight;
        var navHeight = scrHeight - winHeight;
        var scrWidth = wx.getSystemInfoSync().screenWidth;
        var rpxRate = 750 / scrWidth;
        var heightObject = {
            screenHeight: scrHeight,
            windowHeight: winHeight,
            navigationBarHeight: navHeight,
            windowHeightRpx: winHeight * rpxRate,
            navigationBarHeightRpx: navHeight * rpxRate,
            screenHeightRpx: scrHeight * rpxRate
        };
        this.globalData.globalHeight = heightObject;
        console.log('=====================>', this.globalData.globalHeight);
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        }
                    });
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixZQUFZLEVBQUU7WUFDWixZQUFZLEVBQUUsQ0FBQztZQUNmLFlBQVksRUFBRSxDQUFDO1lBQ2YsbUJBQW1CLEVBQUUsQ0FBQztZQUN0QixlQUFlLEVBQUUsQ0FBQztZQUNsQixzQkFBc0IsRUFBRSxDQUFDO1lBQ3pCLGVBQWUsRUFBRSxDQUFDO1NBQ25CO0tBQ0Y7SUFFRCxRQUFRO1FBQVIsaUJBNENDO1FBMUNDLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdEQsSUFBTSxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV4QyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUMvQixJQUFNLFlBQVksR0FBRztZQUNuQixZQUFZLEVBQUUsU0FBUztZQUN2QixZQUFZLEVBQUUsU0FBUztZQUN2QixtQkFBbUIsRUFBRSxTQUFTO1lBQzlCLGVBQWUsRUFBRSxTQUFTLEdBQUcsT0FBTztZQUNwQyxzQkFBc0IsRUFBRSxTQUFTLEdBQUcsT0FBTztZQUMzQyxlQUFlLEVBQUUsU0FBUyxHQUFHLE9BQU87U0FDckMsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFHcEUsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUdoQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUVWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7NEJBSXhDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ2pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcclxuXHJcbkFwcDxJQXBwT3B0aW9uPih7XHJcbiAgZ2xvYmFsRGF0YToge1xyXG4gICAgZ2xvYmFsSGVpZ2h0OiB7XHJcbiAgICAgIHNjcmVlbkhlaWdodDogMCxcclxuICAgICAgd2luZG93SGVpZ2h0OiAwLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFySGVpZ2h0OiAwLFxyXG4gICAgICB3aW5kb3dIZWlnaHRScHg6IDAsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJIZWlnaHRScHg6IDAsXHJcbiAgICAgIHNjcmVlbkhlaWdodFJweDogMFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgLy8g6L+Z6YeM6I635b6X6KaB55So5Yiw55qE6auY5bqmXHJcbiAgICBjb25zdCBzY3JIZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbkhlaWdodDtcclxuICAgIGNvbnN0IHdpbkhlaWdodCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0O1xyXG4gICAgY29uc3QgbmF2SGVpZ2h0ID0gc2NySGVpZ2h0IC0gd2luSGVpZ2h0O1xyXG4gICAgLy8g6L+Z6YeM6K6h566XcnB4XHJcbiAgICBjb25zdCBzY3JXaWR0aCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuV2lkdGg7XHJcbiAgICBjb25zdCBycHhSYXRlID0gNzUwIC8gc2NyV2lkdGg7XHJcbiAgICBjb25zdCBoZWlnaHRPYmplY3QgPSB7XHJcbiAgICAgIHNjcmVlbkhlaWdodDogc2NySGVpZ2h0LFxyXG4gICAgICB3aW5kb3dIZWlnaHQ6IHdpbkhlaWdodCxcclxuICAgICAgbmF2aWdhdGlvbkJhckhlaWdodDogbmF2SGVpZ2h0LFxyXG4gICAgICB3aW5kb3dIZWlnaHRScHg6IHdpbkhlaWdodCAqIHJweFJhdGUsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJIZWlnaHRScHg6IG5hdkhlaWdodCAqIHJweFJhdGUsXHJcbiAgICAgIHNjcmVlbkhlaWdodFJweDogc2NySGVpZ2h0ICogcnB4UmF0ZVxyXG4gICAgfTtcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS5nbG9iYWxIZWlnaHQgPSBoZWlnaHRPYmplY3Q7XHJcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PicsIHRoaXMuZ2xvYmFsRGF0YS5nbG9iYWxIZWlnaHQpO1xyXG5cclxuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xyXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW107XHJcbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSk7XHJcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpO1xyXG5cclxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxyXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcclxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XHJcblxyXG4gICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19