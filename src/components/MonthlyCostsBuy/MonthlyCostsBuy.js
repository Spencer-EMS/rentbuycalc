import React from "react";
import style from './MonthlyCostsBuy.module.css';


const MonthlyCostsBuy = ({
    mortgagePayment,
    monthlyMaintenance,
    setMonthlyMaintenance,
    servCharge,
    setServCharge,
    groundRent,
    setGroundRent
}) => {
    
    // Monthly Cost Handlers
    const handleGroundRentChange = (event) => {
        const newGRent = parseInt(event.target.value);
        setGroundRent(newGRent);
    }

    const handleServChargeChange = (event) => {
        const newServCharge = parseInt(event.target.value);
        setServCharge(newServCharge);
    }

    const handleMaintenanceChange = (event) => {
        var newMaintCost = parseInt(event.target.value);
        setMonthlyMaintenance(newMaintCost);
    }

    return(
        <>
            <h5>Monthly costs</h5>
            <div className={style.flexNorm}>
                <label htmlFor="mPayment">Mortgage Payment:
                    <input readOnly type="number" id="mPayment" name="mPayment" value={mortgagePayment.toFixed(0)}/>
                </label>
                <label htmlFor="grent">Maintenance:
                    <input type="number" id="grent" name="grent" defaultValue={monthlyMaintenance} onChange={handleMaintenanceChange}/>
                </label>
            </div>
            <div className={style.flexNorm}>
                <label htmlFor="grent">Ground rent:
                    <input type="number" id="grent" name="grent" defaultValue={groundRent} onChange={handleGroundRentChange}/>
                </label>
                <label htmlFor="scharge">Service charge:
                    <input type="number" id="scharge" name="scharge" defaultValue={servCharge} onChange={handleServChargeChange}/>
                </label> 
            </div>
        </>
    );
}


export default MonthlyCostsBuy;