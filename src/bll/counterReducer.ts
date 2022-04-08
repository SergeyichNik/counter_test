import {IGlobalState} from "./state";
import {
    ACTION_TYPES,
    ActionsType,
    CountStepActionType,
    DecrementActionType,
    IncrementActionType,
    MaxValueSetActionType,
    MinValueSetActionType,
    ResetActionType,
    SetModeChangeActionType
} from "./actions";

export type InitialStateType = {
    value: number,
    minValue: number,
    maxValue: number,
    countStep: number,
    isSetMode: boolean,
    isError: boolean,
}

const initialState: InitialStateType = {
    value: 0,
    minValue: 0,
    maxValue: 5,
    countStep: 1,
    isSetMode: false,
    isError: false,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.DECREMENT:
            return {
                ...state, value: state.value - state.countStep
            }
        case ACTION_TYPES.INCREMENT:
            return {
                ...state, value: state.value + state.countStep
            }
        case ACTION_TYPES.SET_MODE_CHANGE:
            return {
                ...state,
                isSetMode: !state.isSetMode,
                value: state.minValue
            }
        case ACTION_TYPES.MAX_VALUE_SET:
        case ACTION_TYPES.MIN_VALUE_SET:
        case ACTION_TYPES.COUNT_STEP_SET:
            return {
                ...state,
                ...action.payload
            }
        case ACTION_TYPES.RESET:
            return {
                ...state,
                value: state.minValue
            }
        default:
            return {
                ...state,
                isError: state.maxValue % state.countStep === 0
            }
    }
}

export const decrement = (): DecrementActionType => {
    return {
        type: ACTION_TYPES.DECREMENT
    }
}
export const increment = (): IncrementActionType => {
    return {
        type: ACTION_TYPES.INCREMENT
    }
}
export const setModeChange = (): SetModeChangeActionType => {
    return {
        type: ACTION_TYPES.SET_MODE_CHANGE
    }
}
export const maxValSet = (maxValue: number): MaxValueSetActionType => {
    return {
        type: ACTION_TYPES.MAX_VALUE_SET,
        payload: {
            maxValue
        }
    }
}
export const minValSet = (minValue: number): MinValueSetActionType => {
    return {
        type: ACTION_TYPES.MIN_VALUE_SET,
        payload: {
            minValue
        }
    }
}
export const resetVal = (): ResetActionType => {
    return {
        type: ACTION_TYPES.RESET,

    }
}
export const countStepSet = (countStep: number): CountStepActionType => {
    return {
        type: ACTION_TYPES.COUNT_STEP_SET,
        payload: {
            countStep

        }
    }
}

export const selectState = (state: IGlobalState) => state.counter