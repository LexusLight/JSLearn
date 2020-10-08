import React,{useState} from "react";
import style from './base.module.css'


const Forms = (props:any) => {
    let [value,setName] = useState("name");
    let [text,setTextArea] = useState("Вот так задаётся textarea");
    let [select,setSelect] = useState("Ваш выбор")

    const handleChangeName = (e:any) => { //для имени
        setName(e.target.value)
    }
    const handleSubmitName = (e:any) => {
        alert('Отправленное имя: ' + value);
        e.preventDefault();
    }

    const handleChangeText = (e:any) => { //для textarea
        setTextArea(e.target.value)
    }

    const handleChangeSelect = (e:any) => { //для селектора
        setSelect(e.target.value)
    }

    return (
        <div className={style.center}>
            <form onSubmit={handleSubmitName}>
                <label>
                    Имя:
                    <input type="text" value={value} onChange={handleChangeName} />
                </label>
                <input type="submit" value="Отправить" />
            </form>

            <br/>

            <form>
                <label>
                    <textarea value={text} onChange={handleChangeText}/>
                    <br/>
                    <br/>
                    <input value={select}/>
                    {/*<select multiple={true} value={['Б', 'В']}> В атрибут value можно передать массив,
                    что позволит выбрать несколько опций в теге select: */}
                    <select value={select} onChange={handleChangeSelect}>
                        <option value="grapefruit">Грейпфрут</option>
                        <option value="lime">Лайм</option>
                        <option value="coconut">Кокос</option>
                        <option value="mango">Манго</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="file" />
                    <br/>
                    <br/>
                </label>
            </form>
        </div>
    );
}

export default  Forms;

// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {      value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.'    };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {    this.setState({value: event.target.value});  }
//     handleSubmit(event) {
//         alert('Сочинение отправлено: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Сочинение:
//                     <textarea value={this.state.value} onChange={this.handleChange} />        </label>
//                 <input type="submit" value="Отправить" />
//             </form>
//         );
//     }
// }