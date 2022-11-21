// Monthly mortgage repayment M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
const calculateMonthlyMortPayment = function(pValue, iRate, tYears, dep, addFee, feeValue) {
    var principle = pValue - dep;
    if (addFee !== false) {
        principle = principle + feeValue;
    }
    const int = (iRate/100)/12;
    const nMonths = tYears*12;
    const intOne = int + 1;
    const numerator = (int*(intOne**nMonths));
    const denominator = ((int + 1)**(nMonths)-1);
    var monthlyPayment = principle*(numerator/denominator);
    return parseInt(monthlyPayment);
}

export default calculateMonthlyMortPayment;