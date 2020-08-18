import React from "react";
import style from "./Message.module.css";


const Message = () => {
    return(
        <div className={style.messages}>
            <div className={style.message}> Hi </div>
            <div className={style.message}> Yo </div>
            <div className={style.message}> Heey </div>
        </div>
    )
}

export default Message