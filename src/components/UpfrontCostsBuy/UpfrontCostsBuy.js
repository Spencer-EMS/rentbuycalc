import React from "react";
import style from './UpfrontCostsBuy.module.css';


const UpfrontCostsBuy = ({
    ftbCheckBox,
    setFtbCheckBox,
    addToMortgage,
    setAddToMortgage,
    legalCost,
    setLegalCost,
    mortFee,
    setMortFee,
    survCost,
    setSurvCost,
    stampDutyCost
}) => {
    

    const handleCheckChange = () => { 
        setFtbCheckBox(!ftbCheckBox);
    }

    const handleLegalCostChange = (event) => {
        var newLegalCost = parseInt(event.target.value);
        setLegalCost(newLegalCost);
    }

    
    const handleAddToMortgage = () => { 
        setAddToMortgage(!addToMortgage);
    }

    const handleMortFeeChange = (event) => {
        const newMortFee = parseInt(event.target.value);
        setMortFee(newMortFee);
    }
    
    const handleSurvCostChange = (event) => {
        const newSurvCost = parseInt(event.target.value);
        setSurvCost(newSurvCost);
    }

    return(
        <>
            <h5>Upfront costs</h5>
            <div className={style.flexNorm}>
                <label htmlFor="lcost">Stamp duty: 
                    <div className={style.stampFlex}>
                        <p>First time buyer?</p>
                        <input type="checkbox" id="ftbCheck" name="ftbCheck" onChange={handleCheckChange} defaultValue={ftbCheckBox}/>
                    </div>
                    <input type="number" id="lcost" name="lcost" readOnly value={stampDutyCost.toFixed(0)}/>
                </label>
                <label htmlFor="mortgageFees">Mortgage fee:
                    <div className={style.stampFlex}>
                        <p>Add to mortgage</p>
                        <input type="checkbox" id="mortFee" name="mortFee" onChange={handleAddToMortgage} checked={addToMortgage}/>
                    </div>
                    <input type="number" id="mfees" name="mfees" defaultValue={mortFee} onChange={handleMortFeeChange}/>
                </label>
            </div>
            <div className={style.flexNorm}>
                <label htmlFor="lcost">Legal:
                    <input type="number" id="lcost" name="lcost" defaultValue={legalCost} onChange={handleLegalCostChange}/>
                </label>
                <label htmlFor="scost">Surveyor:
                    <input type="number" id="scost" name="scost" defaultValue={survCost} onChange={handleSurvCostChange}/>
                </label>
            </div>
        </>
    );
}


export default UpfrontCostsBuy;