// Formula calculates Future Market Value and Compound Interest and returns them as an array

const calculateCompInterest = function(principle, intRate, timePeriods, chargedPerPeriod) {
    const p = principle;
    const r = intRate/100;
    const t = timePeriods;
    const n = chargedPerPeriod; 
    const futureValue = p*((1+(r/n))**(n*t));
    const interest = futureValue - p;
    return [ interest, futureValue ];
}

export default calculateCompInterest;

