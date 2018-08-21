import React, { Component } from 'react';
import AuthService from '../lib/auth-services';

class Private extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.service = new AuthService();
  }

  componentDidMount() {
    this.service.private()
    .then(response => {
      this.setState({message: response.message})
    })
  }

  render() {
    return (
      <div className="message-wrapper">
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Private;