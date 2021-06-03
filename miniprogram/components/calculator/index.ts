Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    Num: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNumTap(e) {
      const value = e.currentTarget.dataset.i;
      this.triggerEvent('numTapEvent', value);
    },
    onClearTap() {
      this.triggerEvent('clearTapEvent');
    },
    onDotTap(e) {
      const value = e.currentTarget.dataset.i;
      this.triggerEvent('dotTapEvent', value);
    },
    onBackSpaceTap() {
      this.triggerEvent('backSpaceTapEvent');
    },
    onPlusTap(e) {
      const value = e.currentTarget.dataset.i;
      this.triggerEvent('plusTapEvent', value);
    },
    onMinusTap(e) {
      const value = e.currentTarget.dataset.i;
      this.triggerEvent('minusTapEvent', value);
    }
  }
});
