import React from 'react';
import style from './CurrentPosition.module.css';

const CurrentPosition = (props) => {

    // Event handlers
    const handleSavingsChange = (event) => {
        const savings = event.target.value;
        props.setCurrentSavings(savings);
    }

    // VIEW
    return(
        <div className={style.CurrentPosition}>
            <div className={style.financeFlex}>
                <div className={style.colFlex}>
                    <p>Savings / Equity:</p>
                    <input type="number" id="csavings" name="csavings" defaultValue={props.currentSavings} onChange={handleSavingsChange}/>
                </div>
            </div>
        </div>
    );
}

export default CurrentPosition;