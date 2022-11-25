import React, { useState } from 'react';
import style from './Calculator.module.css';

import Totals from '../../components/Totals/Totals';
import Introduction from '../../components/Introduction/Introduction';
import UserInputs from '../../components/UserInputs/UserInputs';
import Buying from '../../components/Buying/Buying';
import Renting from '../../components/Renting/Renting';
import Saving from '../../components/Saving/Saving';
import Calculations from '../../components/Calculations/Calculations';
import SideNav from '../../components/SideNav/SideNav';

const Calculator = () => {

    // time period
    const [ fixedTerm, setFixedTerm ] = useState(2);

    // Buy property value
    const [ propValue, setPropValue ] = useState(325000);

    // Rent per month
    const [ rent, setRent ] = useState(1200);

    // Current Savings/Equity
    const [ currentSavings, setCurrentSavings ] = useState(40000);

    // Stamp Duty
    const [ ftbCheckBox, setFtbCheckBox ] = useState(false);
    const [ stampDutyCost, setStampDutyCost ] = useState(0); 

    // readOnly values 
    const [ depAmount, setDepAmount ] = useState(0);
    const [ securityDeposit, setSecurityDeposit ] = useState(0);
    
    // Totals

    // BUY
    const [ totalSpendBuy, setTotalSpendBuy ] = useState(0);
    const [ upFrontCosts, setUpFrontCosts ] = useState(0);
    const [ sumMonthlyCosts, setSumMonthlyCosts ] = useState(0);
    const [ timePeriodCost, setTimePeriodCost ] = useState(0);
    const [ periodInterestCost, setPeriodInterestCost ] = useState(0);
    const [ capitalGains, setCapitalGains ] = useState(0);
    const [ capitalRepaid, setCapitalRepaid ] = useState(0);
    const [ buyMonthlyCost, setBuyMonthlyCost ] = useState(0);

    // RENT
    const [ totalSpendRent, setTotalSpendRent ] = useState(0);
    const [ upFrontRentCost, setUpFrontRentCost ] = useState(0);
    const [ rentMonthlyCost, setRentMonthlyCost ] = useState(0);
    const [ accruedSavingsRent, setAccruedSavingsRent ] = useState(0);

    // SAVING
    const [ saveBuy, setSaveBuy ] = useState(0);
    const [ saveRent, setSaveRent ] = useState(0);
    const [ aer, setAer ] = useState(4.5); 
    const [ accruedSavingsBuy, setAccruedSavingsBuy ] = useState(0);


    // const ref = useRef(null);

    // Scroll events
    const handleScrollClickTop = () => {
        const element = document.getElementById('#top-section')
        element.scrollIntoView({ behaviour: 'smooth', block: 'center' });
    };

    const handleScrollClickBuy = () => {
        const element = document.getElementById('#buy-section')
        element.scrollIntoView({ behaviour: 'smooth', block: 'end' });
    };

    const handleScrollClickRent = () => {
        const element = document.getElementById('#rent-section')
        element.scrollIntoView({ behaviour: 'smooth', block: 'end' });
    };

    const handleScrollClickSave = () => {
        const element = document.getElementById('#save-section')
        element.scrollIntoView({ behaviour: 'smooth', block: 'center' });
    };

    const handleScrollClickHow = () => {
        const element = document.getElementById('#how-section')
        element.scrollIntoView({ behaviour: 'smooth', block: 'start' });
    };

    return(
        <div className={style.Calculator}>
            <div className={style.buyingFlex}>
                <Totals
                    totalSpendBuy={totalSpendBuy}
                    currentSavings={currentSavings}
                    depositAmount={depAmount}
                    stampDuty={stampDutyCost}
                    fixedTerm={fixedTerm}
                    setFixedTerm={setFixedTerm}
                    sumUpFrontCosts={upFrontCosts}
                    sumMonthlyCosts={sumMonthlyCosts}
                    buyTotalCost={timePeriodCost}
                    periodInterestCost={periodInterestCost}
                    capitalGains={capitalGains}
                    totalSpendRent={totalSpendRent}
                    rentMonthlyCost={rentMonthlyCost}
                    upFrontRentCost={upFrontRentCost}
                    securityDeposit={securityDeposit}
                    capitalRepaid={capitalRepaid}
                    saveBuy={saveBuy}
                    saveRent={saveRent}
                    aer={aer}
                    accruedSavingsBuy={accruedSavingsBuy}
                    setAccruedSavingsBuy={setAccruedSavingsBuy}
                    accruedSavingsRent={accruedSavingsRent}
                    setAccruedSavingsRent={setAccruedSavingsRent}
                />
                <div className={style.colFlex}>
                <Introduction />
                    <div id='#top-section'></div>
                    <UserInputs 
                        propValue={propValue}
                        setPropValue={setPropValue}
                        rent={rent}
                        setRent={setRent}
                        currentSavings={currentSavings}
                        setCurrentSavings={setCurrentSavings}
                        ftbCheckBox={ftbCheckBox}
                        setFtbCheckBox={setFtbCheckBox}
                    />
                    <div className={style.buySection}>
                        <Buying 
                            propValue={propValue}
                            sumMonthlyCosts={sumMonthlyCosts}
                            setSumMonthlyCosts={setSumMonthlyCosts}
                            setBuyMonthlyCost={setBuyMonthlyCost}
                            upFrontCosts={upFrontCosts}
                            setUpFrontCosts={setUpFrontCosts}
                            depAmount={depAmount}
                            setDepAmount={setDepAmount}
                            fixedTerm={fixedTerm}
                            stampDutyCost={stampDutyCost}
                            setStampDutyCost={setStampDutyCost}
                            setPeriodInterestCost={setPeriodInterestCost}
                            setTimePeriodCost={setTimePeriodCost}
                            setCapitalGains={setCapitalGains}
                            periodInterestCost={periodInterestCost}
                            setCapitalRepaid={setCapitalRepaid}
                            ftbCheckBox={ftbCheckBox}
                            setTotalSpendBuy={setTotalSpendBuy}
                            saveBuy={saveBuy}
                        />
                    </div>
                    <div id='#buy-section' className={style.rentSection}>
                        <Renting 
                            rent={rent}
                            currentSavings={currentSavings}
                            saveRent={saveRent}
                            setRent={setRent}
                            setRentMonthlyCost={setRentMonthlyCost}
                            fixedTerm={fixedTerm}
                            setUpFrontRentCost={setUpFrontRentCost}
                            securityDeposit={securityDeposit}
                            setSecurityDeposit={setSecurityDeposit}
                            setTotalSpendRent={setTotalSpendRent}
                        />
                    </div>
                    <div id='#rent-section' className={style.saveSection}>
                        <Saving
                            fixedTerm={fixedTerm}
                            saveBuy={saveBuy}
                            setSaveBuy={setSaveBuy}
                            saveRent={saveRent}
                            setSaveRent={setSaveRent}
                            rent={rent}
                            buyMonthlyCost={buyMonthlyCost}
                            aer={aer}
                            setAer={setAer}
                        />
                        <div id='#save-section'></div>
                    </div>
                    <div id='#how-section'>
                        <Calculations />
                    </div> 
                </div> 
                <SideNav 
                    handleScrollClickTop={handleScrollClickTop}
                    handleScrollClickBuy={handleScrollClickBuy}
                    handleScrollClickRent={handleScrollClickRent}
                    handleScrollClickSave={handleScrollClickSave}
                    handleScrollClickHow={handleScrollClickHow}
                />
            </div>
            <div className={style.botSpacer}></div>
        </div>
    );
}

export default Calculator;

export { Totals, UserInputs, Buying, Renting, Saving };