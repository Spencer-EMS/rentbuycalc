import React, { useState } from 'react';
import style from './Calculator.module.css';

import Totals from '../Totals/Totals';
import Introduction from '../Introduction/Introduction';
import UserInputs from '../UserInputs/UserInputs';
import Buying from '../Buying/Buying';
import Renting from '../Renting/Renting';
import Saving from '../Saving/Saving';
import Calculations from '../Calculations/Calculations';

const Calculator = () => {

    // time period
    const [ fixedTerm, setFixedTerm ] = useState(2);

    // Buy property value
    const [ propValue, setPropValue ] = useState(325000);

    // Rent per month
    const [ rent, setRent ] = useState(1200);

    // Current Savings/Equity
    const [ currentSavings, setCurrentSavings ] = useState(40000);

    // Stamp Duty
    const [ ftbCheckBox, setFtbCheckBox ] = useState(false);
    const [ stampDutyCost, setStampDutyCost ] = useState(0); 

    // readOnly values 
    const [ depAmount, setDepAmount ] = useState(0);
    const [ securityDeposit, setSecurityDeposit ] = useState(0);
    
    // Totals

    // BUY
    const [ totalSpendBuy, setTotalSpendBuy ] = useState(0);
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
                    totalSpendBuy={totalSpendBuy}
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
                    <Introduction />
                    <UserInputs 
                        propValue={propValue}
                        setPropValue={setPropValue}
                        rent={rent}
                        setRent={setRent}
                        currentSavings={currentSavings}
                        setCurrentSavings={setCurrentSavings}
                        ftbCheckBox={ftbCheckBox}
                        setFtbCheckBox={setFtbCheckBox}
                    />
                    <div className={style.buySection}>
                        <Buying 
                            propValue={propValue}
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
                            ftbCheckBox={ftbCheckBox}
                            setTotalSpendBuy={setTotalSpendBuy}
                        />
                    </div>
                    <div className={style.rentSection}>
                        <Renting 
                            rent={rent}
                            setRent={setRent}
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
                            rent={rent}
                            buyMonthlyCost={buyMonthlyCost}
                            aer={aer}
                            setAer={setAer}
                        />
                    </div>
                    <Calculations />
                </div> 
            </section>
            <section className={style.botSpacer}></section>
        </>
    );
}

export default Calculator;