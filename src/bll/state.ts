import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadFromLS, saveToLS} from "../localStorage/localStorage";


const reducers = combineReducers({
    counter: counterReducer
})

export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers, loadFromLS())

store.subscribe(() => {
    saveToLS(store.getState())
})

