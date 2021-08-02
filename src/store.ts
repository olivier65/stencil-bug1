import {createStore} from "@stencil/store";

export interface Alarm {
    index: number,
}

export const {state} = createStore<{alarms: Alarm[]}>({alarms: []});

declare global {
    interface Window {
        state: any; any: any
    }
}

window["state"] = state
