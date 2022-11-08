import React from 'react';
import style from './CurrentPosition.module.css';

import { useSelector, useDispatch } from 'react-redux';

const CurrentPosition = ({
    propValue,
    setPropValue,
    currentSavings,
    setCurrentSavings,
    rent,
    setRent
}) => {


    const handlePropValue = event => {
        const newPropValue = parseInt(event.target.value);
        setPropValue(newPropValue);
    }

    // const dispatch = useDispatch();
    
    // const reduxTest = useSelector(state => state.propertyValue);

    // Event handlers
    const handleSavingsChange = (event) => {
        const savings = event.target.value;
        setCurrentSavings(savings);
    }

    // const handlePropertyValueChange = (event) => {
    //     dispatch({ type: 'changePropValue', value: event.target.value});
    // }

    const handleRentChange = event => {
        const monthlyRent = parseInt(event.target.value);
        setRent(monthlyRent);   
    }

    // VIEW
    return(
        <div className={style.CurrentPosition}>
            <div className={style.financeFlex}>
                <div className={style.colFlex}>
                    <p>What cash savings or equity do you currently have?</p>
                    <input type="number" id="csavings" name="csavings" defaultValue={currentSavings} onChange={handleSavingsChange}/>
                </div>
            </div>
            <div className={style.financeFlex}>
                <div className={style.colFlex}>
                        <p>What is the price of the property you want to buy?</p>
                        <input type="number" id="csavings" name="csavings"  defaultValue={propValue} onChange={handlePropValue} />
                </div>
                <div className={style.colFlex}>
                        <p>What is the monthly cost of the property you want to rent?</p>
                        <input type="number" id="csavings" name="csavings" defaultValue={rent} onChange={handleRentChange} />
                </div>
                {/* <p>Monthly rent (pcm):</p>
                        <input type="number" id="pvalue" name="pvalue" defaultValue={reduxTest} onChange={handlePropertyValueChange}/> */}
            </div>
        </div>
    );
}

export default CurrentPosition;