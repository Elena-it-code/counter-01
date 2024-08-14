import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import {Scoreboard} from "./components/scoreboard/Scoreboard";




function App() {
    let [a, setState] = useState(0);

    const onClickHandler = () => {
        a < 5 ? setState(++a) : setState(5)
    }

    const onClickResetHandler = () => {
        setState(0)
    }
    return (
        <div className="App">
                <div className="scoreboard-block">
                <Scoreboard a={a}/>
                <Button a={a} onClickResetHandler={onClickResetHandler} onClickHandler={onClickHandler}/>
                </div>
        </div>
    )
}

export default App;




