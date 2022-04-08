import {IGlobalState} from "../bll/state";
import {initialState} from "../bll/counterReducer";

const state: IGlobalState = {
    counter: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        countStep: 1,
        isSetMode: false,
        isError: false,
    }
}

export const saveToLS = (state: IGlobalState) => {
    const stateTo = JSON.stringify(state)
    localStorage.setItem('counter', stateTo)
}

export const loadFromLS = () => {
    const stateFrom = localStorage.getItem('counter');
    if (stateFrom) {
        return JSON.parse(stateFrom)
    } else {
        return state
    }

}