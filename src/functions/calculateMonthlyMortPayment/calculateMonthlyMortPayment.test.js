import * as React from 'react';


import calculateMonthlyMortPayment from './calculateMonthlyMortPayment';


describe('Monthly Mortgage calculations', () => {
  test('Correct monthly mortgage repayment', () => {
    const pValue = 100000;
    const iRate = 1;
    const tYears = 10;
    const dep = 10000;
    const addFee = true;
    const feeValue = 1000;
    const monthlyPayment = calculateMonthlyMortPayment(pValue, iRate, tYears, dep, addFee, feeValue);
    const expectedReturn = 797;
    // const monthlyPayment = funcReturn[0];
    expect(monthlyPayment).toBe(expectedReturn);
  });
});
