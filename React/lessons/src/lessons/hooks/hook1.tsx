import React from "react";
import {useState} from "react";
import style from './hook.module.css'


const Hook1 = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={style.center}>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

export default  Hook1;