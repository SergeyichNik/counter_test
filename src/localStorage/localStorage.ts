import {IGlobalState} from "../bll/state";
import {initialState} from "../bll/counterReducer";


export const saveToLS = (state: IGlobalState) => {
    const stateTo = JSON.stringify(state)
    localStorage.setItem('counter', stateTo)
}

export const loadFromLS = () => {
    const stateFrom = localStorage.getItem('counter');
    if (stateFrom) {
        return JSON.parse(stateFrom)
    } else {
        return initialState
    }

}