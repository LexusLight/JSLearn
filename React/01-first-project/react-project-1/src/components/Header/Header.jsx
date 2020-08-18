import React from "react";
import style from './Header.module.css';

const Header = () => {
    return(
        <header className={style.header}>
            <img alt="альт" src="https://sun9-40.userapi.com/c855324/v855324547/1a8530/dMH5Vv-wrFg.jpg"/>
            <div className={style.abstract}>Абстрактный психодел</div>
        </header>
        )
}

export default Header