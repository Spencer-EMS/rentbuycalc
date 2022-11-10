import React from "react";
import style from './NavBar.module.css';


const NavBar = () => {
    return(
        <div className={style.NavBar}>
            <h5 className={style.title}>To buy or to rent</h5>
        </div>
    );
}


export default NavBar;