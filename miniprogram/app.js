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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixZQUFZLEVBQUU7WUFDWixZQUFZLEVBQUUsQ0FBQztZQUNmLFlBQVksRUFBRSxDQUFDO1lBQ2YsbUJBQW1CLEVBQUUsQ0FBQztZQUN0QixlQUFlLEVBQUUsQ0FBQztZQUNsQixzQkFBc0IsRUFBRSxDQUFDO1lBQ3pCLGVBQWUsRUFBRSxDQUFDO1NBQ25CO0tBQ0Y7SUFFRCxRQUFRO1FBQVIsaUJBMkNDO1FBekNDLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdEQsSUFBTSxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV4QyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUMvQixJQUFNLFlBQVksR0FBRztZQUNuQixZQUFZLEVBQUUsU0FBUztZQUN2QixZQUFZLEVBQUUsU0FBUztZQUN2QixtQkFBbUIsRUFBRSxTQUFTO1lBQzlCLGVBQWUsRUFBRSxTQUFTLEdBQUcsT0FBTztZQUNwQyxzQkFBc0IsRUFBRSxTQUFTLEdBQUcsT0FBTztZQUMzQyxlQUFlLEVBQUUsU0FBUyxHQUFHLE9BQU87U0FDckMsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUc1QyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBR2hDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs0QkFJeEMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFDakM7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7XG4gICAgZ2xvYmFsSGVpZ2h0OiB7XG4gICAgICBzY3JlZW5IZWlnaHQ6IDAsXG4gICAgICB3aW5kb3dIZWlnaHQ6IDAsXG4gICAgICBuYXZpZ2F0aW9uQmFySGVpZ2h0OiAwLFxuICAgICAgd2luZG93SGVpZ2h0UnB4OiAwLFxuICAgICAgbmF2aWdhdGlvbkJhckhlaWdodFJweDogMCxcbiAgICAgIHNjcmVlbkhlaWdodFJweDogMFxuICAgIH1cbiAgfSxcblxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDov5nph4zojrflvpfopoHnlKjliLDnmoTpq5jluqZcbiAgICBjb25zdCBzY3JIZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbkhlaWdodDtcbiAgICBjb25zdCB3aW5IZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcbiAgICBjb25zdCBuYXZIZWlnaHQgPSBzY3JIZWlnaHQgLSB3aW5IZWlnaHQ7XG4gICAgLy8g6L+Z6YeM6K6h566XcnB4XG4gICAgY29uc3Qgc2NyV2lkdGggPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbldpZHRoO1xuICAgIGNvbnN0IHJweFJhdGUgPSA3NTAgLyBzY3JXaWR0aDtcbiAgICBjb25zdCBoZWlnaHRPYmplY3QgPSB7XG4gICAgICBzY3JlZW5IZWlnaHQ6IHNjckhlaWdodCxcbiAgICAgIHdpbmRvd0hlaWdodDogd2luSGVpZ2h0LFxuICAgICAgbmF2aWdhdGlvbkJhckhlaWdodDogbmF2SGVpZ2h0LFxuICAgICAgd2luZG93SGVpZ2h0UnB4OiB3aW5IZWlnaHQgKiBycHhSYXRlLFxuICAgICAgbmF2aWdhdGlvbkJhckhlaWdodFJweDogbmF2SGVpZ2h0ICogcnB4UmF0ZSxcbiAgICAgIHNjcmVlbkhlaWdodFJweDogc2NySGVpZ2h0ICogcnB4UmF0ZVxuICAgIH07XG4gICAgdGhpcy5nbG9iYWxEYXRhLmdsb2JhbEhlaWdodCA9IGhlaWdodE9iamVjdDtcblxuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIGNvbnN0IGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdO1xuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKTtcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpO1xuXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuXG4gICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIl19