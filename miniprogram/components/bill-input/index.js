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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFLEVBQUU7SUFLZCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3FCQUNaO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUztnQkFDZixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLElBQUksRUFBRSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFdBQVcsRUFBRSxDQUFDO1FBQ2QsY0FBYyxFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFFO2dCQUNQO29CQUNFLElBQUksRUFBRSxFQUFFO29CQUNSLElBQUksRUFBRSxFQUFFO29CQUNSLE9BQU8sRUFBRSxFQUFFO2lCQUNaO2FBQ0Y7U0FDRjtLQUNGO0lBS0QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFDRCxRQUFRLEVBQUU7UUFFVixDQUFDO0tBQ0Y7SUFLRCxPQUFPLEVBQUU7UUFDUCxjQUFjO1lBQ0osSUFBQSxRQUFRLEdBQUssSUFBSSxDQUFDLElBQUksU0FBZCxDQUFlO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRzthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsYUFBYSxZQUFDLENBQUM7WUFDYixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBQSxRQUFRLEdBQUssSUFBSSxDQUFDLElBQUksU0FBZCxDQUFlO1lBQy9CLElBQU0sT0FBTyxHQUFHO2dCQUNkLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSTtnQkFDN0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJO2dCQUM3QixZQUFZLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVk7Z0JBQzdDLE9BQU8sRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzthQUNwQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxjQUFjLEVBQUUsT0FBTzthQUN4QixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7fSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgbm9kZUxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcxMjMnLFxuICAgICAgICAgICAgY29kZTogJzIyJyxcbiAgICAgICAgICAgIGljb25Vcmw6ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnMTIzNTUnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcxMjMnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgIGNvZGU6ICdlYXJuaW5nJyxcbiAgICAgICAgYWJicmV2aWF0aW9uOiAn5pS2JyxcbiAgICAgICAgc3ViTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgc2Nyb2xsV2lkdGg6IDAsXG4gICAgY2hvb3NlTm9kZUl0ZW06IHtcbiAgICAgIGluZGV4OiAwLFxuICAgICAgbmFtZTogJycsXG4gICAgICBjb2RlOiAnJyxcbiAgICAgIGFiYnJldmlhdGlvbjogJycsXG4gICAgICBzdWJMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICBpY29uVXJsOiAnJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTnlJ/lkb3lkajmnJ9cbiAgICovXG4gIGxpZmV0aW1lczoge1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbFdpZHRoKCk7XG4gICAgfSxcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8g5Zyo57uE5Lu25a6e5L6L6KKr5LuO6aG16Z2i6IqC54K55qCR56e76Zmk5pe25omn6KGMXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRTY3JvbGxXaWR0aCgpIHtcbiAgICAgIGNvbnN0IHsgbm9kZUxpc3QgfSA9IHRoaXMuZGF0YTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNjcm9sbFdpZHRoOiBub2RlTGlzdC5sZW5ndGggKiAxMDBcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBub2RlSXRlbUNsaWNrKGUpIHtcbiAgICAgIGNvbnN0IGN1ckluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaTtcbiAgICAgIGNvbnN0IHsgbm9kZUxpc3QgfSA9IHRoaXMuZGF0YTtcbiAgICAgIGNvbnN0IGN1ckl0ZW0gPSB7XG4gICAgICAgIGluZGV4OiBjdXJJbmRleCxcbiAgICAgICAgbmFtZTogbm9kZUxpc3RbY3VySW5kZXhdLm5hbWUsXG4gICAgICAgIGNvZGU6IG5vZGVMaXN0W2N1ckluZGV4XS5jb2RlLFxuICAgICAgICBhYmJyZXZpYXRpb246IG5vZGVMaXN0W2N1ckluZGV4XS5hYmJyZXZpYXRpb24sXG4gICAgICAgIHN1Ykxpc3Q6IG5vZGVMaXN0W2N1ckluZGV4XS5zdWJMaXN0XG4gICAgICB9O1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY2hvb3NlTm9kZUl0ZW06IGN1ckl0ZW1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=