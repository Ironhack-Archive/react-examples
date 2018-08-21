import React, { Component } from 'react';
import AuthService from '../lib/auth-services';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    let service = new AuthService()
    // service.login('papuarza', 'papu0991')
    // .then(response => {
    //   console.log(response);
    // })

    // service.signup('ines', 'ines')
    // .then(response => {
    //   console.log(response);
    // })

    // service.logout()
    // .then(response => {
    //   console.log(response);
    // })

    // service.login('papuarza', 'papu0991')
    // .then(response => {
    //   console.log(response);
    // })

    // service.isLoggedIn()
    // .then(response => {
    //     console.log(response);
    // })

    service.private()
    .then(response => {
        console.log(response);
    })
  }


  render() {
    return (
      <div className="App">
        <p>Papu</p>
      </div>
    );
  }
}

export default Login;