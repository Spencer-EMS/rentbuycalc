import React, { useState, useEffect } from 'react';
import style from './Renting.module.css';

const Renting = ({
    rent,
    setRent,
    setRentMonthlyCost,
    fixedTerm,
    setUpFrontRentCost,
    securityDeposit,
    setSecurityDeposit
}) => {

    const [ refCost, setRefCost ] = useState(((1*199)*1.2).toFixed(2));
    const [ adminCost, setAdminCost ] = useState(240);
    // const [ rent, setRent ] = useState(1200);
    const [ rentIncrease, setRentIncrease ] = useState(4);
    const [ depWeeks, setDepWeeks ] = useState(4);
    // const [ rentServiceCharge, setRentServiceCharge ] = useState(0);

    // Calculating total monthly cost for the time period - needs work** 
    useEffect(() => { 
        var rate = (rentIncrease/100)+1;
        var annualCost = (rent*12)*(rate**(fixedTerm-1));
        // annualCost = annualCost + (rentServiceCharge*12);
        const totalMonthlyCosts = annualCost * fixedTerm;
        setRentMonthlyCost(totalMonthlyCosts);
    }, [
        rent, 
        rentIncrease, 
        setRentMonthlyCost,
        fixedTerm,
        securityDeposit
       ]
    );

    useEffect(() => { // upFront Costs
        var initialCost = parseInt(adminCost)+parseInt(refCost)+parseInt(securityDeposit);
        setUpFrontRentCost(initialCost);
    }, [adminCost, refCost, securityDeposit, setUpFrontRentCost]);

    useEffect(() => { // Security deposit
        const weeklyRent = (rent*12)/52;
        const secDeposit = weeklyRent*depWeeks;
        setSecurityDeposit(secDeposit);
    }, [rent, depWeeks, setSecurityDeposit]);

    // const handleRentChange = event => {
    //     const monthlyRent = parseInt(event.target.value);
    //     setRent(monthlyRent);   
    // }

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

    // const handleRentServiceChange = event => {
    //     const servCharge = event.target.value;
    //     setRentServiceCharge(servCharge);
    // }
    
    return(
        <div className={style.Renting}>
            <form>
                <div className={style.Rent}>
                    <h5>Rental Property</h5>
                    <div className={style.flexNorm}>
                        <p>Monthly rent (pcm):</p>
                        <input type="number" id="pvalue" name="pvalue" value={rent} readOnly/>
                        <p>Annual rent increase:</p>
                        <input type="number" id="rinc" name="rinc" defaultValue={rentIncrease} onChange={handleRentIncreaseChange}/>
                    </div>
                </div>

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
                    <input readOnly type="number" id="secDep" value={securityDeposit.toFixed(0)} className={style.refInput}/>
                </div>

                <h5>Upfront costs</h5>
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
                    <input type="number" id="afees" defaultValue={adminCost} className={style.adminInput} onChange={handleAdminChange}/>
                    </label>
                </div>
                
                {/* <h5>Monthly costs</h5>
                <div className={style.flexNorm}>
                    <label htmlFor="renserv">Service charge (pcm):
                        <input type="number" id="renserv" name="renserv" defaultValue={rentServiceCharge} onChange={handleRentServiceChange}/>
                    </label>
                    <label htmlFor="rentGrou">Ground rent:
                        <input id="rentGrou" name="rentGrou" value={"Peppercorn"} readOnly/>
                    </label>
                </div> */}
            </form>
        </div>
    );
}

export default Renting;