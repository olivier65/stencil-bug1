import {Component, Event, EventEmitter, h} from '@stencil/core'
import {Alarm, state} from "./store";

@Component({
    tag: "app-controls",
    styleUrl: "controls.css",
    shadow: true
})
export class Controls {

    // Uncomment the next line and tsc will put:
    //   Property 'alarmsUpdated' has no initializer and is not definitely assigned in the constructor.
    //@Event() alarmsUpdated: EventEmitter<Alarm[]>;

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
