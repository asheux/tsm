import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm';
import Navbar from '../../components/Navbar';
import * as auth from '../../utils';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        name: '',
        email: '',
        password: ''
      },
      errors: {
        nameError: '',
        emailError: '',
        passwordError: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { payload } = this.state;
    payload[name] = value;
    this.setState({payload});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { payload } = this.state;
    const { signupActions, history } = this.props;
    signupActions(payload).then(data => {
      if(!data.errors && data.data) {
        const token = data.data.accessToken.split(' ')[1];
        auth.setToken(token);
        history.push('/');
      }
      else {
        let nameErr = '';
        let emailErr = '';
        let passwordErr = '';
        const { error } = data.errors.response.data;
        const fields = error.field.split(',');
        fields.map(field => {
          if (field === 'name') {
            nameErr = error.message;
          }
          if (field === 'email') {
            emailErr = error.message;
          }
          if (field === 'password') {
            passwordErr = error.message
          }
          return '';
        });
        this.setState({errors:
          {
            nameError: nameErr,
            emailError: emailErr,
            passwordError: passwordErr
          }
        });
      }
    });
  }

  render() {
    const { payload, errors } = this.state;
    if (auth.isAuthenticated()) {
      return <Redirect to="/" />
    }
    return (
      <React.Fragment>
        <Navbar
          menuItems={[]}
        />
        <SignUpForm
          attributes={payload}
          errorMessages={errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

export default SignUp;
