import * as React from 'react';


import Buying, {
  calculateMonthlyMortPaymentTest,
  calculateMortPrincipleTest,
  calculateStampDutyTest
} from './Buying';


describe('Monthly Mortgage calculations', () => {
  test('Correct monthly mortgage repayment', () => {
    const pValue = 100000;
    const iRate = 1;
    const tYears = 10;
    const dep = 10000;
    const addFee = true;
    const feeValue = 1000;
    const monthlyPayment = calculateMonthlyMortPaymentTest(pValue, iRate, tYears, dep, addFee, feeValue);
    const expectedReturn = 797;
    // const monthlyPayment = funcReturn[0];
    expect(monthlyPayment).toBe(expectedReturn);
  });
  test('Correct mortgage principle: including fee', () => {
    const pValue = 100000;
    const dep = 10000;
    const addFee = true;
    const feeValue = 1000;
    const mortgagePrinciple = calculateMortPrincipleTest(pValue, dep, addFee, feeValue);
    const expectedReturn = (pValue - dep) + feeValue;
    // const monthlyPayment = funcReturn[0];
    expect(mortgagePrinciple).toBe(expectedReturn);
  });
  test('Correct mortgage principle: excluding fee', () => {
    const pValue = 100000;
    const dep = 10000;
    const addFee = false;
    const feeValue = 1000;
    const mortgagePrinciple = calculateMortPrincipleTest(pValue, dep, addFee, feeValue);
    const expectedReturn = pValue - dep;
    // const monthlyPayment = funcReturn[0];
    expect(mortgagePrinciple).toBe(expectedReturn);
  });
});



describe('Stamp duty calculations', () => {
  test('Non FtB < 250000', () => {
    const propValue = 200000;
    const ftbCheckBox = false;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = 0;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('Non FtB 250k > Value < 925k', () => {
    const propValue = 500000;
    const ftbCheckBox = false;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = (propValue - 250000)*0.05;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('Non FtB 925k > Value < 1.5M', () => {
    const propValue = 1200000;
    const ftbCheckBox = false;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = ((propValue - 925001)*0.1)+(675000*0.05);
    expect(stampDuty).toBe(expectedReturn);
  });
  test('Non FtB Value > 1.5M', () => {
    const propValue = 1200000;
    const ftbCheckBox = false;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = ((propValue - 925001)*0.1)+(675000*0.05);
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB Value <= 425k', () => {
    const propValue = 350000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = 0;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB 425k > Value <= 625k', () => {
    const propValue = 350000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = 0;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB 625k > value <= 925k', () => {
    const propValue = 750000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = (propValue - 250000)*0.05;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB 925k > value < 1.5M', () => {
    const propValue = 1250000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = ((propValue - 925001)*0.1)+(675000*0.05);
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB value > 1.5M', () => {
    const propValue = 2000000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDutyTest(propValue, ftbCheckBox);
    const expectedReturn = ((propValue - 1499999)*0.12)+((propValue - 925001)*0.1)+(675000*0.05);
    expect(stampDuty).toBe(expectedReturn);
  });
});





