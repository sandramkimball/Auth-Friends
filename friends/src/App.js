import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h2>Mis Amigos!</h2>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
          </ul>
        </header>
        <section className='main-body'>
          <Switch>
            <PrivateRoute exact path='/friends' component={Friends}/>
            <Route path='/login' component = {Login}/>
            <Route component={Login}/>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
