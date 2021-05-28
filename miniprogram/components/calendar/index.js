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
        ]
    },
    lifetimes: {
        attached: function () {
            var time = this.properties.time;
            console.log('================>', time);
            console.log('=====================>', dayjs(time).daysInMonth());
        },
        detached: function () {
        }
    },
    methods: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZCQUErQjtBQUUvQixTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFFVixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBS0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFO1lBQ1IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2QsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1NBQ2Y7S0FDRjtJQUlELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBRTtZQUNBLElBQUEsSUFBSSxHQUFLLElBQUksQ0FBQyxVQUFVLEtBQXBCLENBQXFCO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsUUFBUSxFQUFFO1FBRVYsQ0FBQztLQUNGO0lBS0QsT0FBTyxFQUFFLEVBQUU7Q0FDWixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LmpzXG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcyc7XG5cbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKirlvZPliY3ml7bpl7QgKi9cbiAgICB0aW1lOiBTdHJpbmdcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgd2Vla0RhdGE6IFtcbiAgICAgIHsgbGFiZWw6ICfkuIAnIH0sXG4gICAgICB7IGxhYmVsOiAn5LqMJyB9LFxuICAgICAgeyBsYWJlbDogJ+S4iScgfSxcbiAgICAgIHsgbGFiZWw6ICflm5snIH0sXG4gICAgICB7IGxhYmVsOiAn5LqUJyB9LFxuICAgICAgeyBsYWJlbDogJ+WFrScgfSxcbiAgICAgIHsgbGFiZWw6ICfml6UnIH1cbiAgICBdXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTnlJ/lkb3lkajmnJ9cbiAgICovXG4gIGxpZmV0aW1lczoge1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB7IHRpbWUgfSA9IHRoaXMucHJvcGVydGllcztcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PicsIHRpbWUpO1xuICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT4nLCBkYXlqcyh0aW1lKS5kYXlzSW5Nb250aCgpKTtcbiAgICB9LFxuICAgIGRldGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyDlnKjnu4Tku7blrp7kvovooqvku47pobXpnaLoioLngrnmoJHnp7vpmaTml7bmiafooYxcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge31cbn0pO1xuIl19