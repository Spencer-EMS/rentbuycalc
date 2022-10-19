import React from 'react';
import style from './Totals.module.css';

const Totals = (props) => {
    return(
        <div className={style.Totals}>
            <h3>Totals</h3>
            <div className={style.colFlex}>
                <p>Time period: {props.fixedT}yrs</p>
                <h4>Buying</h4>
                <h4>Cost: £{props.buyTotalCost.toFixed(0)}</h4>
                <p>Deposit: £{props.depositAmount.toFixed(0)}</p>
                <p>Upfront costs: £{props.sumUpFrontCosts.toFixed(0)}</p>
                <p>Monthly costs: £{props.sumMonthlyCosts.toFixed(0)}</p>
            </div>
        </div>
    );
}

export default Totals;