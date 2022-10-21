import React, { useState, useEffect } from 'react';
import style from './RentInput.module.css';

const RentInput = (props) => {

    const [ refCost, setRefCost ] = useState(((1*199)*1.2).toFixed(2));
    const [ adminCost, setAdminCost ] = useState(240);
    const [ rent, setRent ] = useState(1000);
    const [ rentIncrease, setRentIncrease ] = useState(4);

    useEffect(() => {
        var monthlyCost;
        var rate = (rentIncrease/100)+1;
        monthlyCost = (rent*12)*(rate**(props.fixedTerm-1));
        props.setRentMonthlyCost(monthlyCost);
    }, [props, rent, rentIncrease]);

    const handleRentChange = event => {
        const monthlyRent = parseInt(event.target.value);
        setRent(monthlyRent);   
    }

    const handleRentIncreaseChange = event => {
        const rentInc = parseFloat(event.target.value);
        setRentIncrease(rentInc);
    }

    const handleAdultChange = event => {
        const numAdults = event.target.value;
        setRefCost(((numAdults*199)*1.2).toFixed(2));
    }

    const handleAdminChange = event => {
        const admin = event.target.value;
        setAdminCost(admin);
    }    
    
    return(
        <div className={style.RentInput}>
            <form>
                <div className={style.Rent}>
                    <h3>Rent</h3>
                    <div className={style.flexNorm}>
                        <p>Monthly rent (pcm):</p>
                        <input type="number" id="pvalue" name="pvalue" defaultValue={rent} onChange={handleRentChange}/>
                        <p>Annual rent increase:</p>
                        <input type="number" id="rinc" name="rinc" defaultValue={rentIncrease} onChange={handleRentIncreaseChange}/>
                    </div>
                </div>
                <h3>Upfront costs</h3>
                <div className={style.flexNorm}>
                    <label htmlFor="mfees">Referencing: 
                        <div className={style.refFlex}>
                            <p>Adult occupants:</p>
                            <input type="number" id="mfees" defaultValue="1" className={style.refInput} onChange={handleAdultChange}/>
                            <h4>£{refCost}</h4>  
                        </div>
                    </label>
                    <label htmlFor="scost">
                        <p>Admin fees:</p>
                    <input type="number" id="afees" defaultValue={adminCost} className={style.refInput} onChange={handleAdminChange}/>
                    </label>
                </div>
                <h3>Monthly costs</h3>
                <div className={style.flexNorm}>
                    <label htmlFor="lcost">Service charge:
                        <input type="number" id="lcost" name="lcost"/>
                    </label>
                    <label htmlFor="lcost">Ground rent:
                        <input type="number" id="lcost" name="lcost"/>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default RentInput;