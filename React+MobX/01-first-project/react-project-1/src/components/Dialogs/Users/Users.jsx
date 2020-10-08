import React from "react";
import style from "./Users.module.css";


const Users = () => {
    return(
        <div className={style.users}>
            <div className={style.dialog_user}>
                Костя
            </div>
            <div className={style.dialog_user}>
                Боря
            </div>
            <div className={style.dialog_user}>
                Егор
            </div>
            <div className={style.dialog_user}>
                Дима
            </div>
            <div className={style.dialog_user}>
                Илья
            </div>
        </div>
    )
}

export default Users