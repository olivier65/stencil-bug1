import {Component, h} from '@stencil/core'
import {state} from "./store";

@Component({
    tag: "app-controls",
    styleUrl: "controls.css",
    shadow: true
})
export class Controls {

    private alarmIndex = 0

    private readonly add = () => {
        console.log("add")
        state.alarms = [...state.alarms, {index: ++this.alarmIndex}]
    }

    render() {
        console.log("render")
        return (
            <button type={"button"} onClick={this.add}>Add</button>
        )
    }
}
