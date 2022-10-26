import React, { useState, useEffect } from 'react';
import style from './Saving.module.css';

const Saving = ({
    saveBuy,
    setSaveBuy,
    saveRent,
    setSaveRent,
    rentMonthlyCost,
    monthlyCosts,
    aer,
    setAer
}) => {

    const [ monthlyDelta, setMonthlyDelta ] = useState(0);

    // 
    useEffect(() => {
        const delta = (rentMonthlyCost/12) - monthlyCosts;
        if (delta > 0) {
            setMonthlyDelta(delta);
            setSaveBuy(delta);
        } else if ( delta === 0) {
            console.log("Buying === Renting", delta);
        } else {
            setMonthlyDelta((delta*(-1)));
            setSaveRent((delta*(-1)));
        }
        
    }, [ setMonthlyDelta, rentMonthlyCost, monthlyCosts, setSaveBuy, setSaveRent]);

    // Event handlers
    const handleSaveBuyChange = event => {
        const savedBuying = parseInt(event.target.value);
        setSaveBuy(savedBuying);
        setSaveRent(0);
    }

    const handleSaveRentChange = event => {
        const savedRent = parseInt(event.target.value);
        setSaveRent(savedRent);
        setSaveBuy(0);
    }

    const handleAerChange = event => {
        const annualEquivelantRate = parseFloat(event.target.value);
        setAer(annualEquivelantRate);
    }

    return(
        <div className={style.Saving}>
            <h5>Monthly saving</h5>
            <p>Mortgage: £{monthlyCosts} || Rent: £{rentMonthlyCost/12}</p>
            <p>the difference is £{monthlyDelta}</p>
            <p>How much will you be saving per month, whilst buying/renting?</p>
            <div className={style.flexNorm}>
                <p>Saving whilst buying (PCM):
                    <input type="number" id="saveBuy" name="saveBuy" value={saveBuy} onChange={handleSaveBuyChange}/>
                </p>
                <p htmlFor="saveRent">Saving whilst renting (PCM):
                    <input type="number" id="saveRent" name="saveRent" value={saveRent} onChange={handleSaveRentChange}/>
                </p>
            </div>
            <div className={style.flexNorm}>
                    <p>Saving rate:
                        <input type="number" id="aer" name="aer" defaultValue={aer} onChange={handleAerChange}/>
                    </p>
                </div>
        </div>
    );
}

export default Saving;