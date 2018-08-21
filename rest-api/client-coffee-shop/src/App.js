import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import CoffeeDetail from './pages/CoffeeDetail'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/coffee/:coffeeId" component={CoffeeDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
