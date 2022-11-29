// Formula calculates and returns Compound Interest

const calculateCompInterest = function(principle, intRate, timePeriods, chargedPerPeriod) {
    const p = principle;
    const r = intRate/100;
    const t = timePeriods;
    const n = chargedPerPeriod; 
    const futureValue = p*((1+(r/n))**(n*t));
    let interest = futureValue - p;
    interest = interest.toFixed(2);
    interest = parseFloat(interest);
    return interest;
}

export default calculateCompInterest;

