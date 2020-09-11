import React from "react";
import style from './base.module.css'


const Event = () => {

    const preventEvent = (e:any) => {
        e.preventDefault()
        alert("Событие перехда перехвачено.")
    }

    return (
        <div className={style.center}>
            <a  href={'https://google.com'} onClick={preventEvent}>Гугл</a>
        </div>
    );
}

export default  Event;

/* тоже самое на классовых компонентах
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке.    this.handleClick = this.handleClick.bind(this);  }

        handleClick() {    this.setState(state => ({
            isToggleOn: !state.isToggleOn
            }));  }
        render() {
            return (
                <button onClick={this.handleClick}> {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                </button>
            );
        }
    }

    ReactDOM.render(
<Toggle />,
    document.getElementById('root')
);*/