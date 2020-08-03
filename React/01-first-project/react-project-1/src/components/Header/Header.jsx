import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
            <img src="https://sun9-40.userapi.com/c855324/v855324547/1a8530/dMH5Vv-wrFg.jpg"></img>
            <div className={classes.abstract}>Абстрактный психодел</div>
        </header>
        )
}

export default Header