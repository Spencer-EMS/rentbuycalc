import React from 'react';
import style from './Rent.module.css';

const BuyInput = () => {
    return(
        <div className={style.Rent}>
                <h3>Rent</h3>
                <div className={style.flexNorm}>
                    <p>Monthly rent (pcm):</p>
                        <input type="number" id="pvalue" name="pvalue" defaultValue="0"/>
                    <p>Annual rent increase:</p>
                        <input id="rinc" name="rinc" defaultValue="2.5%"/>
                </div>
        </div>
    );
}

export default BuyInput;