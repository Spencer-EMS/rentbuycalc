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
        setAccruedSavingsRent,
        totalSpendBuy,
        totalSpendRent
    }) => {

    // const [ rentEquity, setRentEquity ] = useState(0);
    const [ netPositionRent, setNetPositionRent ] = useState(0);
    const [ buyEquity, setBuyEquity ] = useState(0);
    const [ netGainBuy, setNetGainBuy ] = useState(0);
    const [ netGainRent, setNetGainRent ] = useState(0);
    const [ netPositionBuy, setNetPositionBuy ] = useState(0);
    const [ comparisonMessage, setComparisonMessage ] = useState("");
    const [ equityDelta, setEquityDelta ] = useState(0);
    const [ rentInterestEarned, setRentInterestEarned ] = useState(0);
    const [ buyInterestEarned, setBuyInterestEarned ] = useState(0);
    const [ buyAmountSaved, setBuyAmountSaved ] = useState(0);
    const [ rentAmountSaved, setRentAmountSaved ] = useState(0);

    // TESTING
    // const [ buyRoi, setBuyRoi ] = useState(0);

    // useEffect(() => {  // Buy ROI 
    //     const roi = (totalSpendBuy + );
    //     setTotalSpend(totalRentEquity);
    // }, []);

    // Calculating Compound interest on BUY savings [Formula: A=(P(1+r/n)^nt)+((PMT((1+r/n)**(nt))-1)/(r/n))]
    useEffect(() => { 
        var accruedAmount;
        const remainingSavings = currentSavings - sumUpFrontCosts - depositAmount;
        // console.log("remainingSavings", remainingSavings);
        accruedAmount = remainingSavings*((1+((aer/100)/12))**(12*fixedTerm));
        // console.log("accruedAmount", accruedAmount);
        const interestEarned = accruedAmount - remainingSavings;
        var rOverN = (aer/100)/12;
        var numerator = (saveBuy*(((1+(rOverN))**(12*fixedTerm))-1));
        accruedAmount = accruedAmount + (numerator/(rOverN));
        setAccruedSavingsBuy(accruedAmount);
        setBuyInterestEarned(interestEarned);
    }, [fixedTerm, currentSavings, aer, sumUpFrontCosts, depositAmount, setAccruedSavingsBuy, saveBuy]);

    // Calculating Compound interest on RENT savings [Formula: A=(P(1+r/n)^nt)  +  ((PMT((1+r/n)**(nt))-1)/(r/n))]
    useEffect(() => { 
        var accruedAmount;
        const remainingSavings = currentSavings - upFrontRentCost - securityDeposit;
        // console.log("remainingSavings", remainingSavings);
        accruedAmount = remainingSavings*((1+((aer/100)/12))**(12*fixedTerm));
        const interestEarned = accruedAmount - remainingSavings;
        var rOverN = (aer/100)/12;
        var numerator = (saveRent*(((1+(rOverN))**(12*fixedTerm))-1));
        accruedAmount = accruedAmount + (numerator/rOverN);
        // console.log("accruedAmount", accruedAmount);
        setAccruedSavingsRent(accruedAmount);
        setRentInterestEarned(interestEarned);
    }, [fixedTerm, currentSavings, aer, upFrontRentCost, securityDeposit, setAccruedSavingsRent, saveRent]);
    
    // useEffect(() => { // Rent Equity
    //     const totalRentEquity = ((securityDeposit) + (currentSavings - upFrontRentCost - securityDeposit) + accruedSavingsRent);
    //     setRentEquity(totalRentEquity);
    // }, [securityDeposit, currentSavings, upFrontRentCost, accruedSavingsRent]);

    useEffect(() => { // Buy Equity
        const totalBuyEquity = (depositAmount + capitalGains + capitalRepaid);
        setBuyEquity(totalBuyEquity);
    }, [depositAmount, currentSavings, sumUpFrontCosts, accruedSavingsBuy, capitalGains, capitalRepaid]);

    useEffect(() => { // Buy Amount Saved
        const buyAmountSaved = (currentSavings - sumUpFrontCosts - depositAmount)+(saveBuy*(fixedTerm*12));
        setBuyAmountSaved(buyAmountSaved);
    }, [depositAmount, currentSavings, sumUpFrontCosts, saveBuy, fixedTerm]);

    useEffect(() => { // Net Position Buy 
        const netPosition = ((depositAmount + capitalGains + capitalRepaid) + accruedSavingsBuy);
        setNetPositionBuy(netPosition);
    }, [depositAmount, capitalGains , capitalRepaid, accruedSavingsBuy, setNetPositionBuy]);

    useEffect(() => { // Net gain/loss Buy
        const netGainLoss = ( netPositionBuy - totalSpendBuy );
        setNetGainBuy(netGainLoss);
    }, [totalSpendBuy, netPositionBuy, setNetGainBuy]);

    useEffect(() => { // Rent Amount Saved
        const rentAmountSaved = (currentSavings - upFrontRentCost - securityDeposit)+(saveRent*(fixedTerm*12));
        setRentAmountSaved(rentAmountSaved);
    }, [currentSavings, upFrontRentCost, securityDeposit, saveRent, fixedTerm]);

    useEffect(() => { // Net Position Rent 
        const netPosition = ((securityDeposit) + accruedSavingsRent);
        setNetPositionRent(netPosition);
    }, [securityDeposit, currentSavings, upFrontRentCost, accruedSavingsRent, setNetPositionRent]);

    useEffect(() => { // Net gain/loss Rent
        const netGainLoss = ( netPositionRent - totalSpendRent );
        setNetGainRent(netGainLoss);
    }, [totalSpendRent, netPositionRent, setNetGainRent]);


    // Rent vs Buy delta
    useEffect(() => {
        var delta = netGainBuy - netGainRent;
        var message;
        if (delta > 0) {
            message = "Buying outperforms Renting";
            setEquityDelta(delta);
        } else if (delta === 0) {
            message = "Renting and Buying are equal";
        } else if (delta < 0) {
            message = "Renting outperforms Buying";
            setEquityDelta(delta*(-1));
        }
        setComparisonMessage(message);
        
    }, [netGainBuy, netGainRent]);

    // Event handlers
    const handleFtermChange = (event) => {
        const newFixedTerm = parseInt(event.target.value);
        setFixedTerm(newFixedTerm);
    }   

    // VIEW
    return(
        <div className={style.Totals}>
            <div className={style.fixSideBar}>  
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
                    <div className={style.flexWrap}>
                        <p>by:</p>
                        <h3>{new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(equityDelta)}</h3>
                    </div>

                    <h4>Buying</h4>
                    
                    <p>Upfront costs: 
                        {new Intl.NumberFormat('gb-GB', 
                            {
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0 
                            }
                        ).format(sumUpFrontCosts)}
                    </p>
                    <p>Monthly costs: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(sumMonthlyCosts)}
                    </p>
                    <p>Interest cost: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0 
                            }
                        ).format(periodInterestCost)}
                    </p>
                    <h6>Sunk costs: 
                        {new Intl.NumberFormat('gb-GB', 
                            {  
                                style: 'currency', 
                                currency: 'GBP' 
                            }
                        ).format(buyTotalCost)}
                    </h6>

                    <p>Deposit: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0 
                            }
                        ).format(depositAmount)}
                    </p>
                    <p>Capital repaid: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(capitalRepaid)}
                    </p>
                    <p>Capital gains: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(capitalGains)}
                    </p>
                    <h6>Equity: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP' 
                            }
                        ).format(buyEquity)}
                    </h6>

                    <p>Amount saved: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(buyAmountSaved)}
                    </p>
                    <p>Interest earned: 
                        {new Intl.NumberFormat('gb-GB', 
                            {
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(buyInterestEarned)}
                    </p>
                    <h6>Total Savings: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency',
                                currency: 'GBP' 
                            }
                        ).format(accruedSavingsBuy)}
                    </h6>

                    <p>Total spend: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(totalSpendBuy)}
                    </p>
                    <p>Net position: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(netPositionBuy)}
                    </p>
                    <h6>Net gain/loss: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP' 
                            }
                        ).format(netGainBuy)}
                    </h6>
                    
                    <h4>Renting</h4>
                    
                    <p>Upfront costs: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(upFrontRentCost)}
                    </p>
                    <p>Rent paid: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(rentMonthlyCost)}
                    </p>
                    <h6>Sunk costs: 
                        {new Intl.NumberFormat('gb-GB', 
                            {
                                style: 'currency', 
                                currency: 'GBP' 
                            }
                        ).format((upFrontRentCost + rentMonthlyCost))}
                    </h6>
                    <p>Amount saved: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(rentAmountSaved)}
                    </p>
                    <p>Interest earned: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(rentInterestEarned)}
                    </p>
                    <h6>Total savings: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP' 
                            }
                        ).format(accruedSavingsRent)}
                    </h6>

                    <p>Total Spend: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(totalSpendRent)}
                    </p>
                    <p>Net position: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP', 
                                minimumFractionDigits: 0, 
                                maximumFractionDigits: 0 
                            }
                        ).format(netPositionRent)}
                    </p>
                    <h6>Net gain/loss: 
                        {new Intl.NumberFormat('gb-GB', 
                            { 
                                style: 'currency', 
                                currency: 'GBP' 
                            }
                        ).format(netGainRent)}
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Totals;