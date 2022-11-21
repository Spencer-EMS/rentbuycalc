const calculateMortPrinciple = function(pValue, dep, addFee, feeValue) {
    var principle = pValue - dep;
    if (addFee !== false) {
        principle = principle + feeValue;
    }
    return principle;
}

export default calculateMortPrinciple;