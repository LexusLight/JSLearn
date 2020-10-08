import React from "react"
import ReactDOM from "react-dom"
import {action, makeAutoObservable, observable} from "mobx"
import { observer } from "mobx-react"

// Model the application state.
class Timer {
    @observable secondsPassed = 0

    constructor() {
        // makeAutoObservable(this)
    }

    @action increase() {
        this.secondsPassed += 1
    }

    @action reset() {
        this.secondsPassed = 0
    }
}

const myTimer = new Timer()


// Build a "user interface" that uses the observable state.
const TimerView = observer(( {timer}:{timer:Timer} ) => (
    <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))

ReactDOM.render(<TimerView timer={myTimer} />, document.body)

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
    myTimer.increase()
}, 1000)
