import React, { useState } from 'react';
import style from './Calculator.module.css';

import Totals from '../Totals/Totals';
import PersonalFinances from '../PersonalFinances/PersonalFinances';
import BuyForm from '../BuyForm/BuyForm';
import RentInput from '../RentInput/RentInput';

const Calculator = () => {

    // input variables BUY
    const [ fixedTerm, setFixedTerm ] = useState(2);

    // Personal Finances
    const [ annualIncome, setAnnualIncome ] = useState(25000);
    const [ currentSavings, setCurrentSavings ] = useState(2000);

    // upfront cost variables BUY
    const [ stampDutyCost, setStampDutyCost ] = useState(0); 

    // readOnly values BUY
    const [ depAmount, setDepAmount ] = useState(0);

    // readOnly values Rent
    const [ securityDeposit, setSecurityDeposit ] = useState(0);
    
    // Totals
    const [ upFrontCosts, setUpFrontCosts ] = useState(0);
    const [ monthlyCosts, setMonthlyCosts ] = useState(0);
    const [ timePeriodCost, setTimePeriodCost ] = useState(0);
    const [ upFrontRentCost, setUpFrontRentCost ] = useState(0);
    const [ rentMonthlyCost, setRentMonthlyCost ] = useState(0);

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
                    depositAmount={depAmount} 
                    stampDuty={stampDutyCost}
                    fixedTerm={fixedTerm}
                    setFixedTerm={setFixedTerm}
                    sumUpFrontCosts={upFrontCosts}
                    sumMonthlyCosts={monthlyCosts}
                    buyTotalCost={timePeriodCost}
                    currentSavings={currentSavings}
                    rentMonthlyCost={rentMonthlyCost}
                    upFrontRentCost={upFrontRentCost}
                    securityDeposit={securityDeposit}
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
                            setFixedTerm={setFixedTerm}
                            stampDutyCost={stampDutyCost}
                            setStampDutyCost={setStampDutyCost}
                            setTimePeriodCost={setTimePeriodCost}
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
                </div>
            </section>
            <section className={style.botSpacer}></section>
        </>
    );
}

export default Calculator;