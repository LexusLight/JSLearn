import React from "react";
import style from './base.module.css'

function LoginButton(props:any) {
    return (
        <div className={style.center}>
            Вы не вошли.
            <button onClick={props.onClick}>
                Войти
            </button>
        </div>

    );
}

function LogoutButton(props:any) {
    return (
        <div className={style.center}>
            Вы вошли
            <button onClick={props.onClick}>
                Выйти
            </button>
        </div>

    );
}

interface props {} //Интерфейсы как дженерики
interface state {
    isLoggedIn: boolean;
}

class Variable_element extends React.Component<props,state> {
    constructor(props:any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                {button}
            </div>
        );
    }
}

export default  Variable_element;