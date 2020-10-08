import React from "react";
import style from './base.module.css';


const Conditional_render = (props:any) => {

    function UserGreeting(props:any) {
        return <h1 className={style.center}>С возвращением!</h1>;
    }

    function GuestGreeting(props:any) {
        return <h1 className={style.center}>Войдите, пожалуйста.</h1>;
    }

    const Greeting = (fakeprop:any) => {
        const isLoggedIn = fakeprop.logged;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }

    return(
        // Попробуйте заменить на isLoggedIn={true} и посмотрите на эффект.
        <Greeting logged={false}/>
    );
}

export default Conditional_render;

