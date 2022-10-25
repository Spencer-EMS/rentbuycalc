import React from 'react';
import style from './Totals.module.css';

const Totals = (props) => {

    const handleFtermChange = (event) => {
        const newFixedTerm = parseInt(event.target.value);
        props.setFixedTerm(newFixedTerm);
    }

    return(
        <div className={style.Totals}>
            <h3>Totals</h3>
            <div className={style.colFlex}>
                <label htmlFor="fterm">Time:
                    <select id="fterm" name="fterm" defaultValue={props.fixedTerm} onChange={handleFtermChange} className={style.dropDown}> 
                        <option type="number" value="1">1 Year</option>
                        <option type="number" value="2">2 Years</option>
                        <option type="number" value="3">3 Years</option>
                        <option type="number" value="4">4 Years</option>
                        <option type="number" value="5">5 Years</option>
                        <option type="number" value="7">7 Years</option>
                        <option type="number" value="10">10 Years</option>
                    </select>
                </label>
                <h4>Buying</h4>
                <p>Upfront costs: £{props.sumUpFrontCosts.toFixed(0)}</p>
                <p>Monthly costs: £{props.sumMonthlyCosts.toFixed(0)}</p>
                <p>Interest cost: £{props.periodInterestCost.toFixed(0)}</p>
                <h5>Sunk costs: £{props.buyTotalCost.toFixed(0)}</h5>

                <p>Deposit: £{props.depositAmount.toFixed(0)}</p>
                <p>Remaining Savings: £{(props.currentSavings-props.sumUpFrontCosts-props.depositAmount)}</p>
                <p>Monthly Savings: £TBD</p>
                <p>Savings returns: £x%?</p>
                <p>Capital gains: £{props.capitalGains.toFixed(0)}</p>
                <p>Capital repaid: £TBD</p>
                <h5>Fixed term total equity: £TBD</h5>
                
                <h4>Renting</h4>
                <p>Upfront costs: £{props.upFrontRentCost}</p>
                <p>Monthly costs: £{props.rentMonthlyCost.toFixed(0)}</p>
                <h5>Sunk costs: £{(props.upFrontRentCost+props.rentMonthlyCost).toFixed(0)}</h5>
                <p>Security Deposit: £{props.securityDeposit.toFixed(0)}</p>
                <p>Monthly Savings: £TBD</p>
                <p>Savings returns: £x%?</p>
                <h5>Fixed term total equity: £TBD</h5>
            </div>
        </div>
    );
}

export default Totals;