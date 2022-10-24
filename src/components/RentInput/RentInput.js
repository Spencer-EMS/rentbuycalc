import React, { useState, useEffect } from 'react';
import style from './RentInput.module.css';

const RentInput = (props) => {

    const [ refCost, setRefCost ] = useState(((1*199)*1.2).toFixed(2));
    const [ adminCost, setAdminCost ] = useState(240);
    const [ rent, setRent ] = useState(1000);
    const [ rentIncrease, setRentIncrease ] = useState(4);
    const [ depWeeks, setDepWeeks ] = useState(4);
    const [ rentServiceCharge, setRentServiceCharge ] = useState(0);
    const [ rentGroundRent, setRentGroundRent ] = useState(0);

    useEffect(() => {
        var rate = (rentIncrease/100)+1;
        var annualCost = (rent*12)*(rate**(props.fixedTerm-1));
        annualCost = annualCost + ((rentServiceCharge*12)+(rentGroundRent*12));
        var totalMonthlyCosts = annualCost*props.fixedTerm;
        props.setRentMonthlyCost(totalMonthlyCosts);
        var initialCost = parseInt(adminCost)+parseInt(refCost)+parseInt(props.securityDeposit); // ADD SEC DEPOSIT
        props.setUpFrontRentCost(initialCost);
        const weeklyRent = (rent*12)/52;
        const secDeposit = weeklyRent*depWeeks;
        props.setSecurityDeposit(secDeposit);
    }, [props, rent, rentIncrease, adminCost, refCost, depWeeks, rentGroundRent, rentServiceCharge]);

    const handleRentChange = event => {
        const monthlyRent = parseInt(event.target.value);
        setRent(monthlyRent);   
    }

    const handleRentIncreaseChange = event => {
        const rentInc = parseFloat(event.target.value);
        setRentIncrease(rentInc);
    }

    const handleAdultChange = event => {
        const numAdults = event.target.value;
        setRefCost(((numAdults*199)*1.2).toFixed(2));
    }

    const handleAdminChange = event => {
        const admin = event.target.value;
        setAdminCost(admin);
    }

    const handleDepWeekChange = event => {
        const depWeeks = event.target.value;
        setDepWeeks(depWeeks);
    }

    const handleRentServiceChange = event => {
        const servCharge = event.target.value;
        setRentServiceCharge(servCharge);
    }

    const handleRentGroundChange = event => {
        const groundRent = event.target.value;
        setRentGroundRent(groundRent);
    }
    
    return(
        <div className={style.RentInput}>
            <form>
                <div className={style.Rent}>
                    <h3>Rent</h3>
                    <div className={style.flexNorm}>
                        <p>Monthly rent (pcm):</p>
                        <input type="number" id="pvalue" name="pvalue" defaultValue={rent} onChange={handleRentChange}/>
                        <p>Annual rent increase:</p>
                        <input type="number" id="rinc" name="rinc" defaultValue={rentIncrease} onChange={handleRentIncreaseChange}/>
                    </div>
                </div>
                <h3>Upfront costs</h3>
                <div className={style.flexNorm}>
                    <label htmlFor="mfees">Referencing: 
                        <div className={style.refFlex}>
                            <p>Adult occupants:</p>
                            <input type="number" id="mfees" defaultValue="1" className={style.refInput} onChange={handleAdultChange}/>
                            <h4>£{refCost}</h4>  
                        </div>
                    </label>
                    <label htmlFor="afees">
                        <p className={style.adminFont}>Admin fees:</p>
                    <input type="number" id="afees" defaultValue={adminCost} className={style.refInput} onChange={handleAdminChange}/>
                    </label>
                </div>
                <label htmlFor="secDep">
                    <p>Security Deposit:</p>
                    <div className={style.secDepFlex}>
                        <label htmlFor="fterm">Weeks:
                            <select id="fterm" name="fterm" defaultValue={depWeeks} onChange={handleDepWeekChange} className={style.dropDown}> 
                                <option type="number" value="1">1 weeks</option>
                                <option type="number" value="2">2 weeks</option>
                                <option type="number" value="3">3 weeks</option>
                                <option type="number" value="4">4 weeks</option>
                                <option type="number" value="5">5 weeks</option>
                            </select>
                        </label>
                        <input readOnly type="number" id="secDep" value={props.securityDeposit.toFixed(0)} className={style.refInput}/>
                    </div>
                </label>
                <h3>Monthly costs</h3>
                <div className={style.flexNorm}>
                    <label htmlFor="renserv">Service charge:
                        <input type="number" id="renserv" name="renserv" defaultValue={rentServiceCharge} onChange={handleRentServiceChange}/>
                    </label>
                    <label htmlFor="rentGrou">Ground rent:
                        <input type="number" id="rentGrou" name="rentGrou" defaultValue={rentGroundRent} onChange={handleRentGroundChange}/>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default RentInput;