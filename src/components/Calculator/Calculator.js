import React, { useState } from 'react';
import style from './Calculator.module.css';

import Totals from '../Totals/Totals';
import CurrentPosition from '../CurrentPosition/CurrentPosition';
import Buying from '../Buying/Buying';
import Renting from '../Renting/Renting';
import Saving from '../Saving/Saving';

const Calculator = () => {

    // time period
    const [ fixedTerm, setFixedTerm ] = useState(2);

    // Current Savings/Equity
    const [ currentSavings, setCurrentSavings ] = useState(30000);

    // Stamp Duty
    const [ stampDutyCost, setStampDutyCost ] = useState(0); 

    // readOnly values 
    const [ depAmount, setDepAmount ] = useState(0);
    const [ securityDeposit, setSecurityDeposit ] = useState(0);
    
    // Totals

    // BUY
    const [ upFrontCosts, setUpFrontCosts ] = useState(0);
    const [ sumMonthlyCosts, setSumMonthlyCosts ] = useState(0);
    const [ timePeriodCost, setTimePeriodCost ] = useState(0);
    const [ periodInterestCost, setPeriodInterestCost ] = useState(0);
    const [ capitalGains, setCapitalGains ] = useState(0);
    const [ capitalRepaid, setCapitalRepaid ] = useState(0);
    const [ buyMonthlyCost, setBuyMonthlyCost ] = useState(0);

    // RENT
    const [ upFrontRentCost, setUpFrontRentCost ] = useState(0);
    const [ rentMonthlyCost, setRentMonthlyCost ] = useState(0);
    const [ accruedSavingsRent, setAccruedSavingsRent ] = useState(0);

    // SAVING
    const [ saveBuy, setSaveBuy ] = useState(0);
    const [ saveRent, setSaveRent ] = useState(0);
    const [ aer, setAer ] = useState(4.5); 
    const [ accruedSavingsBuy, setAccruedSavingsBuy ] = useState(0);

    return(
        <>
            <section className={style.Calculator}>
                <Totals 
                    currentSavings={currentSavings}
                    depositAmount={depAmount} 
                    stampDuty={stampDutyCost}
                    fixedTerm={fixedTerm}
                    setFixedTerm={setFixedTerm}
                    sumUpFrontCosts={upFrontCosts}
                    sumMonthlyCosts={sumMonthlyCosts}
                    buyTotalCost={timePeriodCost}
                    periodInterestCost={periodInterestCost}
                    capitalGains={capitalGains}
                    rentMonthlyCost={rentMonthlyCost}
                    upFrontRentCost={upFrontRentCost}
                    securityDeposit={securityDeposit}
                    capitalRepaid={capitalRepaid}
                    saveBuy={saveBuy}
                    saveRent={saveRent}
                    aer={aer}
                    accruedSavingsBuy={accruedSavingsBuy}
                    setAccruedSavingsBuy={setAccruedSavingsBuy}
                    accruedSavingsRent={accruedSavingsRent}
                    setAccruedSavingsRent={setAccruedSavingsRent}
                />
                <div className={style.colFlex}>
                    <CurrentPosition 
                        currentSavings={currentSavings}
                        setCurrentSavings={setCurrentSavings}
                    />
                    <div className={style.buySection}>
                        <Buying 
                            sumMonthlyCosts={sumMonthlyCosts}
                            setSumMonthlyCosts={setSumMonthlyCosts}
                            setBuyMonthlyCost={setBuyMonthlyCost}
                            upFrontCosts={upFrontCosts}
                            setUpFrontCosts={setUpFrontCosts}
                            depAmount={depAmount}
                            setDepAmount={setDepAmount}
                            fixedTerm={fixedTerm}
                            stampDutyCost={stampDutyCost}
                            setStampDutyCost={setStampDutyCost}
                            setPeriodInterestCost={setPeriodInterestCost}
                            setTimePeriodCost={setTimePeriodCost}
                            setCapitalGains={setCapitalGains}
                            periodInterestCost={periodInterestCost}
                            setCapitalRepaid={setCapitalRepaid}
                        />
                    </div>
                    <div className={style.rentSection}>
                        <Renting 
                            setRentMonthlyCost={setRentMonthlyCost}
                            fixedTerm={fixedTerm}
                            setUpFrontRentCost={setUpFrontRentCost}
                            securityDeposit={securityDeposit}
                            setSecurityDeposit={setSecurityDeposit}
                        />
                    </div>
                    <div>
                        <Saving
                            fixedTerm={fixedTerm}
                            saveBuy={saveBuy}
                            setSaveBuy={setSaveBuy}
                            saveRent={saveRent}
                            setSaveRent={setSaveRent}
                            rentMonthlyCost={rentMonthlyCost}
                            buyMonthlyCost={buyMonthlyCost}
                            aer={aer}
                            setAer={setAer}
                        />
                    </div>
                </div> 
            </section>
            <section className={style.botSpacer}></section>
        </>
    );
}

export default Calculator;