import React, { useState, useEffect } from 'react';
import style from './BuyForm.module.css';

const BuyForm = (props) => {

    // input variables 
    const [ propValue, setPropValue ] = useState(250000);
    const [ depPercent, setDepPercent ] = useState(10);
    // const [ fixedTerm, setFixedTerm ] = useState(2);
    const [ mortTerm, setMortTerm ] = useState(25);
    const [ intRate, setIntRate ] = useState(6.25);

    // readOnly values
    // const [ depAmount, setDepAmount ] = useState(0);
    const [ mortPrinciple, setMortPrinciple ] = useState(0);
    
    // upfront cost variables
    // const [ stampDutyCost, setStampDutyCost ] = useState(0); 
    const [ legalCost, setLegalCost ] = useState(2000);
    const [ survCost, setSurvCost ] = useState(695);
    const [ mortFee, setMortFee ] = useState(995);

    // Monthly cost variables
    const [ mortgagePayment, setMortgagePayment ] = useState(0);
    const [ monthlyMaintenance, setMonthlyMaintenance ] = useState(120);
    const [ servCharge, setServCharge ] = useState(0);
    const [ groundRent, setGroundRent ] = useState(0);

    // Booleans
    const [ addToMortgage, setAddToMortgage ] = useState(false);
    const [ ftbCheckBox, setFtbCheckBox ] = useState(false);

    
    // Stamp Duty & Deposit
    useEffect(() => {
        props.setDepAmount(propValue*(depPercent/100));
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
                props.setStampDutyCost(sdltTotal);
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
                props.setStampDutyCost(sdltTotal);
            }
        }
        stampDuty(propValue, ftbCheckBox);
    }, [propValue, ftbCheckBox, depPercent, props]);


    // Monthly Mortgage Payments
    useEffect(() => {
        const calcDeposit = propValue*(depPercent/100);
        monthlyMortgage(propValue, intRate, mortTerm, calcDeposit, addToMortgage, mortFee);
    }, [propValue, depPercent, intRate, mortTerm, addToMortgage, mortFee]);
    
    // Totals
    useEffect(() => { // upFront cost Sum
        var upfrontCostSum;
        if (addToMortgage !== false) {
            upfrontCostSum = props.stampDutyCost + legalCost + survCost;
        } else {
            upfrontCostSum = props.stampDutyCost + legalCost + mortFee + survCost;
        }
        props.setUpFrontCosts(upfrontCostSum);
    }, [props, legalCost, mortFee, survCost, addToMortgage]);

    useEffect(() => { // Monthly cost sum
        const monthlyCostSum = mortgagePayment + monthlyMaintenance + servCharge + groundRent;
        props.setMonthlyCosts(monthlyCostSum);
    }, [mortgagePayment, monthlyMaintenance, servCharge, groundRent, props]);
    
    useEffect(() => { // Buy Cost over Fixed Term
        const termCost = props.fixedTerm*props.monthlyCosts;
        var totalBuyCost = props.upFrontCosts+termCost;
        props.setTimePeriodCost(totalBuyCost);
    }, [props]);


    // Event handlers
    const handlePropValue = event => {
        const newPropValue = parseInt(event.target.value);
        setPropValue(newPropValue);
    }

    const handleCheckChange = () => { 
        setFtbCheckBox(!ftbCheckBox);
    }

    const handleDepChange = event => { 
        const newDepPerc = parseInt(event.target.value);
        setDepPercent(newDepPerc);
        props.setDepAmount((newDepPerc/100)*propValue);
    }

    const handleDepAmountChange = event => {
        var newDepAmount = parseInt(event.target.value);
        props.setDepAmount(newDepAmount);
        var newDepPerc = newDepAmount/propValue;
        newDepPerc = (newDepPerc*100).toFixed(1);
        setDepPercent(newDepPerc);
    }

    const handleFtermChange = (event) => {
        const newFixedTerm = parseInt(event.target.value);
        props.setFixedTerm(newFixedTerm);
    }

    const handleMortTermChange = (event) => {
        const newMortTerm = parseInt(event.target.value);
        setMortTerm(newMortTerm);
    }

    const handleIntChange = (event) => {
        const newIntRate = parseInt(event.target.value);
        setIntRate(newIntRate);
    }

    // Upfront Cost handlers
    const handleLegalCostChange = (event) => {
        var newLegalCost = parseInt(event.target.value);
        setLegalCost(newLegalCost);
    }

    
    const handleAddToMortgage = () => { 
        setAddToMortgage(!addToMortgage);
    }

    const handleMortFeeChange = (event) => {
        const newMortFee = parseInt(event.target.value);
        setMortFee(newMortFee);
    }
    
    const handleSurvCostChange = (event) => {
        const newSurvCost = parseInt(event.target.value);
        setSurvCost(newSurvCost);
    }


    // Monthly Cost Handlers
    const handleGroundRentChange = (event) => {
        const newGRent = parseInt(event.target.value);
        setGroundRent(newGRent);
    }

    const handleServChargeChange = (event) => {
        const newServCharge = parseInt(event.target.value);
        setServCharge(newServCharge);
    }

    const handleMaintenanceChange = (event) => {
        var newMaintCost = parseInt(event.target.value);
        setMonthlyMaintenance(newMaintCost);
    }

    


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


    return(
        <form>
            <h3>Buying</h3>
            <h5>Purchase Property</h5>
            <div className={style.flexNorm}>
                <label htmlFor="pvalue">Property Value:
                    <input type="number" id="pvalue" name="pvalue" defaultValue={propValue} onChange={handlePropValue}/>
                </label>
                <label htmlFor="fterm">Fixed term:
                    <select id="fterm" name="fterm" defaultValue={props.fixedTerm} onChange={handleFtermChange} className={style.dropDown}> 
                        <option type="number" value="1">1 Year</option>
                        <option type="number" value="2">2 Years</option>
                        <option type="number" value="3">3 Years</option>
                        <option type="number" value="4">4 Years</option>
                        <option type="number" value="5">5 Years</option>
                    </select>
                </label>
            </div>

            <h5>Upfront costs</h5>
            <div className={style.flexNorm}>
                <label htmlFor="lcost">Stamp duty: 
                    <div className={style.stampFlex}>
                        <p>First time buyer?</p>
                        <input type="checkbox" id="ftbCheck" name="ftbCheck" onChange={handleCheckChange} defaultValue={ftbCheckBox}/>
                    </div>
                    <input type="number" id="lcost" name="lcost" readOnly value={props.stampDutyCost.toFixed(0)}/>
                </label>
                <label htmlFor="mortgageFees">Mortgage fee:
                    <div className={style.stampFlex}>
                        <p>Add to mortgage</p>
                        <input type="checkbox" id="mortFee" name="mortFee" onChange={handleAddToMortgage} defaultValue={addToMortgage}/>
                    </div>
                    <input type="number" id="mfees" name="mfees" defaultValue={mortFee} onChange={handleMortFeeChange}/>
                </label>
            </div>
            <div className={style.flexNorm}>
                <label htmlFor="lcost">Legal:
                    <input type="number" id="lcost" name="lcost" defaultValue={legalCost} onChange={handleLegalCostChange}/>
                </label>
                <label htmlFor="scost">Surveyor:
                    <input type="number" id="scost" name="scost" defaultValue={survCost} onChange={handleSurvCostChange}/>
                </label>
            </div>


            <h5>Mortgage</h5>
            <div className={style.flexNorm}>
                <label htmlFor="propValueRef">Property Value:
                    <input readOnly type="number" id="propValueRef" name="propValueRef" value={propValue}/>
                </label>
                <label htmlFor="princ">Principle:
                    <input readOnly type="number" id="princ" name="princ" value={mortPrinciple}/>
                </label>
            </div>
            <div className={style.flexNorm}>
                <label htmlFor="dperc">Deposit %:
                    <input type="number" id="dperc" name="dperc" value={depPercent} onChange={handleDepChange}/>
                </label>
                <label htmlFor="dvalue">Deposit:
                    <input type="number" id="deposit" name="deposit" value={props.depAmount} onChange={handleDepAmountChange}/>
                </label>
            </div>
            <div className={style.flexNorm}>
                <label htmlFor="dperc">Mortgage term:
                    <input type="number" id="dperc" name="dperc" defaultValue={mortTerm} onChange={handleMortTermChange}/>
                </label>
                <label htmlFor="irate">Interest rate:
                    <input type="number" id="irate" name="irate" defaultValue={intRate} onChange={handleIntChange}/>
                </label>
            </div>
            
            <h5>Monthly costs</h5>
            <div className={style.flexNorm}>
                <label htmlFor="mPayment">Mortgage Payment:
                    <input readOnly type="number" id="mPayment" name="mPayment" value={mortgagePayment.toFixed(2)}/>
                </label>
                <label htmlFor="grent">Maintenance:
                    <input type="number" id="grent" name="grent" defaultValue={monthlyMaintenance} onChange={handleMaintenanceChange}/>
                </label>
            </div>
            <div className={style.flexNorm}>
                <label htmlFor="grent">Ground rent:
                    <input type="number" id="grent" name="grent" defaultValue={groundRent} onChange={handleGroundRentChange}/>
                </label>
                <label htmlFor="scharge">Service charge:
                    <input type="number" id="scharge" name="scharge" defaultValue={servCharge} onChange={handleServChargeChange}/>
                </label> 
            </div>
        </form>

    );
}

export default BuyForm;