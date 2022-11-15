import React, { useState, useEffect } from 'react';
import style from './Renting.module.css';

const Renting = ({
    rent,
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
        const rate = (rentIncrease/100)+1;
        const yr1Rent = rent*12;
        var rentArr = [];
        for (let i = 0; i < fixedTerm; i++) {
            var annualCost = (yr1Rent)*(rate**(i));
            rentArr.push(annualCost);
        }
        const sum = rentArr.reduce((partialSum, a) => partialSum + a, 0);
        setRentMonthlyCost(sum);
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
            <div className={style.RentingWrapper}>
                <div className={style.Rent}>
                    <h4>Rental Property</h4>
                    <div className={style.flexNorm}>
                        <p>Monthly rent (pcm):</p>
                        <input type="number" id="pvalue" name="pvalue" value={rent} readOnly/>
                        <p>Annual rent increase:</p>
                        <input type="number" id="rinc" name="rinc" defaultValue={rentIncrease} onChange={handleRentIncreaseChange}/>
                    </div>
                </div>

                <h5>Security Deposit:</h5>
                <div className={style.secDepFlex}>
                    <p>Weeks:</p>
                    <select id="fterm" name="fterm" defaultValue={depWeeks} onChange={handleDepWeekChange} className={style.dropDown}> 
                        <option type="number" value="1">1 weeks</option>
                        <option type="number" value="2">2 weeks</option>
                        <option type="number" value="3">3 weeks</option>
                        <option type="number" value="4">4 weeks</option>
                        <option type="number" value="5">5 weeks</option>
                    </select>
                    <input readOnly type="number" id="secDep" value={securityDeposit.toFixed(0)} className={style.refInput}/>
                </div>

                <h5>Upfront costs</h5>
                <div className={style.flexNorm}>
                    <div className={style.colFlex}>
                        <p>Referencing: </p>
                        <div className={style.refFlex}>
                            <p>Adult occupants:</p>
                            <input type="number" id="mfees" defaultValue="1" className={style.refInput} onChange={handleAdultChange}/>
                            <h5>£{refCost}</h5>  
                        </div>
                    </div>
                    <div className={style.colFlex}>
                        <p className={style.adminFont}>Admin fees:</p>
                        <input type="number" id="afees" defaultValue={adminCost} className={style.adminInput} onChange={handleAdminChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Renting;