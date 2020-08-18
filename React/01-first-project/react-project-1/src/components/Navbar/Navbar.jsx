import React from "react";
import style from './Navbar.module.css';
import {NavLink} from  'react-router-dom'

const Navbar = () => {
    return(
        <nav className={style.nav}>
            <div className={style.categories}>
                <NavLink to="/profile"  >Профиль</NavLink>
            </div>
            <div className={style.categories}>
                <NavLink to="/dialogs" >Сообщения</NavLink>
            </div>
            <div className={style.categories}>
                <NavLink to="/news" >Новости</NavLink>
            </div>
            <div className={style.categories}>
                <NavLink to="/music" >Музыка</NavLink>
            </div>
            <div className={style.categories}>
                <NavLink to="/options" >Настройки</NavLink>
            </div>
        </nav>
    )
}

export default Navbar 