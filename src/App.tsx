import React, {MouseEventHandler, useState} from 'react';
import './App.css';
import {Scoreboard} from "./scoreboard/Scoreboard";
import {Button} from "./button/Button";

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
        <Scoreboard a={a}/>
        <Button a={a} onClickResetHandler={onClickResetHandler} onClickHandler={onClickHandler}/>
      </div>
  )
}

export default App;