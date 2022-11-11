import React from "react";
import style from './UpfrontCostsBuy.module.css';


const UpfrontCostsBuy = ({
    ftbCheckBox,
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

    // const handleCheckChange = () => { 
    //     setFtbCheckBox(!ftbCheckBox);
    // }

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
                <div className={style.colFlex}>
                    <p>Stamp duty:</p>
                    <div className={style.stampFlex}>
                        <p>First time buyer?</p>
                        {ftbCheckBox ? <h5>Yes</h5> : <h5>No</h5>}
                        {/* <input type="checkbox" id="ftbCheck" name="ftbCheck" readOnly checked={ftbCheckBox}/> */}
                    </div>
                    <input type="number" id="lcost" name="lcost" readOnly value={stampDutyCost.toFixed(0)}/>
                </div>
                <div className={style.colFlex}>
                    <p>Mortgage fee:</p>
                    <div className={style.stampFlex}>
                        <p>Add to mortgage</p>
                        <input type="checkbox" id="mortFee" name="mortFee" onChange={handleAddToMortgage} checked={addToMortgage}/>
                    </div>
                    <input type="number" id="mfees" name="mfees" defaultValue={mortFee} onChange={handleMortFeeChange}/>
                </div>
                
            </div>
            <div className={style.flexNorm}>
                <div className={style.colFlex}>
                    <p>Legal:</p>
                    <input type="number" id="lcost" name="lcost" defaultValue={legalCost} onChange={handleLegalCostChange}/>
                </div>
                <div className={style.colFlex}>

                    <p>Surveyor:</p>
                    <input type="number" id="scost" name="scost" defaultValue={survCost} onChange={handleSurvCostChange}/>
                </div>
            </div>
        </>
    );
}


export default UpfrontCostsBuy;