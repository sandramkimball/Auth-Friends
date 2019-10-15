import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome mis Amigos!</h2>
      </header>
      <Switch>
        <PrivateRoute exact path='/protected' component={Friends}/>
        <Route path='/login' component = {Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
