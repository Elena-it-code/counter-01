import React from "react";

export type ScoreboardPropsType = {
    a: number
}
export const Scoreboard =(props:ScoreboardPropsType)=>{
    return(
        <div className={props.a < 5 ? 'scoreboard' : 'error-scoreboard'}>{props.a}</div>
    )
}