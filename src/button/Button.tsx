import React from "react";

export type ButtonsPropsType = {
    a: number
    onClickHandler: () => void
    onClickResetHandler: () => void
}
export const Button = (props: ButtonsPropsType) => {

    return (
        <div className={'buttons'}>

            {/*<button className={'inc'} disabled={props.a > 5} onClick={()=>{props.onClickHandler()}}>*/}
            <button className={props.a < 5 ? 'inc' : 'error-inc'} onClick={() => {props.onClickHandler()}}>
                inc
            </button>
            <button className={props.a === 0 ? 'error-reset' : 'reset'} onClick={() => {props.onClickResetHandler()}}>
                reset
            </button>

        </div>
    )
}


//------------------------------------------------------------
// type ButtonsPropsType ={
//     name: string
//     callback: ()=> void
// }
// export const Button = (props: ButtonsPropsType)=>{
//     props.callback();
//     return (
//         <button onClick={props.callback}>{props.name}</button>
//     )
// }