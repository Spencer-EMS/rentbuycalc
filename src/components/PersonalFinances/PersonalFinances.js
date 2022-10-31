import React from 'react';
import style from './PersonalFinances.module.css';

const PersonalFinances = (props) => {

    // Event handlers
    const handleSavingsChange = (event) => {
        const savings = event.target.value;
        props.setCurrentSavings(savings);
    }

    return(
        <div className={style.PersonalFinances}>
            <div className={style.financeFlex}>
                <div className={style.colFlex}>
                    <p>Savings / Equity:</p>
                    <input type="number" id="csavings" name="csavings" defaultValue={props.currentSavings} onChange={handleSavingsChange}/>
                </div>
            </div>
        </div>
    );
}

export default PersonalFinances;