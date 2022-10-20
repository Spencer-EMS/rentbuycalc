import React, { useState } from 'react';
import style from './Calculator.module.css';

import Totals from '../Totals/Totals';
import PersonalFinances from '../PersonalFinances/PersonalFinances';
import BuyForm from '../BuyForm/BuyForm';
import RentInput from '../RentInput/RentInput';

const Calculator = () => {

    // input variables 
    const [ fixedTerm, setFixedTerm ] = useState(0);

    // Personal Finances
    const [ annualIncome, setAnnualIncome ] = useState(0);

    // upfront cost variables
    const [ stampDutyCost, setStampDutyCost ] = useState(0); 

    // readOnly values
    const [ depAmount, setDepAmount ] = useState(0);
    
    // Totals
    const [ upFrontCosts, setUpFrontCosts ] = useState(0);
    const [ monthlyCosts, setMonthlyCosts ] = useState(0);
    const [ timePeriodCost, setTimePeriodCost ] = useState(0);

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
                    fixedT={fixedTerm}
                    sumUpFrontCosts={upFrontCosts}
                    sumMonthlyCosts={monthlyCosts}
                    buyTotalCost={timePeriodCost}
                />
                <div className={style.colFlex}>
                <PersonalFinances 
                    annualIncome={annualIncome} 
                    setAnnualIncome={setAnnualIncome}
                />
                <div className={style.buySection}>
                    <button onClick={handleBuyButton}>
                    <div  className={style.buyingFlex}>
                        <h3>Buying</h3>
                        <p>V</p>
                    </div>
                    </button>
                    {buyInputBool ? 
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
                    :
                        <></>
                    }
                </div>
                <div className={style.rentSection}>
                    <button onClick={handleRentButton}>
                        <div  className={style.buyingFlex}>
                            <h3>Renting</h3>
                            <p>V</p>
                        </div>
                    </button>
                    {rentInputButton ?
                        <RentInput />
                    :
                        <></>
                    }
                </div>
                </div>
            </section>
        </>
    );
}

export default Calculator;