import React from "react";
import style from './NavBar.module.css';


const NavBar = () => {
    return(
        <div className={style.NavBar}>
            <h3 className={style.title}>Rent vs Buy Calculator</h3>
        </div>
    );
}


export default NavBar;