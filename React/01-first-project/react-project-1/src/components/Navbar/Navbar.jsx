import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.categories}>Профиль</div>
            <div className={classes.categories}>Сообщения</div>
            <div className={classes.categories}>Новости</div>
            <div className={classes.categories}>Музыка</div>
        </nav>
    )
}

export default Navbar 