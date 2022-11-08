import React, { useEffect, useState } from 'react';
import style from './Totals.module.css';

const Totals = ({
        currentSavings,
        depositAmount,
        fixedTerm,
        setFixedTerm,
        sumUpFrontCosts,
        sumMonthlyCosts,
        buyTotalCost,
        periodInterestCost,
        capitalGains,
        rentMonthlyCost,
        upFrontRentCost,
        securityDeposit,
        capitalRepaid, 
        saveBuy,
        saveRent,
        aer,
        accruedSavingsBuy,
        setAccruedSavingsBuy,
        accruedSavingsRent,
        setAccruedSavingsRent
    }) => {

    const [ rentEquity, setRentEquity ] = useState(0);
    const [ buyEquity, setBuyEquity ] = useState(0);
    const [ comparisonMessage, setComparisonMessage ] = useState(0);
    const [ equityDelta, setEquityDelta ] = useState(0);

    // Calculating Compound interest on BUY savings [Formula: A=(P(1+r/n)^nt)+((PMT((1+r/n)**(nt))-1)/(r/n))]
    useEffect(() => { 
        var accruedAmount;
        const remainingSavings = currentSavings - sumUpFrontCosts - depositAmount;
        accruedAmount = remainingSavings*((1+((aer/100)/12))**(12*fixedTerm));
        var rOverN = (aer/100)/12;
        var numerator = (saveBuy*(((1+(rOverN))**(12*fixedTerm))-1));
        accruedAmount = accruedAmount + (numerator/(rOverN));
        setAccruedSavingsBuy(accruedAmount);
    }, [fixedTerm, currentSavings, aer, sumUpFrontCosts, depositAmount, setAccruedSavingsBuy, saveBuy]);

    // Calculating Compound interest on RENT savings [Formula: A=(P(1+r/n)^nt)+((PMT((1+r/n)**(nt))-1)/(r/n))]
    useEffect(() => { 
        var accruedAmount;
        const remainingSavings = currentSavings - upFrontRentCost - securityDeposit;
        accruedAmount = remainingSavings*((1+((aer/100)/12))**(12*fixedTerm));
        var rOverN = (aer/100)/12;
        var numerator = (saveRent*(((1+(rOverN))**(12*fixedTerm))-1));
        accruedAmount = accruedAmount + (numerator/(rOverN));
        setAccruedSavingsRent(accruedAmount);
    }, [fixedTerm, currentSavings, aer, upFrontRentCost, securityDeposit, setAccruedSavingsRent, saveRent]);
    
    useEffect(() => { // Rent Equity
        const totalRentEquity = ((securityDeposit) + (securityDeposit - upFrontRentCost - securityDeposit) + accruedSavingsRent);
        setRentEquity(totalRentEquity);
    }, [securityDeposit, upFrontRentCost, accruedSavingsRent]);

    useEffect(() => { // Buy Equity
        const totalBuyEquity = (depositAmount + (currentSavings - sumUpFrontCosts - depositAmount) + accruedSavingsBuy + capitalGains + capitalRepaid);
        setBuyEquity(totalBuyEquity);
    }, [depositAmount, currentSavings, sumUpFrontCosts, accruedSavingsBuy, capitalGains, capitalRepaid]);

    // Rent vs Buy delta
    useEffect(() => {
        var delta = buyEquity - rentEquity;
        var message;
        if (delta > 0) {
            message = "Buying outperforms Renting by:";
            setEquityDelta(delta);
        } else if (delta === 0) {
            message = "Renting and Buying are equal";
        } else if (delta < 0) {
            message = "Renting outperforms Buying by:";
            setEquityDelta(delta*(-1));
        }
        setComparisonMessage(message);
        
    }, [buyEquity, rentEquity]);

    // Event handlers
    const handleFtermChange = (event) => {
        const newFixedTerm = parseInt(event.target.value);
        setFixedTerm(newFixedTerm);
    }   

    // VIEW
    return(
        <div className={style.Totals}>
            <div className={style.fixSideBar}>  
                <h3>Totals</h3>
                <div className={style.colFlex}>
                    <p>Over:
                        <select id="fterm" name="fterm" defaultValue={fixedTerm} onChange={handleFtermChange} className={style.dropDown}> 
                            <option type="number" value="1">1 Year</option>
                            <option type="number" value="2">2 Years</option>
                            <option type="number" value="3">3 Years</option>
                            <option type="number" value="4">4 Years</option>
                            <option type="number" value="5">5 Years</option>
                            <option type="number" value="7">7 Years</option>
                            <option type="number" value="10">10 Years</option>
                        </select>
                    </p>
                    <p>{comparisonMessage}</p>
                    <p>£{equityDelta.toFixed(0)}</p>
                    <h4>Buying</h4>
                    <p>Upfront costs: £{sumUpFrontCosts.toFixed(0)}</p>
                    <p>Monthly costs: £{sumMonthlyCosts.toFixed(0)}</p>
                    <p>Interest cost: £{periodInterestCost.toFixed(0)}</p>
                    <h5>Sunk costs: £{buyTotalCost.toFixed(0)}</h5>

                    <p>Deposit: £{depositAmount.toFixed(0)}</p>
                    <p>Remaining Savings: £{(currentSavings - sumUpFrontCosts - depositAmount).toFixed(0)}</p>
                    <p>Savings: £{accruedSavingsBuy.toFixed(0)}</p>
                    <p>Capital gains: £{capitalGains.toFixed(0)}</p>
                    <p>Capital repaid: £{capitalRepaid.toFixed(0)}</p>
                    <h5>Equity: £{buyEquity.toFixed(0)}</h5>
                    
                    <h4>Renting</h4>
                    <p>Upfront costs: £{upFrontRentCost}</p>
                    <p>Monthly costs: £{rentMonthlyCost.toFixed(0)}</p>
                    <h5>Sunk costs: £{(upFrontRentCost + rentMonthlyCost).toFixed(0)}</h5>
                    <p>Security Deposit: £{securityDeposit.toFixed(0)}</p>
                    <p>Remaining Savings: £{(currentSavings - upFrontRentCost - securityDeposit).toFixed(0)}</p>
                    <p>Savings: £{accruedSavingsRent.toFixed(0)}</p>
                    <h5>Equity: £{rentEquity.toFixed(0)}</h5>
                </div>
            </div>
        </div>
    );
}

export default Totals;