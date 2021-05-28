"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs = require("dayjs");
Component({
    properties: {
        time: String
    },
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
    lifetimes: {
        attached: function () {
            var time = this.properties.time;
            this.setData({
                dateArr: this.getEveryDayArr(time)
            });
        },
        detached: function () {
        }
    },
    methods: {
        getEveryDayArr: function (time) {
            var curArr = [];
            var curDayLength = dayjs(time).daysInMonth();
            for (var index = 0; index < curDayLength; index++) {
                curArr.push(index + 1);
            }
            return curArr;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZCQUErQjtBQUUvQixTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFFVixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBS0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFO1lBQ1IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDYjtJQUlELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBRTtZQUNBLElBQUEsSUFBSSxHQUFLLElBQUksQ0FBQyxVQUFVLEtBQXBCLENBQXFCO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxRQUFRLEVBQUU7UUFFVixDQUFDO0tBQ0Y7SUFLRCxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsVUFBQyxJQUFZO1lBQzNCLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0MsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEI7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmpzXG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcyc7XG5cbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKirlvZPliY3ml7bpl7QgKi9cbiAgICB0aW1lOiBTdHJpbmdcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgd2Vla0RhdGE6IFtcbiAgICAgIHsgbGFiZWw6ICfkuIAnIH0sXG4gICAgICB7IGxhYmVsOiAn5LqMJyB9LFxuICAgICAgeyBsYWJlbDogJ+S4iScgfSxcbiAgICAgIHsgbGFiZWw6ICflm5snIH0sXG4gICAgICB7IGxhYmVsOiAn5LqUJyB9LFxuICAgICAgeyBsYWJlbDogJ+WFrScgfSxcbiAgICAgIHsgbGFiZWw6ICfml6UnIH1cbiAgICBdLFxuICAgIGRhdGVBcnI6IFswXVxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE55Sf5ZG95ZGo5pyfXG4gICAqL1xuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgeyB0aW1lIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkYXRlQXJyOiB0aGlzLmdldEV2ZXJ5RGF5QXJyKHRpbWUpXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRldGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyDlnKjnu4Tku7blrp7kvovooqvku47pobXpnaLoioLngrnmoJHnp7vpmaTml7bmiafooYxcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGdldEV2ZXJ5RGF5QXJyOiAodGltZTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY3VyQXJyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgY29uc3QgY3VyRGF5TGVuZ3RoID0gZGF5anModGltZSkuZGF5c0luTW9udGgoKTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJEYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY3VyQXJyLnB1c2goaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJBcnI7XG4gICAgfVxuICB9XG59KTtcbiJdfQ==