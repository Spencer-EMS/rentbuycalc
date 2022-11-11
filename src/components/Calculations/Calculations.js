import React from "react";
import style from './Calculations.module.css';


const Calculations = () => {
    return(
        <div className={style.Calculations}>
            <div className={style.CalculationsWrap}>
                <h4>How is it calculated?</h4>
                <h5>Buying</h5>
                <div className={style.flexCost}>
                    <h6>Costs</h6>
                    <div className={style.colFlexCost}>
                        <div className={style.flexWrap}>
                            <p>Upfront Costs:</p>
                            <p>
                                Sum of initial costs incurred when buying a home: 
                                stamp duty + legal fees + surveyor fees + 
                                mortgage fee (where not added to the mortgage).
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Monthly Costs:</p>
                            <p>
                                Sum of costs incurred over the time period when owning a home.
                                Maintenance costs + service charge + ground rent.
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Interest Cost:</p>
                            <p>
                                Total interest cost from your monthly mortgage payments over the time period.
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Sunk Costs:</p>
                            <p>
                                Sum of all non-recoverable costs. Upfront costs + monthly costs + interest costs
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.midBorder}></div>

                <div className={style.flexBen}>
                    <h6>Benefits</h6>
                    <div className={style.colFlexBen}>
                        <div className={style.flexWrap}>
                            <p>Remaining Savings</p>
                            <p>
                                Cash remaining after purchasing the property: 
                                Cash savings - deposit - upfront costs.
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Monthly Savings:</p>
                            <p>
                                Total savings at the end of the time period from saving whilst buying: 
                                Remaining savings compounded + monthly saving whilst buying compounded.
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Capital Gains:</p>
                            <p>
                                Increase in property value due to annual growth over the time period:
                                Compound interest annual growth formula
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Capital Repaid:</p>
                            <p>
                                Total amount repaid of the principle of your mortgage: 
                                Mortgage principle + interest cost - monthly payments
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.spacer}></div>

                <h5>Renting</h5>
                <div className={style.flexCost}>
                    <h6>Costs</h6>
                    <div className={style.colFlexCost}>
                        <div className={style.flexWrap}>
                            <p>Upfront Costs:</p>
                            <p>
                                Sum of costs incurred when renting a home: 
                                admin fees + referencing fees
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Rent paid:</p>
                            <p>
                                Sum of monthly rent over  the period:
                                Monthly rent x time period(months)
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Sunk Costs:</p>
                            <p>
                                Sum of all non-recoverable costs: 
                                Upfront costs + rent paid
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.midBorder}></div>

                <div className={style.flexBen}>
                    <h6>Benefits</h6>
                    <div className={style.colFlexBen}>
                        <div className={style.flexWrap}>
                            <p>Security Deposit:</p>
                            <p>
                                Funds returned to you at the end of your tenancy: 
                                (Calculator assumes no deductions)
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Remaining Savings:</p>
                            <p>
                                Cash remaining after securing the rental property: 
                                Cash savings - upfront costs.
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Monthly Savings:</p>
                            <p>
                                Total savings  from saving whilst renting at the end of the time period: 
                                Remaining savings compounded + monthly saving whilst renting compounded.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Calculations;