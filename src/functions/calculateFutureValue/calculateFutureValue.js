
// Formula calculates Future Value of savings where monthly contributions are made (annuity formula)

// ( (PMT*(1+i)*) * ((1+r/n)**(nt))-1)/(r/n) )

const calculateFutureValue = function( savedMonthly, aer, timePeriods, chargedPerPeriod ) {
    const rOverN = (aer/100)/12;
    const nt = chargedPerPeriod * timePeriods;
    const numerator = ( ( ( 1 + (rOverN) ) ** (nt) ) -1 );
    const numDom = numerator/rOverN;
    var futureValue = (savedMonthly * ( 1 + rOverN )) * numDom;
    futureValue = futureValue.toFixed(2);
    futureValue = parseFloat(futureValue);
    return futureValue;
}

export default calculateFutureValue;

