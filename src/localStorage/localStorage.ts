import {IGlobalState} from "../bll/state";


export const saveToLS = (state: IGlobalState) => {
    const stateTo = JSON.stringify(state)
    localStorage.setItem('counter', stateTo)
}

export const loadFromLS = () => {
    const stateFrom = localStorage.getItem('counter');
    return stateFrom && JSON.parse(stateFrom)
}