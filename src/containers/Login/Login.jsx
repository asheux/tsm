import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';
import * as auth from '../../utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        email: '',
        password: ''
      },
      errors: {
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
    const { loginActions, history } = this.props;
    const { payload } = this.state;

    loginActions(payload).then(data => {
      if (!data.errors && data.data) {
        const token = data.data.accessToken.split(' ')[1];
        auth.setToken(token);
        history.push('/');
      }
      else {
        let emailErr = '';
        let passwordErr = '';
        const { error } = data.errors.response.data;
        if (error.field === 'email') {
          emailErr = error.message;
        }
        if (error.field === 'password') {
          passwordErr = error.message;
        }
        this.setState({errors: {
          emailError: emailErr,
          passwordError: passwordErr
        }});
      }
    });
  }

  render() {
    const { errors, payload } = this.state;
    
    if (auth.isAuthenticated()) {
      return <Redirect to="/" />
    }
    return (
      <React.Fragment>
        <Navbar
          menuItems={[]}
        />
        <LoginForm
          errorMessages={errors}
          attributes={payload}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

export default Login;
