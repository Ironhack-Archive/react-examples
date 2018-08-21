import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/Signup';
import Private from './components/Private';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/private" component={Private} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
