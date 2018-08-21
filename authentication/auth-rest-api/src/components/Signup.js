import React, { Component } from 'react';
import AuthService from '../lib/auth-services';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.service = new AuthService();
  }

  handleChange(event) {
    let key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.service.signup(this.state.username, this.state.password)
    .then(response => {
      this.props.history.push('/private')
    })
  }


  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}  />
          </div>
          <div>
            <label>password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;