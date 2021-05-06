// react
import React from "react";

// styling
import './App.css';

// components
import Sign from './pages/SignIn';
import HomePage from './pages/HomePage';

// Switch & Route
import { Switch, Route } from "../node_modules/react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="h1">
        <h1>useReducer, Provider</h1>
      </div>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/sign'>
            <Sign />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
    
  );
}

export default App;

