import React from 'react';
import style from './SideNav.module.css';


const SideNav = ({ 
    handleScrollClickTop, 
    handleScrollClickBuy, 
    handleScrollClickRent, 
    handleScrollClickSave, 
    handleScrollClickHow
}) => {

    // VIEW
    return(
        <div className={style.SideNav}>
            <div className={style.fixSideBar}>
                <ul>
                    <li onClick={handleScrollClickTop}>Top</li>
                    <li onClick={handleScrollClickBuy}>Buying</li>
                    <li onClick={handleScrollClickRent}>Renting</li>
                    <li onClick={handleScrollClickSave}>Saving</li>
                    <li onClick={handleScrollClickHow}>How is it calculated</li>
                </ul>
            </div>
        </div>
    );
}

export default SideNav;