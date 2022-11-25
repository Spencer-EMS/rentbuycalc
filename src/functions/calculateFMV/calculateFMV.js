
// Formula calculates Future Market Value and Compound Interest and returns them as an array

const calculateFMV = function(principle, intRate, timePeriods, chargedPerPeriod) {
    const p = principle;
    const r = intRate/100;
    const t = timePeriods;
    const n = chargedPerPeriod; 
    const futureValue = p*((1+(r/n))**(n*t));
    return futureValue;
}

export default calculateFMV;

