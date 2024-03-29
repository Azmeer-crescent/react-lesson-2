import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent1 from './Parent1';
import Parent2 from './Parent2';
import Blank from './Blank';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (  
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/blank" component={Blank} />
        <Route path="/parent1" component={Parent1} />
        <Route path="/parent2" component={Parent2} />
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
