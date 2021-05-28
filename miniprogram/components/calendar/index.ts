// components/calendar/index.js
import * as dayjs from 'dayjs';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**当前时间 */
    time: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    weekData: [
      { label: '一' },
      { label: '二' },
      { label: '三' },
      { label: '四' },
      { label: '五' },
      { label: '六' },
      { label: '日' }
    ],
    dateArr: [0]
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function () {
      const { time } = this.properties;
      this.setData({
        dateArr: this.getEveryDayArr(time)
      });
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getEveryDayArr: (time: string) => {
      let curArr: number[] = [];
      const curDayLength = dayjs(time).daysInMonth();
      for (let index = 0; index < curDayLength; index++) {
        curArr.push(index + 1);
      }
      return curArr;
    }
  }
});
