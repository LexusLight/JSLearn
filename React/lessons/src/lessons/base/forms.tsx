import React,{useState} from "react";
import style from './base.module.css'


const Forms = (props:any) => {
    let [value,setValue] = useState(0);

    const handleChange = (e:any) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e:any) => {
        alert('Отправленное имя: ' + value);
        e.preventDefault();
    }

    return (
        <div className={style.center}>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя:
                    <input type="text" value={value} onChange={handleChange} />        </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    );
}

export default  Forms;