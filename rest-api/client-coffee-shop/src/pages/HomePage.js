import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/coffees`)
      .then(res => {
        let coffees = res.data;
        this.setState({ coffees });
      })
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>Coffee List</h1>
        <span>Click on any to see more info about it!</span>
        <ul>
          {
            this.state.coffees.map((coffee, idx) => {
                return <Link to={`/coffee/${coffee._id}`} key={idx}>
                  <li>{coffee.name}</li>
                </Link>
            })
          }
        </ul>
      </div>
    );
  }
}


export default HomePage;