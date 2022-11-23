import React from 'react';
import style from './SideNav.module.css';


const SideNav = () => {

    // VIEW
    return(
        <div className={style.SideNav}>
            <div className={style.fixSideBar}>
                <ul>
                    <li>Top</li>
                    <li>Buying</li>
                    <li>Renting</li>
                    <li>Saving</li>
                    <li>How is it calculated</li>
                </ul>
            </div>
        </div>
    );
}

export default SideNav;