import React from "react";
import style from './base.module.css'


const Lists_and_keys = () => {

    let array = [1,2,3,4,5]
    const list_elements = array.map((e:number,index:number) => {
        return(
            <li key={index}>{e}</li> //key - для оптимизации
        )
            //Ключи помогают React определять, какие элементы были изменены,
            // добавлены или удалены. Их необходимо указывать,
            // чтобы React мог сопоставлять элементы массива с течением времени.
    })

    return (
        <div className={style.center}>
            <ul>{list_elements}</ul>
        </div>
    );
}

export default  Lists_and_keys;