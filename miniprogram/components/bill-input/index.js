"use strict";
Component({
    properties: {},
    data: {
        nodeList: [
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '123',
                        code: '22',
                        iconUrl: ''
                    },
                    {
                        name: '12355',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '123',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '',
                        code: '',
                        iconUrl: ''
                    }
                ]
            },
            {
                name: '收入',
                code: 'earning',
                abbreviation: '收',
                subList: [
                    {
                        name: '',
                        code: '',
                        iconUrl: ''
                    }
                ]
            }
        ],
        scrollWidth: 0,
        chooseNodeItem: {
            index: 0,
            name: '',
            code: '',
            abbreviation: '',
            subList: [
                {
                    name: '',
                    code: '',
                    iconUrl: ''
                }
            ]
        },
        isShowCalculator: false,
        amount: '0.00'
    },
    lifetimes: {
        attached: function () {
            this.setScrollWidth();
        },
        detached: function () {
            this.setData({
                isShowCalculator: false
            });
        }
    },
    methods: {
        setScrollWidth: function () {
            var nodeList = this.data.nodeList;
            this.setData({
                scrollWidth: nodeList.length * 100
            });
        },
        nodeItemClick: function (e) {
            var curIndex = e.currentTarget.dataset.i;
            var nodeList = this.data.nodeList;
            var curItem = {
                index: curIndex,
                name: nodeList[curIndex].name,
                code: nodeList[curIndex].code,
                abbreviation: nodeList[curIndex].abbreviation,
                subList: nodeList[curIndex].subList
            };
            this.setData({
                chooseNodeItem: curItem
            });
        },
        onBack: function () {
            this.triggerEvent('backEvent');
        },
        subItemClick: function () {
            this.setData({
                isShowCalculator: true
            });
        },
        updateAmount: function (e) {
            var amount = this.data.amount;
            if (Number(amount) > 999999999) {
                wx.showToast({
                    title: '最大金额为999999999',
                    icon: 'none',
                    duration: 1000
                });
            }
            else {
                if (amount === '0.00') {
                    this.setData({
                        amount: e.detail
                    });
                }
                else {
                    var nextAmount = "" + amount + e.detail.toString();
                    this.setData({
                        amount: nextAmount
                    });
                }
            }
        },
        clearAmount: function () {
            this.setData({
                amount: '0.00'
            });
        },
        dotInput: function (e) {
            var amount = this.data.amount;
            if (amount.indexOf('.') === -1) {
                var nextAmount = "" + amount + e.detail.toString();
                this.setData({
                    amount: nextAmount
                });
            }
        },
        backSpaceTap: function () {
            var amount = this.data.amount;
            if (amount.length === 1 || amount === '0.00') {
                this.setData({
                    amount: '0.00'
                });
            }
            else {
                var nextAmount = amount.substr(0, amount.length - 1);
                this.setData({
                    amount: nextAmount
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFLEVBQUU7SUFLZCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3FCQUNaO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtn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QUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUM7UUFFRCxXQUFXO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxNQUFNLEVBQUUsTUFBTTthQUNmLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxRQUFRLFlBQUMsQ0FBQztZQUNBLElBQUEsTUFBTSxHQUFLLElBQUksQ0FBQyxJQUFJLE9BQWQsQ0FBZTtZQUM3QixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksVUFBVSxHQUFHLEtBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFJLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsTUFBTSxFQUFFLFVBQVU7aUJBQ25CLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQztRQUNELFlBQVk7WUFDRixJQUFBLE1BQU0sR0FBSyxJQUFJLENBQUMsSUFBSSxPQUFkLENBQWU7WUFDN0IsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsTUFBTSxFQUFFLFVBQVU7aUJBQ25CLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge30sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIG5vZGVMaXN0OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnMTIzJyxcbiAgICAgICAgICAgIGNvZGU6ICcyMicsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJzEyMzU1JyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnMTIzJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIHNjcm9sbFdpZHRoOiAwLFxuICAgIGNob29zZU5vZGVJdGVtOiB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgY29kZTogJycsXG4gICAgICBhYmJyZXZpYXRpb246ICcnLFxuICAgICAgc3ViTGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgaXNTaG93Q2FsY3VsYXRvcjogZmFsc2UsXG4gICAgYW1vdW50OiAnMC4wMCdcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE55Sf5ZG95ZGo5pyfXG4gICAqL1xuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXRTY3JvbGxXaWR0aCgpO1xuICAgIH0sXG4gICAgZGV0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlzU2hvd0NhbGN1bGF0b3I6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIC8vIOWcqOe7hOS7tuWunuS+i+iiq+S7jumhtemdouiKgueCueagkeenu+mZpOaXtuaJp+ihjFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgc2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgICBjb25zdCB7IG5vZGVMaXN0IH0gPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzY3JvbGxXaWR0aDogbm9kZUxpc3QubGVuZ3RoICogMTAwXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbm9kZUl0ZW1DbGljayhlKSB7XG4gICAgICBjb25zdCBjdXJJbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmk7XG4gICAgICBjb25zdCB7IG5vZGVMaXN0IH0gPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBjdXJJdGVtID0ge1xuICAgICAgICBpbmRleDogY3VySW5kZXgsXG4gICAgICAgIG5hbWU6IG5vZGVMaXN0W2N1ckluZGV4XS5uYW1lLFxuICAgICAgICBjb2RlOiBub2RlTGlzdFtjdXJJbmRleF0uY29kZSxcbiAgICAgICAgYWJicmV2aWF0aW9uOiBub2RlTGlzdFtjdXJJbmRleF0uYWJicmV2aWF0aW9uLFxuICAgICAgICBzdWJMaXN0OiBub2RlTGlzdFtjdXJJbmRleF0uc3ViTGlzdFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGNob29zZU5vZGVJdGVtOiBjdXJJdGVtXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25CYWNrKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2JhY2tFdmVudCcpO1xuICAgIH0sXG5cbiAgICBzdWJJdGVtQ2xpY2soKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1Nob3dDYWxjdWxhdG9yOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgdXBkYXRlQW1vdW50KGUpIHtcbiAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSB0aGlzLmRhdGE7XG4gICAgICBpZiAoTnVtYmVyKGFtb3VudCkgPiA5OTk5OTk5OTkpIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+acgOWkp+mHkemineS4ujk5OTk5OTk5OScsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gJzAuMDAnKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGFtb3VudDogZS5kZXRhaWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbmV4dEFtb3VudCA9IGAke2Ftb3VudH0ke2UuZGV0YWlsLnRvU3RyaW5nKCl9YDtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgYW1vdW50OiBuZXh0QW1vdW50XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXJBbW91bnQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhbW91bnQ6ICcwLjAwJ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkb3RJbnB1dChlKSB7XG4gICAgICBjb25zdCB7IGFtb3VudCB9ID0gdGhpcy5kYXRhO1xuICAgICAgaWYgKGFtb3VudC5pbmRleE9mKCcuJykgPT09IC0xKSB7XG4gICAgICAgIGxldCBuZXh0QW1vdW50ID0gYCR7YW1vdW50fSR7ZS5kZXRhaWwudG9TdHJpbmcoKX1gO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGFtb3VudDogbmV4dEFtb3VudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJhY2tTcGFjZVRhcCgpIHtcbiAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSB0aGlzLmRhdGE7XG4gICAgICBpZiAoYW1vdW50Lmxlbmd0aCA9PT0gMSB8fCBhbW91bnQgPT09ICcwLjAwJykge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGFtb3VudDogJzAuMDAnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5leHRBbW91bnQgPSBhbW91bnQuc3Vic3RyKDAsIGFtb3VudC5sZW5ndGggLSAxKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBhbW91bnQ6IG5leHRBbW91bnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdfQ==