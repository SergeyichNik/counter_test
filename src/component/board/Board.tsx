import {Button} from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    countStepSet,
    decrement,
    increment,
    maxValSet,
    minValSet,
    resetVal,
    selectState,
    setModeChange
} from "../../bll/counterReducer";
import {Dispatch} from "redux";
import classes from "./Board.module.css";
import {ActionsType} from "../../bll/actions";
import {ChangeEvent, useState} from "react";


export const Board = () => {
    const dispatch = useDispatch<Dispatch<ActionsType>>()

    const {value, isSetMode, minValue, maxValue, countStep, isError} = useSelector(selectState)
    const [error, setError] = useState(maxValue % countStep)
    const onDicHandler = () => {
        dispatch(decrement())
    }
    const onIncHandler = () => {
        dispatch(increment())
    }
    const setModeHandler = () => {
        dispatch(setModeChange())
    }
    const resetValHandler = () => {
        dispatch(resetVal())
    }
    const onMaxValChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValSet(Number(e.currentTarget.value)))
    }
    const onMinValChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(minValSet(Number(e.currentTarget.value)))
    }
    const onCountStepChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(countStepSet(Number(e.currentTarget.value)))
    }

    const styleInput = {
        color: maxValue % countStep
        || maxValue < countStep || minValue % countStep ? 'red' : 'green',
        fontWeight: 'bold',
        fontSize: '15px'
    }

    return (
        <div className={classes.board}>
            <div className={classes.main}>
                    <div className={classes.outerLayer}>
                        <div className={classes.innerLayer}>
                            {
                                isSetMode
                                    ?
                                    <div className={classes.inputsWrapper}>
                                        Min value: <input style={styleInput} value={minValue} onChange={onMinValChange}/>
                                        Max value: <input style={styleInput} value={maxValue} onChange={onMaxValChange}/>
                                        Count step: <input style={styleInput} value={countStep} onChange={onCountStepChange}/>
                                    </div>
                                    :
                                    <div style={{color:
                                            value >= maxValue || value === minValue ? '#f5574ce3': '#1a1919e3'
                                    }} className={classes.value}>
                                        {value}
                                    </div>
                            }
                        </div>
                    </div>
            </div>
            <div className={classes.btnWrapper}>
                <div className={classes.mainLayerBtn}>
                    <div className={classes.outerLayerBtn}>
                        <div className={classes.innerLayerBtn}>
                            <Button isDisabled={isSetMode || value <= minValue} btnName={'-'} onClickHandler={onDicHandler}/>
                        </div>
                    </div>
                </div>
                <div className={classes.mainLayerBtn}>
                    <div className={classes.outerLayerBtn}>
                        <div className={classes.innerLayerBtn}>
                            <Button isDisabled={isSetMode || value >= maxValue} btnName={'+'} onClickHandler={onIncHandler}/>

                        </div>
                    </div>
                </div>
                <div className={classes.mainLayerBtn}>
                    <div className={classes.outerLayerBtn}>
                        <div className={classes.innerLayerBtn}>
                            <Button isDisabled={isSetMode || value === minValue} btnName={'↻'} onClickHandler={resetValHandler}/>
                        </div>
                    </div>
                </div>
                <div className={classes.mainLayerBtn}>
                    <div className={classes.outerLayerBtn}>
                        <div className={classes.innerLayerBtn}>
                            <Button isDisabled={false} btnName={'⚙'} onClickHandler={setModeHandler}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}