import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button2 from './Button2';
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  return (
    <div className="App">
        <h3>React Workshop</h3>
        <code>11th Nov 2019</code>
        <p>Using <a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState</a> hook.</p>
        <p>Also use <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">ReactRouter</a> to navigate from one page together.</p>
        <br />
        <button onClick={() => history.push('/blank')}>Goto Blank</button>
        <button onClick={() => history.push('/parent1')}>Goto Parent 1</button>
        <button onClick={() => history.push('/parent2')}>Goto Parent 2</button>
        <hr />
    </div>
  );
}

export default App;
