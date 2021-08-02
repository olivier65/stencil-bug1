import {Component, State, h} from '@stencil/core'
import {Alarm, state} from "./store"

@Component({
    tag: "app-alarms",
    styleUrl: "alarms.css",
    shadow: true
})
export class Alarms {

    // Uncomment the next line to make the store work.
    //@State() anything: any = null

    render() {
        let alarms = state.alarms
        console.log("render", alarms.length, "alarms")
        return ([
            <h4>Alarms</h4>,
            alarms.length === 0 ? null : <ul>{alarms.map(alarm => <li>{alarm.index}</li>)}</ul>
        ])
    }
}
