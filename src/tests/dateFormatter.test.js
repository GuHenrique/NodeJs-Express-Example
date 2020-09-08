const {
    formattedDateTime,
    formattedDate,
    getMonthPeriod,
    addTimeToTheDate
} = require('../shared/sources/dateFormatter');


describe("Date Formatter tests", () => {

    it('Get Date Time', () => {
        expect(formattedDateTime(new Date('2020-08-25 '))).toBe('2020-08-25 00:00:00');
    });

    it('Get Date', () => {
        expect(formattedDate(new Date('2020-08-25 '))).toBe('2020-08-25');
    });

    it('Get Month Period', () => {
        expect(getMonthPeriod(2020, 1)).toStrictEqual({
            firstDay: "2020-01-01 00:00:00",
            lastDay: "2020-01-31 23:59:59"
        });
    });

    it('Add time to the date', () => {
        expect(addTimeToTheDate(new Date('2020-08-25 '), 2, 3, 5)).toStrictEqual(new Date('2025-11-27 00:00:00'));
    });

   
})


/* OUTRA FORMA DE SE FAZER

test('Date Time', () => {
    expect(addDateRange(new Date('2020-08-25 '), 2, 3, 5)).toStrictEqual(new Date('2025-11-27 00:00:00'))
});

*/