import React, { useState } from 'react';
import style from './Calculator.module.css';

import Totals from '../Totals/Totals';
import PersonalFinances from '../PersonalFinances/PersonalFinances';
import BuyForm from '../BuyForm/BuyForm';
import RentInput from '../RentInput/RentInput';
import Saving from '../Saving/Saving';

const Calculator = () => {

    // time period
    const [ fixedTerm, setFixedTerm ] = useState(2);

    // Personal Finances
    const [ annualIncome, setAnnualIncome ] = useState(75000);
    const [ currentSavings, setCurrentSavings ] = useState(30000);

    // upfront cost variables BUY
    const [ stampDutyCost, setStampDutyCost ] = useState(0); 

    // readOnly values BUY
    const [ depAmount, setDepAmount ] = useState(0);

    // readOnly values Rent
    const [ securityDeposit, setSecurityDeposit ] = useState(0);
    
    // Totals

    // BUY
    const [ upFrontCosts, setUpFrontCosts ] = useState(0);
    const [ monthlyCosts, setMonthlyCosts ] = useState(0);
    const [ timePeriodCost, setTimePeriodCost ] = useState(0);
    const [ periodInterestCost, setPeriodInterestCost ] = useState(0);
    const [ capitalGains, setCapitalGains ] = useState(0);
    const [ capitalRepaid, setCapitalRepaid ] = useState(0);

    // RENT
    const [ upFrontRentCost, setUpFrontRentCost ] = useState(0);
    const [ rentMonthlyCost, setRentMonthlyCost ] = useState(0);
    const [ accruedSavingsRent, setAccruedSavingsRent ] = useState(0);

    // SAVING
    const [ saveBuy, setSaveBuy ] = useState(0);
    const [ saveRent, setSaveRent ] = useState(0);
    const [ aer, setAer ] = useState(4.5); 
    const [ accruedSavingsBuy, setAccruedSavingsBuy ] = useState(0);
    
    // Booleans
    const [ buyInputBool, setBuyInputBool ] = useState(false);
    const [ rentInputButton, setRentInputButton ] = useState(false);

    // Event handlers
    const handleBuyButton = () => {
        setBuyInputBool(!buyInputBool);
    }

    const handleRentButton = () => {
        setRentInputButton(!rentInputButton);
    }

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
                    sumMonthlyCosts={monthlyCosts}
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
                <PersonalFinances 
                    annualIncome={annualIncome} 
                    setAnnualIncome={setAnnualIncome}
                    currentSavings={currentSavings}
                    setCurrentSavings={setCurrentSavings}
                />
                <div className={style.buySection}>
                    <button onClick={handleBuyButton}>
                    <div className={style.buyingFlex}>
                        <h3>Buying</h3>
                    </div>
                    </button>
                    {/* {buyInputBool ?  */}
                        <BuyForm 
                            monthlyCosts={monthlyCosts}
                            setMonthlyCosts={setMonthlyCosts}
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
                    {/* //     :
                    //     <></>
                    // } */}
                </div>
                <div className={style.rentSection}>
                    <button onClick={handleRentButton}>
                        <div  className={style.buyingFlex}>
                            <h3>Renting</h3>
                        </div>
                    </button>
                    {/* {rentInputButton ? */}
                        <RentInput 
                            rentMonthlyCost={rentMonthlyCost}
                            setRentMonthlyCost={setRentMonthlyCost}
                            fixedTerm={fixedTerm}
                            upFrontRentCost={upFrontRentCost}
                            setUpFrontRentCost={setUpFrontRentCost}
                            securityDeposit={securityDeposit}
                            setSecurityDeposit={setSecurityDeposit}
                        />
                    {/* :
                        <></>
                    } */}
                    </div>
                    <div>
                        <button>
                            <div  className={style.buyingFlex}>
                                <h3>Saving</h3>
                            </div>
                        </button>
                        <Saving
                            fixedTerm={fixedTerm}
                            saveBuy={saveBuy}
                            setSaveBuy={setSaveBuy}
                            saveRent={saveRent}
                            setSaveRent={setSaveRent}
                            rentMonthlyCost={rentMonthlyCost}
                            monthlyCosts={monthlyCosts}
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