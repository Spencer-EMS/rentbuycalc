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
                <div className={style.colFlex}>
                    <p htmlFor="mPayment">Mortgage Payment:</p>
                    <input readOnly type="number" id="mPayment" name="mPayment" value={mortgagePayment.toFixed(0)}/>
                </div>
                <div className={style.colFlex}>
                    <p htmlFor="grent">Maintenance:</p>
                    <input type="number" id="grent" name="grent" defaultValue={monthlyMaintenance} onChange={handleMaintenanceChange}/>
                </div>
            </div>
            <div className={style.flexNorm}>
                <div className={style.colFlex}>
                    <p htmlFor="grent">Ground rent:</p>
                    <input type="number" id="grent" name="grent" defaultValue={groundRent} onChange={handleGroundRentChange}/>
                </div>
                <div className={style.colFlex}>
                    <p htmlFor="scharge">Service charge:</p>
                    <input type="number" id="scharge" name="scharge" defaultValue={servCharge} onChange={handleServChargeChange}/>
                </div>
            </div>
        </>
    );
}


export default MonthlyCostsBuy;