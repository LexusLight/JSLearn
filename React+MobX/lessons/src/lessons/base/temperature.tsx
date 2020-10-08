import React,{useState} from "react";
import style from './base.module.css';

interface props{
    temp:number,
    onChange: (value: number, scale: string) => void,
    scale:string,
}

const scaleNames = {
    F: "Fahrenheit",
    C: "Celsius"
}


const Temperature = () => {
    let[tempC, setC] = useState(0)
    let[tempF, setF] = useState(0)

    const onChange = (value:number, scale:string) => {
        if(scale === "Celsius"){
            setF(CtoF(value));
            setC(value);
        }else {
            setC(FtoC(value));
            setF(value);
        }
    }

    const CtoF = (celsius:number) => {
        return (celsius * 9 / 5) + 32;
    }

    const FtoC = (fahrenheit:number) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    return(
        <div className={style.center}>
           По Цельсию: <Input temp={tempC} onChange={onChange} scale={scaleNames.C}/>
           <br/>
           По Фарингейту: <Input temp={tempF} onChange={onChange} scale={scaleNames.F}/>
        </div>
    );
}

const Input = (props: props) => {
    const handlerTemperature = (e:any) => {
        props.onChange(e.target.value,props.scale);
    }

    return(
        <input value={props.temp} onChange={handlerTemperature}/>
    );
}

export default Temperature;