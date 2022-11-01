import React from "react";
import style from './Mortgage.module.css';


const Mortgage = ({
        propValue,
        depPercent,
        setDepPercent,
        depAmount,
        setDepAmount,
        mortTerm,
        setMortTerm,
        intRate,
        setIntRate
    }) => {
    
    // Event handlers
    const handleDepChange = event => { 
        const newDepPerc = parseInt(event.target.value);
        setDepPercent(newDepPerc);
        setDepAmount((newDepPerc/100)*propValue);
    }

    const handleDepAmountChange = event => {
        var newDepAmount = parseInt(event.target.value);
        setDepAmount(newDepAmount);
        var newDepPerc = newDepAmount/propValue;
        newDepPerc = (newDepPerc*100).toFixed(1);
        setDepPercent(newDepPerc);
    }

    const handleMortTermChange = (event) => {
        const newMortTerm = parseInt(event.target.value);
        setMortTerm(newMortTerm);
    }

    const handleIntChange = (event) => {
        const newIntRate = parseFloat(event.target.value);
        setIntRate(newIntRate);
    }

    return(
        <>
            <h5>Mortgage</h5>
            <div className={style.flexNorm}>
                <label htmlFor="dperc">Deposit %:
                    <input type="number" id="dperc" name="dperc" value={depPercent} onChange={handleDepChange}/>
                </label>
                <label htmlFor="dvalue">Deposit:
                    <input type="number" id="deposit" name="deposit" value={depAmount} onChange={handleDepAmountChange}/>
                </label>
            </div>
            <div className={style.flexNorm}>
                <label htmlFor="dperc">Mortgage term:
                    <input type="number" id="dperc" name="dperc" defaultValue={mortTerm} onChange={handleMortTermChange}/>
                </label>
                <label htmlFor="irate">Interest rate:
                    <input type="number" id="irate" name="irate" defaultValue={intRate} onChange={handleIntChange}/>
                </label>
            </div>
        </> 
    );
}


export default Mortgage;