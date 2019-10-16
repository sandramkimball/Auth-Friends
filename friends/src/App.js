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
          <h2>Welcome mis Amigos!</h2>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
          </ul>
        </header>
        <section className='main-body'>
          <Switch>
            <Route exact path='/friends' component={Friends}/>
            <Route exact path='/login' component = {Login}/>
            <Route component={Login}/>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
