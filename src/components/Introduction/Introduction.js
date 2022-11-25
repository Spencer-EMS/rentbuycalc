import React from "react";
import style from './Introduction.module.css';


const Introduction = () => {
    return(
        <div className={style.Intro}>
            <div className={style.IntroBox}>
                <h5>
                    Should I buy now OR rent and keep saving?
                </h5>
                <p>
                    The Rent vs Buy calculator seeks to answer this important question, by comparing what would happen if you decided to buy now OR rent and save the difference.
                </p>
                {/* <p>
                    As with all financial decisions there are some factors that will have a greater impact upon each scenarios performance than others. 
                </p> */}
                {/* <p>
                    The rent vs buy calculator compares your net position for each scenario at the end of a selected time period. 
                    The calculator compares sunk costs (non-recoverable costs eg. rent/interest payments), accrued equity (from mortgage repayments) 
                    and potential savings returns (from existing and/or monthly savings).
                </p> */}
                <p>
                    But remember! Long term financial benefit is not the only criteria that will impact your rent or buy decision.
                    Please use this calculator as an indicator only when considering your next move.
                </p>
            </div>
        </div>
    );
}

export default Introduction;