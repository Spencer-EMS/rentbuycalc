import React, { useEffect } from 'react';
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

    // Calculating Compound interest on BUY savings [Formula: A=(P(1+r/n)^nt)+((PMT((1+r/n)**(nt))-1)/(r/n))]
    useEffect(() => { 
        console.log("Total Compound interest buy: MOUNTED");
        var accruedAmount;
        const remainingSavings = currentSavings - sumUpFrontCosts - depositAmount;
        accruedAmount = remainingSavings*((1+((aer/100)/12))**(12*fixedTerm));
        var rOverN = (aer/100)/12;
        var numerator = (saveBuy*(((1+(rOverN))**(12*fixedTerm))-1));
        accruedAmount = accruedAmount + (numerator/(rOverN));
        setAccruedSavingsBuy(accruedAmount);
        return () => {
            console.log("Total Compound interest buy: UNMOUNTED");
        }
    }, [fixedTerm, currentSavings, aer, sumUpFrontCosts, depositAmount, setAccruedSavingsBuy, saveBuy]);

    // Calculating Compound interest on RENT savings [Formula: A=(P(1+r/n)^nt)+((PMT((1+r/n)**(nt))-1)/(r/n))]
    useEffect(() => { 
        console.log("Total Compound interest rent: MOUNTED");
        var accruedAmount;
        const remainingSavings = currentSavings - upFrontRentCost - securityDeposit;
        accruedAmount = remainingSavings*((1+((aer/100)/12))**(12*fixedTerm));
        var rOverN = (aer/100)/12;
        var numerator = (saveRent*(((1+(rOverN))**(12*fixedTerm))-1));
        accruedAmount = accruedAmount + (numerator/(rOverN));
        setAccruedSavingsRent(accruedAmount);
        return () => {
            console.log("Total Compound interest rent: UNMOUNTED");
        }
    }, [fixedTerm, currentSavings, aer, upFrontRentCost, securityDeposit, setAccruedSavingsRent, saveRent]);

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
                    <label htmlFor="fterm">Time:
                        <select id="fterm" name="fterm" defaultValue={fixedTerm} onChange={handleFtermChange} className={style.dropDown}> 
                            <option type="number" value="1">1 Year</option>
                            <option type="number" value="2">2 Years</option>
                            <option type="number" value="3">3 Years</option>
                            <option type="number" value="4">4 Years</option>
                            <option type="number" value="5">5 Years</option>
                            <option type="number" value="7">7 Years</option>
                            <option type="number" value="10">10 Years</option>
                        </select>
                    </label>
                    <h4>Buying</h4>
                    <p>Upfront costs: £{sumUpFrontCosts.toFixed(0)}</p>
                    <p>Monthly costs: £{sumMonthlyCosts.toFixed(0)}</p>
                    <p>Interest cost: £{periodInterestCost.toFixed(0)}</p>
                    <h5>Sunk costs: £{buyTotalCost.toFixed(0)}</h5>

                    <p>Deposit: £{depositAmount.toFixed(0)}</p>
                    <p>Remaining Savings: £{(currentSavings - sumUpFrontCosts - depositAmount)}</p>
                    <p>Savings: £{accruedSavingsBuy.toFixed(0)}</p>
                    <p>Capital gains: £{capitalGains.toFixed(0)}</p>
                    <p>Capital repaid: £{capitalRepaid.toFixed(0)}</p>
                    <h5>Equity: £{(depositAmount + (currentSavings - sumUpFrontCosts - depositAmount) + accruedSavingsBuy + capitalGains + capitalRepaid).toFixed(0)}</h5>
                    
                    <h4>Renting</h4>
                    <p>Upfront costs: £{upFrontRentCost}</p>
                    <p>Monthly costs: £{rentMonthlyCost.toFixed(0)}</p>
                    <h5>Sunk costs: £{(upFrontRentCost + rentMonthlyCost).toFixed(0)}</h5>
                    <p>Security Deposit: £{securityDeposit.toFixed(0)}</p>
                    <p>Remaining Savings: £{(currentSavings - upFrontRentCost - securityDeposit).toFixed(0)}</p>
                    <p>Savings: £{accruedSavingsRent.toFixed(0)}</p>
                    <h5>Equity: £{((securityDeposit) + (currentSavings - upFrontRentCost - securityDeposit) + accruedSavingsRent).toFixed(0)}</h5>
                </div>
            </div>
        </div>
    );
}

export default Totals;