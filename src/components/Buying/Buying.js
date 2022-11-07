import React, { useState, useEffect } from 'react';

import style from './Buying.module.css';

// Components
import Mortgage from '../Mortgage/Mortgage';
import UpfrontCostsBuy from '../UpfrontCostsBuy/UpfrontCostsBuy';
import MonthlyCostsBuy from '../MonthlyCostsBuy/MonthlyCostsBuy';


const Buying = ({
        sumMonthlyCosts,
        setSumMonthlyCosts,
        setBuyMonthlyCost, 
        upFrontCosts, 
        setUpFrontCosts,
        depAmount,
        setDepAmount,
        fixedTerm,
        stampDutyCost,
        setStampDutyCost,
        setPeriodInterestCost,
        periodInterestCost,
        setTimePeriodCost,
        setCapitalGains,
        setCapitalRepaid
    }) => {

    // input variables 
    const [ propValue, setPropValue ] = useState(250000);
    const [ growthRate, setGrowthRate ] = useState(3);
    const [ depPercent, setDepPercent ] = useState(10);
    const [ mortTerm, setMortTerm ] = useState(25);
    const [ intRate, setIntRate ] = useState(4.25);

    // readOnly values
    const [ mortPrinciple, setMortPrinciple ] = useState(0);
    
    // upfront cost variables
    const [ legalCost, setLegalCost ] = useState(2000);
    const [ survCost, setSurvCost ] = useState(695);
    const [ mortFee, setMortFee ] = useState(995);

    // Monthly cost variables
    const [ mortgagePayment, setMortgagePayment ] = useState(0);
    const [ monthlyMaintenance, setMonthlyMaintenance ] = useState(120);
    const [ servCharge, setServCharge ] = useState(0);
    const [ groundRent, setGroundRent ] = useState(0);

    // Booleans
    const [ addToMortgage, setAddToMortgage ] = useState(true);
    const [ ftbCheckBox, setFtbCheckBox ] = useState(false);
    
    // Stamp Duty & Deposit
    useEffect(() => {
        setDepAmount(propValue*(depPercent/100));
        var test1 = propValue-(propValue*(depPercent/100));
        setMortPrinciple(test1);
        const stampDuty = (value, ftbBool) => {
            var sdltTotal;
            if (ftbBool === false) {
                if (value <= 250000) {
                    sdltTotal = 0;
                } else if (value >= 250001 && value <= 925000) {
                    sdltTotal = (value - 250000)*0.05;
                } else if (value >= 925001 && value <= 1499999) {
                    sdltTotal = ((value - 925001)*0.1)+(675000*0.05);
                } else {
                    sdltTotal = ((value - 1499999)*0.12)+((value - 925001)*0.1)+(675000*0.05);
                }
                setStampDutyCost(sdltTotal);
            } else if (ftbBool === true) {
                if (value <= 425000) {
                    sdltTotal = 0;
                } else if (value >= 425000 && value <= 625000) {
                    sdltTotal = (value - 425000)*0.05;
                } else if (value >= 625001 && value <= 925000) {
                    sdltTotal = (value - 250000)*0.05;
                } else if (value >= 925001 && value <= 1499999) {
                    sdltTotal = ((value - 925001)*0.1)+(675000*0.05);
                } else {
                    sdltTotal = ((value - 1499999)*0.12)+((value - 925001)*0.1)+(675000*0.05);
                }
                setStampDutyCost(sdltTotal);
            }
        }
        stampDuty(propValue, ftbCheckBox);
    }, [propValue, depPercent, ftbCheckBox, setDepAmount, setStampDutyCost]);

    // Calculating Interest Cost across the time period [Formula: A=(P(1+r/n)^nt)-P]
    useEffect(() => { 
        var intCost;
        intCost = mortPrinciple*((1+((intRate/100)/12))**(12*fixedTerm));
        intCost = intCost - mortPrinciple;
        setPeriodInterestCost(intCost);
        // Buy cost over fixed term
        const termCost = fixedTerm*sumMonthlyCosts;
        const totalBuyCost = upFrontCosts+termCost+intCost;
        setTimePeriodCost(totalBuyCost);
    }, [fixedTerm, upFrontCosts, sumMonthlyCosts, mortPrinciple, intRate, setPeriodInterestCost, setTimePeriodCost]);

    // Monthly Mortgage Payments
    useEffect(() => {
        const calcDeposit = propValue*(depPercent/100);
        monthlyMortgage(propValue, intRate, mortTerm, calcDeposit, addToMortgage, mortFee);
    }, [propValue, depPercent, intRate, mortTerm, addToMortgage, mortFee]);
    
    // Totals
    useEffect(() => { // upFront cost Sum
        var upfrontCostSum;
        if (addToMortgage !== false) {
            upfrontCostSum = stampDutyCost + legalCost + survCost;
        } else {
            upfrontCostSum = stampDutyCost + legalCost + mortFee + survCost;
        }
        setUpFrontCosts(upfrontCostSum);
    }, [stampDutyCost, legalCost, mortFee, survCost, addToMortgage, setUpFrontCosts]);

    // Monthly cost sum
    useEffect(() => { 
        const monthlyCostSum = (monthlyMaintenance + servCharge + groundRent)*(fixedTerm*12);
        setSumMonthlyCosts(monthlyCostSum);
        setBuyMonthlyCost(mortgagePayment + monthlyMaintenance + servCharge + groundRent);
    }, [monthlyMaintenance, servCharge, groundRent, mortgagePayment, fixedTerm, setBuyMonthlyCost, setSumMonthlyCosts]);

    // Capital repaid
    useEffect(() => {
        const totalMonthlyPayments = mortgagePayment*(fixedTerm*12);
        const capRepaid = totalMonthlyPayments - periodInterestCost;
        setCapitalRepaid(capRepaid);
    }, [fixedTerm, mortgagePayment, periodInterestCost, setCapitalRepaid]);
    
    // Capital Gains
    useEffect(() => { 
        const futureMarketValue = propValue*((1+((growthRate/100)/12))**(12*fixedTerm));
        const capGain = futureMarketValue - propValue;
        setCapitalGains(capGain);
    }, [propValue, fixedTerm, stampDutyCost, setCapitalGains, growthRate]);


    // Event handlers
    const handlePropValue = event => {
        const newPropValue = parseInt(event.target.value);
        setPropValue(newPropValue);
    }

    const handleGrowthRateChange = event => {
        const annualRate = parseFloat(event.target.value);
        setGrowthRate(annualRate);
    }

    // Calculations
    const monthlyMortgage = (pValue, iRate, tYears, dep, addFee, feeValue) => {
        var principle = pValue - dep;
        if (addFee !== false) {
            principle = principle + feeValue;
        }
        const int = (iRate/100)/12;
        const nMonths = tYears*12;
        const intOne = int + 1;
        var monthlyPayment = (((Math.pow(intOne, nMonths))*int)/((Math.pow(intOne, nMonths))-1))*principle;
        monthlyPayment = parseInt(monthlyPayment);
        setMortgagePayment(monthlyPayment);
        setMortPrinciple(principle);
    }

    // VIEW
    return(
        <div className={style.Buying}>
            <form>
                <div className={style.Buy}>
                    <h5>Purchase Property</h5>
                    <div className={style.flexNorm}>
                        <p>Property Value:</p>
                        <input type="number" id="pvalue" name="pvalue" defaultValue={propValue} onChange={handlePropValue}/>
                        <p>Annual growth rate (%):</p>
                        <input type="number" id="pGrowth" name="pGrowth" defaultValue={growthRate} onChange={handleGrowthRateChange}/>
                    </div>
                </div>
                <Mortgage 
                    depPercent={depPercent}
                    setDepPercent={setDepPercent}
                    propValue={propValue}
                    depAmount={depAmount}
                    setDepAmount={setDepAmount}
                    mortTerm={mortTerm}
                    setMortTerm={setMortTerm}
                    intRate={intRate}
                    setIntRate={setIntRate}
                />
                <UpfrontCostsBuy 
                    ftbCheckBox={ftbCheckBox}
                    setFtbCheckBox={setFtbCheckBox}
                    addToMortgage={addToMortgage}
                    setAddToMortgage={setAddToMortgage}
                    legalCost={legalCost}
                    setLegalCost={setLegalCost}
                    mortFee={mortFee}
                    setMortFee={setMortFee}
                    survCost={survCost}
                    setSurvCost={setSurvCost}
                    stampDutyCost={stampDutyCost}
                />
                <MonthlyCostsBuy
                    setMonthlyMaintenance={setMonthlyMaintenance}
                    setGroundRent={setGroundRent}
                    setServCharge={setServCharge}
                    mortgagePayment={mortgagePayment}
                    monthlyMaintenance={monthlyMaintenance}
                    servCharge={servCharge}
                    groundRent={groundRent}
                />
            </form>
        </div>
    );
}

export default Buying;