// components/calendar/index.js
import moment from 'moment';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**当前时间 */
    time: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    weekData: [
      { label: '一', id: 1 },
      { label: '二', id: 2 },
      { label: '三', id: 3 },
      { label: '四', id: 4 },
      { label: '五', id: 5 },
      { label: '六', id: 6 },
      { label: '日', id: 7 }
    ],
    publicDateArr: [{}],
    defaultTime: {}
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function () {
      this.initDateArr();
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initDateArr() {
      const { time } = this.properties;
      const initTime = {
        date: moment(time).date(),
        month: moment(time).month() + 1,
        year: moment(time).year()
      };
      this.setData({
        defaultTime: initTime
      });
      const firstDayInMonth = moment(time).startOf('M').format('YYYY-MM-DD');
      const lastDayInMonth = moment(time).endOf('M').format('YYYY-MM-DD');
      let firstDayInWeek = moment(firstDayInMonth).startOf('W');
      const lastDayInwWeek = moment(lastDayInMonth).endOf('W');
      // 这里计算出当前日期所在月份总共有几周
      const diffDays = lastDayInwWeek.diff(firstDayInWeek, 'days') + 1;
      // 对日期数组进行添加
      let dateArr = [
        {
          date: 0,
          month: 0,
          year: 0
        }
      ];
      for (let index = 0; index < diffDays; index++) {
        const dateMoment = firstDayInWeek.add(index, 'days');
        const dateItem = {
          date: dateMoment.date(),
          month: dateMoment.month() + 1,
          year: dateMoment.year()
        };
        dateArr[index] = dateItem;
        firstDayInWeek = moment(firstDayInMonth).startOf('W');
      }
      this.setData({
        publicDateArr: dateArr
      });
    }
  }
});
