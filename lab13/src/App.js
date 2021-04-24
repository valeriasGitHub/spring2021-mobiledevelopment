import logo from './logo.svg';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Laps from './components/Laps';
import Situps from './components/Situps';
import React, { useReducer } from 'react';
function App() {

  const [currentState, dispatch]= useReducer (reducer, state);
  return (
    <div className="App">
      <header className="App-header">
        <Laps state={currentState} dispatch={dispatch}/>
        <Situps state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  );
}

export default App;
