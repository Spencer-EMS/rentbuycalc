import * as React from 'react';


import calculateFMV from './calculateFMV';


describe('Future Market Value', () => {
  test('Correct FMV 5yr, 5%, 100k', () => {
    const principle = 100000;
    const intRate = 5;
    const timePeriods = 5;
    const chargedPerPeriod = 12;
    let futureMarketValue = calculateFMV(principle, intRate, timePeriods, chargedPerPeriod);
    const expectedReturn = 128335.87;
    expect(futureMarketValue).toBe(expectedReturn);
  });
  test('Correct FMV 2yr, 2%, 500k', () => {
    const principle = 500000;
    const intRate = 2;
    const timePeriods = 2;
    const chargedPerPeriod = 12;
    let futureMarketValue = calculateFMV(principle, intRate, timePeriods, chargedPerPeriod);
    const expectedReturn = 520388.06;
    expect(futureMarketValue).toBe(expectedReturn);
  });
  test('Correct FMV 10yr, 3.5%, 350k', () => {
    const principle = 350000;
    const intRate = 3.5;
    const timePeriods = 10;
    const chargedPerPeriod = 12;
    let futureMarketValue = calculateFMV(principle, intRate, timePeriods, chargedPerPeriod);
    const expectedReturn = 496420.69;
    expect(futureMarketValue).toBe(expectedReturn);
  });
});
