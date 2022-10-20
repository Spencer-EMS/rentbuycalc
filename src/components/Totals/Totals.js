import React from 'react';
import style from './Totals.module.css';

const Totals = (props) => {
    return(
        <div className={style.Totals}>
            <h3>Totals</h3>
            <div className={style.colFlex}>
                <p>Time period: {props.fixedT}yrs</p>
                <h4>Buying</h4>
                <p>Upfront costs: £{props.sumUpFrontCosts.toFixed(0)}</p>
                <p>Monthly costs: £{props.sumMonthlyCosts.toFixed(0)}</p>
                <h5>Fixed term total cost: £{props.buyTotalCost.toFixed(0)}</h5>
                <p>Deposit: £{props.depositAmount.toFixed(0)}</p>
                <h5>Fixed term total equity: £TBD</h5>
                <h4>Renting</h4>
                <p>Security Deposit: £TBD</p>
                <p>Upfront costs: £FEES :(</p>
                <p>Monthly costs: £RENT :O</p>
                <h5>Fixed term total cost: £Lots :(</h5>
                <h5>Fixed term total equity: £TBD</h5>
            </div>
        </div>
    );
}

export default Totals;