import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          menuItems={[]}
        />
        <LoginForm />
      </React.Fragment>
    )
  }
}

export default Login;
