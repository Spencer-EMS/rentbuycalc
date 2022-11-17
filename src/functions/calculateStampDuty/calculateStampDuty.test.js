import * as React from 'react';

import calculateStampDuty from './calculateStampDuty';


describe('Stamp duty calculations', () => {
  test('Non FtB < 250000', () => {
    const propValue = 200000;
    const ftbCheckBox = false;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = 0;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('Non FtB 250k > Value < 925k', () => {
    const propValue = 500000;
    const ftbCheckBox = false;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = (propValue - 250000)*0.05;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('Non FtB 925k > Value < 1.5M', () => {
    const propValue = 1200000;
    const ftbCheckBox = false;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = ((propValue - 925001)*0.1)+(675000*0.05);
    expect(stampDuty).toBe(expectedReturn);
  });
  test('Non FtB Value > 1.5M', () => {
    const propValue = 1200000;
    const ftbCheckBox = false;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = ((propValue - 925001)*0.1)+(675000*0.05);
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB Value <= 425k', () => {
    const propValue = 350000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = 0;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB 425k > Value <= 625k', () => {
    const propValue = 350000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = 0;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB 625k > value <= 925k', () => {
    const propValue = 750000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = (propValue - 250000)*0.05;
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB 925k > value < 1.5M', () => {
    const propValue = 1250000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = ((propValue - 925001)*0.1)+(675000*0.05);
    expect(stampDuty).toBe(expectedReturn);
  });
  test('FtB value > 1.5M', () => {
    const propValue = 2000000;
    const ftbCheckBox = true;
    const stampDuty = calculateStampDuty(propValue, ftbCheckBox);
    const expectedReturn = ((propValue - 1499999)*0.12)+((propValue - 925001)*0.1)+(675000*0.05);
    expect(stampDuty).toBe(expectedReturn);
  });
});





