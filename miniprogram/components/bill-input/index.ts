Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
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

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function () {
      this.setScrollWidth();
    },
    detached: function () {
      this.setData({
        isShowCalculator: false
      });
      // 在组件实例被从页面节点树移除时执行
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setScrollWidth() {
      const { nodeList } = this.data;
      this.setData({
        scrollWidth: nodeList.length * 100
      });
    },

    nodeItemClick(e) {
      const curIndex = e.currentTarget.dataset.i;
      const { nodeList } = this.data;
      const curItem = {
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

    onBack() {
      this.triggerEvent('backEvent');
    },

    subItemClick() {
      this.setData({
        isShowCalculator: true
      });
    }
  }
});
