import {FC} from "react";

type PropsType = {
    onClickHandler: () => void
    btnName: string
    isDisabled: boolean
}

export const Button: FC<PropsType> = ({onClickHandler, btnName, isDisabled}) => {
    return <button disabled={isDisabled} onClick={onClickHandler} ><p>{btnName}</p></button>
}