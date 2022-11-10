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
        <div className={style.Mortgage}>
            <h5>Mortgage</h5>
            <div className={style.flexNorm}>
                <div className={style.colFlex}>
                    <p>Deposit %:</p>
                    <input type="number" id="dperc" name="dperc" value={depPercent} onChange={handleDepChange}/>
                </div>
                <div className={style.colFlex}>
                    <p>Deposit:</p>
                    <input type="number" id="deposit" name="deposit" value={depAmount} onChange={handleDepAmountChange}/>
                </div>
                
            </div>
            <div className={style.flexNorm}>
                <div className={style.colFlex}>
                    <p>Mortgage term:</p>
                    <input type="number" id="dperc" name="dperc" defaultValue={mortTerm} onChange={handleMortTermChange}/>
                </div>
                <div className={style.colFlex}>
                    <p>Interest rate:</p>
                    <input type="number" id="irate" name="irate" defaultValue={intRate} onChange={handleIntChange}/>
                </div>
            </div>
        </div> 
    );
}


export default Mortgage;