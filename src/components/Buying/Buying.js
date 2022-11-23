
// Libraries
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// Styling
import style from './Buying.module.css';

// Functions
import calculateStampDuty from '../../functions/calculateStampDuty/calculateStampDuty';
import calculateMortPrinciple from '../../functions/calculateMortPrinciple/calculateMortPrinciple';
import calculateMonthlyMortPayment from '../../functions/calculateMonthlyMortPayment/calculateMonthlyMortPayment';

// Components
import Mortgage from '../Mortgage/Mortgage';
import UpfrontCostsBuy from '../UpfrontCostsBuy/UpfrontCostsBuy';
import MonthlyCostsBuy from '../MonthlyCostsBuy/MonthlyCostsBuy';


const Buying = ({
        propValue,
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
        setCapitalRepaid,
        ftbCheckBox,
        saveBuy,
        setTotalSpendBuy
    }) => {

    // input variables
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
    const [ editBool, setEditBool ] = useState(false);
    
    // Stamp Duty & Deposit
    useEffect(() => {
        setDepAmount(propValue*(depPercent/100));
        var mortgagePrinciple = propValue-(propValue*(depPercent/100));
        setMortPrinciple(mortgagePrinciple);
        const stampDuty = calculateStampDuty(propValue, ftbCheckBox, setStampDutyCost);
        setStampDutyCost(stampDuty);
    }, [propValue, depPercent, ftbCheckBox, setDepAmount, setStampDutyCost]);

    // Calculating Interest Cost across the time period [Formula: A=(P(1+r/n)^nt)-P]
    useEffect(() => { 
        const intCost = (mortPrinciple*((1+((intRate/100)/12))**(12*fixedTerm)))-mortPrinciple;
        setPeriodInterestCost(intCost);
    }, [fixedTerm, mortPrinciple, intRate, setPeriodInterestCost]);

    // Buy cost over fixed term
    useEffect(() => { 
        const termCost = fixedTerm*sumMonthlyCosts;
        const totalBuyCost = upFrontCosts+termCost+periodInterestCost;
        setTimePeriodCost(totalBuyCost);
    }, [periodInterestCost, fixedTerm, upFrontCosts, sumMonthlyCosts, setTimePeriodCost]);

    // Total Spend Buy
    useEffect(() => {  
        const monthlyCosts = monthlyMaintenance + servCharge + groundRent + mortgagePayment + saveBuy;
        const costOverTime = (monthlyCosts*(fixedTerm*12));
        const totalSpend = costOverTime + upFrontCosts + depAmount;
        setTotalSpendBuy(totalSpend);
    }, [saveBuy, monthlyMaintenance, servCharge, groundRent, mortgagePayment, upFrontCosts, depAmount, fixedTerm, setTotalSpendBuy]);

    // Monthly Mortgage Payments
    useEffect(() => {
        const calcDeposit = propValue*(depPercent/100);
        const monthlyPayment = calculateMonthlyMortPayment(propValue, intRate, mortTerm, calcDeposit, addToMortgage, mortFee);
        const principle = calculateMortPrinciple(propValue, calcDeposit, addToMortgage, mortFee);
        setMortgagePayment(monthlyPayment);
        setMortPrinciple(principle);
    }, [propValue, depPercent, intRate, mortTerm, addToMortgage, mortFee]);
    
    // Totals
    useEffect(() => { // upFront cost Sum
        // console.log("addToMortgage", addToMortgage);
        if (addToMortgage !== false) {
            const upfrontCostSum = stampDutyCost + legalCost + survCost;
            setUpFrontCosts(upfrontCostSum);
        } else {
            const upfrontCostSum = stampDutyCost + legalCost + mortFee + survCost;
            setUpFrontCosts(upfrontCostSum);
        }  
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
    }, [propValue, fixedTerm, setCapitalGains, growthRate]);


    // Event handlers
    const handleGrowthRateChange = event => {
        const annualRate = parseFloat(event.target.value);
        setGrowthRate(annualRate);
    }

    const handleEditBoolChange = () => {
        setEditBool(!editBool);
    }

    // Calculations
    
    // Monthly mortgage repayment M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    // const calculateMonthlyMortPayment = (pValue, iRate, tYears, dep, addFee, feeValue) => {
    //     var principle = pValue - dep;
    //     if (addFee !== false) {
    //         principle = principle + feeValue;
    //     }
    //     const int = (iRate/100)/12;
    //     const nMonths = tYears*12;
    //     const intOne = int + 1;
    //     const numerator = (int*(intOne**nMonths));
    //     const denominator = ((int + 1)**(nMonths)-1);
    //     var monthlyPayment = principle*(numerator/denominator);
    //     return monthlyPayment;
    // }

    // const calculateMortPrinciple = (pValue, dep, addFee, feeValue) => {
    //     var principle = pValue - dep;
    //     if (addFee !== false) {
    //         principle = principle + feeValue;
    //     }
    //     return principle;
    // }


    // VIEW
    return(
        <div className={style.Buying}>
            <div className={style.BuyingWrapper}>
                <div className={style.Buy}>
                    <h4>Purchase Property</h4>
                    <div className={style.flexNorm}>
                        <p>Property Value:</p>
                        <input type="number" id="pvalue" name="pvalue" value={propValue} readOnly/>
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
                <div className={editBool ? style.closeBuy : style.viewBuy }>
                    <p>Click to edit monthly & upfront costs</p>
                    <button onClick={handleEditBoolChange}>v</button>
                </div>
                {editBool ? 
                    <>
                        <UpfrontCostsBuy 
                            addToMortgage={addToMortgage}
                            setAddToMortgage={setAddToMortgage}
                            legalCost={legalCost}
                            setLegalCost={setLegalCost}
                            mortFee={mortFee}
                            setMortFee={setMortFee}
                            survCost={survCost}
                            setSurvCost={setSurvCost}
                            stampDutyCost={stampDutyCost}
                            ftbCheckBox={ftbCheckBox}
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
                    </>
                :
                <></>
                }
            </div>
        </div>
    );
}

export default Buying;