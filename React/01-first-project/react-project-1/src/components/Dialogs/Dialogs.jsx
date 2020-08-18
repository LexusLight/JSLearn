import React from "react";
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import Users from "./Users/Users";

const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            <Users/>
            <Message/>
        </div>
    )
}

export default Dialogs