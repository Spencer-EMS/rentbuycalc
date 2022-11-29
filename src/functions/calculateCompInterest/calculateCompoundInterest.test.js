import * as React from 'react';


import calculateCompInterest from './calculateCompInterest';


describe('Compound Interest', () => {
  test('Correct 5yr, 1% compound interest, 100k', () => {
    const principle = 100000;
    const intRate = 1;
    const timePeriods = 5;
    const chargedPerPeriod = 12;
    let compInterest = calculateCompInterest(principle, intRate, timePeriods, chargedPerPeriod);
    const expectedReturn = 5124.92;
    expect(compInterest).toBe(expectedReturn);
  });
  test('Correct 2yr, 4% compound interest, 500k', () => {
    const principle = 500000;
    const intRate = 4;
    const timePeriods = 2;
    const chargedPerPeriod = 12;
    let compInterest = calculateCompInterest(principle, intRate, timePeriods, chargedPerPeriod);
    const expectedReturn = 41571.48;
    expect(compInterest).toBe(expectedReturn);
  });
  test('Correct 3yr, float 3.71% compound interest, 350k', () => {
    const principle = 350000;
    const intRate = 3.71;
    const timePeriods = 3;
    const chargedPerPeriod = 12;
    let compInterest = calculateCompInterest(principle, intRate, timePeriods, chargedPerPeriod);
    const expectedReturn = 41138.40;
    expect(compInterest).toBe(expectedReturn);
  });
});
