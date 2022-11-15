import React, { useState, useEffect } from 'react';
import style from './Saving.module.css';

const Saving = ({
    fixedTerm,
    saveBuy,
    setSaveBuy,
    saveRent,
    setSaveRent,
    rent,
    buyMonthlyCost,
    aer,
    setAer
}) => {

    const [ monthlyDelta, setMonthlyDelta ] = useState(0);

    // Calculating monthly cost delta
    useEffect(() => {
        const delta = (rent - buyMonthlyCost);
        if (delta > 0) {
            setMonthlyDelta(delta);
            setSaveBuy(delta);
            setSaveRent(0);
        } else if ( delta === 0) {
            setSaveBuy(0);
            setSaveRent(0);
        } else if (delta < 0) {
            setMonthlyDelta((delta*(-1)));
            setSaveRent((delta*(-1)));
            setSaveBuy(0);
        }   
    }, [ fixedTerm, setMonthlyDelta, rent, buyMonthlyCost, setSaveBuy, setSaveRent]);


    // Event handlers
    const handleSaveBuyChange = event => {
        const savedBuying = parseInt(event.target.value);
        setSaveBuy(savedBuying);
    }

    const handleSaveRentChange = event => {
        const savedRent = parseInt(event.target.value);
        setSaveRent(savedRent);
    }

    const handleAerChange = event => {
        const annualEquivelantRate = parseFloat(event.target.value);
        setAer(annualEquivelantRate);
    }

    // VIEW
    return(
        <div className={style.Saving}>
            <div className={style.SavingWrapper}>
                <h4>Saving</h4>
                <p>Buying PCM: £{buyMonthlyCost} || Rent PCM: £{rent.toFixed(0)}</p>
                <p>the difference is £{monthlyDelta.toFixed(0)}</p>
                <p>How much will you be saving per month, whilst buying/renting?</p>
                <div className={style.flexNorm}>
                    <p>Saving whilst buying (PCM):
                        <input type="number" id="saveBuy" name="saveBuy" value={saveBuy.toFixed(0)} onChange={handleSaveBuyChange}/>
                    </p>
                    <p htmlFor="saveRent">Saving whilst renting (PCM):
                        <input type="number" id="saveRent" name="saveRent" value={saveRent.toFixed(0)} onChange={handleSaveRentChange}/>
                    </p>
                </div>
                <div className={style.savingFlex}>
                    <p>Saving rate (%):
                        <input type="number" id="aer" name="aer" defaultValue={aer} onChange={handleAerChange}/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Saving;