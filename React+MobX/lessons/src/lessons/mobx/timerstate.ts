import {observable, action, makeAutoObservable, autorun} from "mobx"

// Model the application state.
class TimerMobX {
    @observable secondsPassed:number;

    constructor() {
        this.secondsPassed = 1;
        // makeAutoObservable(this)
    }

    @action increase = () => {
        this.secondsPassed ++
    }

    @action reset = () => {
        this.secondsPassed = 0
    }
}

const myTimer = new TimerMobX()
setInterval(() => {
    myTimer.increase();
}, 1000)

export default  myTimer
export{
    TimerMobX,
}