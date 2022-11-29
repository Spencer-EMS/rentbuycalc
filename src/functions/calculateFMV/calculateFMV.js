
// Formula calculates Future Market Value of an investment using compound interest

const calculateFMV = function(principle, intRate, timePeriods, chargedPerPeriod) {
    const p = principle;
    const r = intRate/100;
    const t = timePeriods;
    const n = chargedPerPeriod; 
    let futureValue = p*((1+(r/n))**(n*t));
    futureValue = futureValue.toFixed(2);
    futureValue = parseFloat(futureValue);
    return futureValue;
}

export default calculateFMV;

