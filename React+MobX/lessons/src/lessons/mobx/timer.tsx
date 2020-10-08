import React from "react"
import style from './mobx.module.css'
import {inject, observer} from "mobx-react";
import myTimer from "./timerstate";

interface props {
}

const Timer = observer((props:props) => {
    return(
        <div>
            <button onClick={()=>myTimer.reset()}>Seconds passed: {myTimer.secondsPassed} </button>
        </div>
    );

})

export default  Timer;