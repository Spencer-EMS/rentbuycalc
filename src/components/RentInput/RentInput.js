import React, { useState } from 'react';
import Rent from '../Rent/Rent';
import style from './RentInput.module.css';

const RentInput = () => {

    const [ refCost, setRefCost ] = useState(((1*199)*1.2).toFixed(2));

    

    const handleAdultChange = event => {
        const numAdults = event.target.value;
        setRefCost(((numAdults*199)*1.2).toFixed(2));
      }
    

    return(
        <div className={style.RentInput}>
            <form>
                <Rent />
                <h3>Upfront costs</h3>
                <div className={style.flexNorm}>
                    <label htmlFor="mfees">Referencing: 
                        <div className={style.refFlex}>
                            <p>Adult occupants:</p>
                            <input type="number" id="mfees" defaultValue="1" className={style.refInput} onChange={handleAdultChange}/>
                            <h4>£{refCost}</h4>  
                        </div>
                    </label>
                    <label htmlFor="scost">Admin fees:
                        <p>£240.00</p>
                    </label>
                </div>
                <h3>Additional costs</h3>
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