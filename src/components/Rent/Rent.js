import React from 'react';
import style from './Rent.module.css';

const BuyInput = () => {
    return(
        <div className={style.Rent}>
                <h3>Rent</h3>
                <div className={style.flexNorm}>
                    <label htmlFor="pvalue">Monthly rent (pcm):
                        <input type="number" id="pvalue" name="pvalue" defaultValue="0"/>
                    </label>
                    <label htmlFor="rinc">Annual rent increase:
                        <input id="rinc" name="rinc" defaultValue="2.5%"/>
                    </label>
                </div>
        </div>
    );
}

export default BuyInput;