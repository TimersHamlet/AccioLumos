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
        }
    },
    lifetimes: {
        attached: function () {
            this.setScrollWidth();
        },
        detached: function () {
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
            e.stopPropagation();
        },
        onBack: function () {
            this.triggerEvent('backEvent');
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFLEVBQUU7SUFLZCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3FCQUNaO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFdBQVcsRUFBRSxDQUFDO1FBQ2QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFFO2dCQUNQO29CQUNFLElBQUksRUFBRSxFQUFFO29CQUNSLElBQUksRUFBRSxFQUFFO29CQUNSLE9BQU8sRUFBRSxFQUFFO2lCQUNaO2FBQ0Y7U0FDRjtLQUNGO0lBS0QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFDRCxRQUFRLEVBQUU7UUFFVixDQUFDO0tBQ0Y7SUFLRCxPQUFPLEVBQUU7UUFDUCxjQUFjO1lBQ0osSUFBQSxRQUFRLEdBQUssSUFBSSxDQUFDLElBQUksU0FBZCxDQUFlO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRzthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsYUFBYSxZQUFDLENBQUM7WUFDYixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBQSxRQUFRLEdBQUssSUFBSSxDQUFDLElBQUksU0FBZCxDQUFlO1lBQy9CLElBQU0sT0FBTyxHQUFHO2dCQUNkLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSTtnQkFDN0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJO2dCQUM3QixZQUFZLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVk7Z0JBQzdDLE9BQU8sRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzthQUNwQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxjQUFjLEVBQUUsT0FBTzthQUN4QixDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUNELE1BQU07WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHt9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBub2RlTGlzdDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJzEyMycsXG4gICAgICAgICAgICBjb2RlOiAnMjInLFxuICAgICAgICAgICAgaWNvblVybDogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcxMjM1NScsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJzEyMycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn5pS25YWlJyxcbiAgICAgICAgY29kZTogJ2Vhcm5pbmcnLFxuICAgICAgICBhYmJyZXZpYXRpb246ICfmlLYnLFxuICAgICAgICBzdWJMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBzY3JvbGxXaWR0aDogMCxcbiAgICBjaG9vc2VOb2RlSXRlbToge1xuICAgICAgaW5kZXg6IDAsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGNvZGU6ICcnLFxuICAgICAgYWJicmV2aWF0aW9uOiAnJyxcbiAgICAgIHN1Ykxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOeUn+WRveWRqOacn1xuICAgKi9cbiAgbGlmZXRpbWVzOiB7XG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsV2lkdGgoKTtcbiAgICB9LFxuICAgIGRldGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyDlnKjnu4Tku7blrp7kvovooqvku47pobXpnaLoioLngrnmoJHnp7vpmaTml7bmiafooYxcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIHNldFNjcm9sbFdpZHRoKCkge1xuICAgICAgY29uc3QgeyBub2RlTGlzdCB9ID0gdGhpcy5kYXRhO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2Nyb2xsV2lkdGg6IG5vZGVMaXN0Lmxlbmd0aCAqIDEwMFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG5vZGVJdGVtQ2xpY2soZSkge1xuICAgICAgY29uc3QgY3VySW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pO1xuICAgICAgY29uc3QgeyBub2RlTGlzdCB9ID0gdGhpcy5kYXRhO1xuICAgICAgY29uc3QgY3VySXRlbSA9IHtcbiAgICAgICAgaW5kZXg6IGN1ckluZGV4LFxuICAgICAgICBuYW1lOiBub2RlTGlzdFtjdXJJbmRleF0ubmFtZSxcbiAgICAgICAgY29kZTogbm9kZUxpc3RbY3VySW5kZXhdLmNvZGUsXG4gICAgICAgIGFiYnJldmlhdGlvbjogbm9kZUxpc3RbY3VySW5kZXhdLmFiYnJldmlhdGlvbixcbiAgICAgICAgc3ViTGlzdDogbm9kZUxpc3RbY3VySW5kZXhdLnN1Ykxpc3RcbiAgICAgIH07XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjaG9vc2VOb2RlSXRlbTogY3VySXRlbVxuICAgICAgfSk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0sXG4gICAgb25CYWNrKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2JhY2tFdmVudCcpO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=