import React from "react";
import style from './Calculations.module.css';


const Calculations = () => {
    return(
        <div className={style.Calculations}>
            <div className={style.CalculationsWrap}>
                <h4>How is it calculated?</h4>
                <h5>Buying</h5>

                {/* <div className={style.midBorderGrey}></div> */}

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
                        <div className={style.flexWrapSunk}>
                            <p>Sunk Costs:</p>
                            <p>
                                Sum of all non-recoverable costs. Upfront costs + monthly costs + interest costs, over the selected time period.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.midBorderGrey}></div>

                <div className={style.flexBen}>
                    <h6>Mortgage</h6>
                    <div className={style.colFlexBlue}>
                        <div className={style.flexWrap}>
                            <p>Deposit:</p>
                            <p>
                                Initially set to 10% of your property value but can be adjusted manually. 
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
                        <div className={style.flexWrapSunk}>
                            <p>Equity:</p>
                            <p>
                                The value of your financial interest in the property. 
                                Deposit + capital repaid (mortgage repayments) + capital gains.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.midBorderGrey}></div>

                <div className={style.flexBen}>
                    <h6>Savings</h6>
                    <div className={style.colFlexBen}>
                        <div className={style.flexWrap}>
                            <p>Amount saved:</p>
                            <p>
                                Cash remaining after purchasing the property + 
                                monthly savings over the selected time period:
                                Remaining savings + Monthly Savings.
                            </p>
                        </div>
                        <div className={style.flexWrapInt}>
                            <p  className={style.intTitle}>Interest earned:</p>
                            <p className={style.intContent}>
                                Interest earned on savings over the selected time period:
                            </p>
                        </div>
                        <div className={style.flexWrapSunk}>
                            <p>Total Savings:</p>
                            <p>
                                Total savings at the end of the time period from saving whilst buying: 
                                Amount saved compounded + monthly savings compounded.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.midBorderGrey}></div>

                <div className={style.netPosition}>
                    <h6>Total Spend: </h6>
                    <p>
                        Sum of all costs associated with buying a home over the selected time period. 
                        Upfront costs + monthly costs + 
                        mortgage repayments + deposit + monthly savings.
                    </p>
                </div>
                <div className={style.netPosition}>
                    <h6>Net Position: </h6>
                    <p>Your financial position at the end of the selected time period: Equity + Total Savings</p>
                </div>
                <div className={style.netPosition}>
                    <h6>Net Gain/Loss: </h6>
                    <p>
                        Your gain or loss based upon all costs, mortgage repayments and savings: Net position - Total spend
                    </p>
                </div>
        
                <div className={style.midBorder1}></div>
                <div className={style.midBorder2}></div>

                <div className={style.spacer}></div>

                <h5>Renting</h5>

                {/* <div className={style.midBorderGrey}></div> */}

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
                        <div className={style.flexWrapSunk}>
                            <p>Sunk Costs:</p>
                            <p>
                                Sum of all non-recoverable costs: 
                                Upfront costs + rent paid
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.midBorderGrey}></div>

                <div className={style.flexBen}>
                    <h6>Savings</h6>
                    <div className={style.colFlexBen}>
                        <div className={style.flexWrap}>
                            <p>Security Deposit:</p>
                            <p>
                                Funds returned to you at the end of your tenancy. 
                                (Calculator assumes no deductions)
                            </p>
                        </div>
                        <div className={style.flexWrap}>
                            <p>Amount saved:</p>
                            <p>
                                Cash remaining after securing a rental  property + 
                                monthly savings over the selected time period
                            </p>
                        </div>
                        <div className={style.flexWrapInt}>
                            <p  className={style.intTitle}>Interest earned:</p>
                            <p className={style.intContent}>
                                Interest earned on savings over the selected time period.
                            </p>
                        </div>
                        <div className={style.flexWrapSunk}>
                            <p>Total Savings:</p>
                            <p>
                                Total savings at the end of the time period from saving whilst buying: 
                                Amount saved compounded + monthly savings compounded.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className={style.midBorderGrey}></div>

                <div className={style.netPosition}>
                    <h6>Total Spend: </h6>
                    <p>
                        Sum of all costs associated with renting a home over the selected time period. 
                        Upfront costs + monthly rent + 
                        security deposit + monthly savings.
                    </p>
                </div>
                <div className={style.netPosition}>
                    <h6>Net Position: </h6>
                    <p>Your financial position at the end of the selected time period: Total Savings + Security Deposit</p>
                </div>
                <div className={style.netPosition}>
                    <h6>Net Gain/Loss: </h6>
                    <p>Your gain or loss based upon all rent costs and savings: Net position - Total spend</p>
                </div>
        
                <div className={style.midBorder1}></div>
                <div className={style.midBorder2}></div>
                <div className={style.spacer}></div>
                
            </div>
            
        </div>
    );
}


export default Calculations;