import React from "react";
import style from "../Dialogs.module.css";


const Users = () => {
    return(
        <div className={style.dialog_items}>
            <div className="dialog">
                Костя
            </div>
            <div className="dialog">
                Боря
            </div>
            <div className="dialog">
                Егор
            </div>
            <div className="dialog">
                Дима
            </div>
            <div className="dialog">
                Илья
            </div>
        </div>
    )
}

export default Users