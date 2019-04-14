import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm';
import Navbar from '../../components/Navbar';

class SignUp extends Component {
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
        <SignUpForm />
      </React.Fragment>
    )
  }
}

export default SignUp;
