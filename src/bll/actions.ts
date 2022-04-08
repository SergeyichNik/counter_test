export enum ACTION_TYPES {
    DECREMENT = "DECREMENT",
    INCREMENT = "INCREMENT",
    SET_MODE_CHANGE = "SET_MODE_CHANGE",
    MIN_VALUE_SET = "MIN_VALUE_SET",
    MAX_VALUE_SET = "MAX_VALUE_SET",
    RESET = "RESET",
    COUNT_STEP_SET = "COUNT_STEP_SET",
}
export type DecrementActionType = {
    type: ACTION_TYPES.DECREMENT
}
export type IncrementActionType = {
    type: ACTION_TYPES.INCREMENT
}
export type SetModeChangeActionType = {
    type: ACTION_TYPES.SET_MODE_CHANGE
}
export type MaxValueSetActionType = {
    type: ACTION_TYPES.MAX_VALUE_SET,
    payload: {
        maxValue: number
    }
}
export type MinValueSetActionType = {
    type: ACTION_TYPES.MIN_VALUE_SET,
    payload: {
        minValue: number
    }
}
export type ResetActionType = {
    type: ACTION_TYPES.RESET,

}
export type CountStepActionType = {
    type: ACTION_TYPES.COUNT_STEP_SET
    payload: {
        countStep: number
    }
}

export type ActionsType =
    DecrementActionType
    | IncrementActionType
    | SetModeChangeActionType
    | MaxValueSetActionType
    | MinValueSetActionType
    | ResetActionType
    | CountStepActionType
