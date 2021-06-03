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
        isShowCalculator: false
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFLEVBQUU7SUFLZCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3FCQUNaO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFdBQVcsRUFBRSxDQUFDO1FBQ2QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFFO2dCQUNQO29CQUNFLElBQUksRUFBRSxFQUFFO29CQUNSLElBQUksRUFBRSxFQUFFO29CQUNSLE9BQU8sRUFBRSxFQUFFO2lCQUNaO2FBQ0Y7U0FDRjtRQUNELGdCQUFnQixFQUFFLEtBQUs7S0FDeEI7SUFLRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDUixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZ0JBQWdCLEVBQUUsS0FBSzthQUN4QixDQUFDLENBQUM7UUFFTCxDQUFDO0tBQ0Y7SUFLRCxPQUFPLEVBQUU7UUFDUCxjQUFjO1lBQ0osSUFBQSxRQUFRLEdBQUssSUFBSSxDQUFDLElBQUksU0FBZCxDQUFlO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRzthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsYUFBYSxZQUFDLENBQUM7WUFDYixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBQSxRQUFRLEdBQUssSUFBSSxDQUFDLElBQUksU0FBZCxDQUFlO1lBQy9CLElBQU0sT0FBTyxHQUFHO2dCQUNkLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSTtnQkFDN0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJO2dCQUM3QixZQUFZLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVk7Z0JBQzdDLE9BQU8sRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzthQUNwQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxjQUFjLEVBQUUsT0FBTzthQUN4QixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTTtZQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELFlBQVk7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGdCQUFnQixFQUFFLElBQUk7YUFDdkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge30sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIG5vZGVMaXN0OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnMTIzJyxcbiAgICAgICAgICAgIGNvZGU6ICcyMicsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJzEyMzU1JyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnMTIzJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmlLblhaUnLFxuICAgICAgICBjb2RlOiAnZWFybmluZycsXG4gICAgICAgIGFiYnJldmlhdGlvbjogJ+aUticsXG4gICAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIHNjcm9sbFdpZHRoOiAwLFxuICAgIGNob29zZU5vZGVJdGVtOiB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgY29kZTogJycsXG4gICAgICBhYmJyZXZpYXRpb246ICcnLFxuICAgICAgc3ViTGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgaXNTaG93Q2FsY3VsYXRvcjogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE55Sf5ZG95ZGo5pyfXG4gICAqL1xuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXRTY3JvbGxXaWR0aCgpO1xuICAgIH0sXG4gICAgZGV0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlzU2hvd0NhbGN1bGF0b3I6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIC8vIOWcqOe7hOS7tuWunuS+i+iiq+S7jumhtemdouiKgueCueagkeenu+mZpOaXtuaJp+ihjFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgc2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgICBjb25zdCB7IG5vZGVMaXN0IH0gPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzY3JvbGxXaWR0aDogbm9kZUxpc3QubGVuZ3RoICogMTAwXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbm9kZUl0ZW1DbGljayhlKSB7XG4gICAgICBjb25zdCBjdXJJbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmk7XG4gICAgICBjb25zdCB7IG5vZGVMaXN0IH0gPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBjdXJJdGVtID0ge1xuICAgICAgICBpbmRleDogY3VySW5kZXgsXG4gICAgICAgIG5hbWU6IG5vZGVMaXN0W2N1ckluZGV4XS5uYW1lLFxuICAgICAgICBjb2RlOiBub2RlTGlzdFtjdXJJbmRleF0uY29kZSxcbiAgICAgICAgYWJicmV2aWF0aW9uOiBub2RlTGlzdFtjdXJJbmRleF0uYWJicmV2aWF0aW9uLFxuICAgICAgICBzdWJMaXN0OiBub2RlTGlzdFtjdXJJbmRleF0uc3ViTGlzdFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGNob29zZU5vZGVJdGVtOiBjdXJJdGVtXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25CYWNrKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2JhY2tFdmVudCcpO1xuICAgIH0sXG5cbiAgICBzdWJJdGVtQ2xpY2soKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1Nob3dDYWxjdWxhdG9yOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuIl19