import * as React from 'react';


import calculateFutureValue from './calculateFutureValue';


describe('Future Market Value', () => {
  test('Correct Future Value 5yr, 5%, 200pcm', () => {
    const savedMonthly = 200;
    const aer = 5;
    const timePeriods = 5;
    const chargedPerPeriod = 12;
    const futureValue = calculateFutureValue(savedMonthly, aer, timePeriods, chargedPerPeriod);
    const expectedReturn = 13657.89;
    expect(futureValue).toBe(expectedReturn);
  });
  test('Correct Future Value 2yr, 4.5%, 450pcm', () => {
    const savedMonthly = 450;
    const aer = 4.5;
    const timePeriods = 2;
    const chargedPerPeriod = 12;
    const futureValue = calculateFutureValue(savedMonthly, aer, timePeriods, chargedPerPeriod);
    const expectedReturn = 11321.11;
    expect(futureValue).toBe(expectedReturn);
  });
});
