import React from 'react';
import style from './PersonalFinances.module.css';

const PersonalFinances = (props) => {

    // Event handlers
    const handleIncomeChange = (event) => {
        const income = event.target.value;
        props.setAnnualIncome(income);
    }

    const handleSavingsChange = (event) => {
        const savings = event.target.value;
        props.setCurrentSavings(savings);
    }

    return(
        <div className={style.PersonalFinances}>
            <h3>Your Finances</h3>
            <div className={style.financeFlex}>
                <div className={style.colFlex}>
                    <p>Household Income:</p>
                    <input type="number" id="asalary" name="asalary" defaultValue={props.annualIncome} onChange={handleIncomeChange}/>
                </div>
                <div className={style.colFlex}>
                    <p>Current Savings:</p>
                    <input type="number" id="csavings" name="csavings" defaultValue={props.currentSavings} onChange={handleSavingsChange}/>
                </div>
            </div>
        </div>
    );
}

export default PersonalFinances;