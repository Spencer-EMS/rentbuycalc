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
                    <div className={style.BuyInput}>
                        <BuyForm 
                            monthlyCosts={monthlyCosts}
                            upFrontCosts={upFrontCosts}
                            setUpFrontCosts={setUpFrontCosts}
                            setMonthlyCosts={setMonthlyCosts}
                            setTimePeriodCost={setTimePeriodCost}
                            setDepAmount={setDepAmount}
                            setFixedTerm={setFixedTerm}
                            setStampDutyCost={setStampDutyCost}
                            stampDutyCost={stampDutyCost}
                            fixedTerm={fixedTerm}
                            depAmount={depAmount}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Calculator;