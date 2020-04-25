import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import MyNetwork from './components/MyNetwork';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/mynetwork" className="navbar-link">My Network</Link>
            </li>
            <li className="navbar-item">
              <Link to="'/messaging" className="navbar-link">Messaging</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={Login}/>
        <Route path="/mynetwork" component={MyNetwork}/>
      </Router>
    </div>
  );
}

export default App;
