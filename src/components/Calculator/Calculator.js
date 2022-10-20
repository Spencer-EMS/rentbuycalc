import React, { useState } from 'react';
import style from './Calculator.module.css';

import Totals from '../Totals/Totals';
import BuyForm from '../BuyForm/BuyForm';
// import RentInput from '../RentInput/RentInput';

const Calculator = () => {

    // input variables 
    const [ fixedTerm, setFixedTerm ] = useState(2);

    // readOnly values
    const [ depAmount, setDepAmount ] = useState(0);
    
    // upfront cost variables
    const [ stampDutyCost, setStampDutyCost ] = useState(0); 

    // Totals
    const [ upFrontCosts, setUpFrontCosts ] = useState(0);
    const [ monthlyCosts, setMonthlyCosts ] = useState(0);
    const [ timePeriodCost, setTimePeriodCost ] = useState(0);

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
                </div>
            </section>
        </>
    );
}

export default Calculator;