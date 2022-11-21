import * as React from 'react';

import calculateMortPrinciple from './calculateMortPrinciple';


describe('Monthly Mortgage calculations', () => {
  test('Correct mortgage principle: including fee', () => {
    const pValue = 100000;
    const dep = 10000;
    const addFee = true;
    const feeValue = 1000;
    const mortgagePrinciple = calculateMortPrinciple(pValue, dep, addFee, feeValue);
    const expectedReturn = (pValue - dep) + feeValue;
    // const monthlyPayment = funcReturn[0];
    expect(mortgagePrinciple).toBe(expectedReturn);
  });
  test('Correct mortgage principle: excluding fee', () => {
    const pValue = 100000;
    const dep = 10000;
    const addFee = false;
    const feeValue = 1000;
    const mortgagePrinciple = calculateMortPrinciple(pValue, dep, addFee, feeValue);
    const expectedReturn = pValue - dep;
    // const monthlyPayment = funcReturn[0];
    expect(mortgagePrinciple).toBe(expectedReturn);
  });
});
