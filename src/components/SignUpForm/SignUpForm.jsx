import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput';

const Button = () => {
  const divStyle = {
    border: '1px solid black',
    height: '1px',
    width: '300px'
  };
  return (
    <React.Fragment>
      <button type="submit" className="auth-btn btn btn-default">
        <span className="glyphicon glyphicon-off"></span> Sign Up
      </button>
      <span>Or </span>
      <button type="submit" className="auth-btn btn btn-info">
        <i className="fab fa-facebook-square"></i> Login with Facebook
      </button><br /><br />
      <center>
        <div style={divStyle}></div>
      </center><br />
      <div className="login-footer">
        <p>Already have an Account! <Link to="/auth/login">Login Here</Link></p>
      </div>
    </React.Fragment>
  )
}

const SignUpForm = ({...props}) => {
  const { handleChange, attributes, handleSubmit, errorMessages } = props;
  return (
      <div className="register">
        <div className="container auth-user">
          <div className="row logo-row">
            <h1> Sign Up</h1>
          </div><br /><br />
          <form onSubmit={handleSubmit}>
            <FormInput
              type='text'
              name='name'
              required='required'
              value={attributes.name}
              placeholder='your name'
              onChange={handleChange}
              errorMessage={errorMessages.nameError}
            />
            <br />
            <FormInput
              type='text'
              name='email'
              required='required'
              value={attributes.email}
              placeholder='email address'
              onChange={handleChange}
              errorMessage={errorMessages.emailError}
            />
            <br />
            <FormInput
              type='password'
              name='password'
              required='required'
              value={attributes.password}
              placeholder='password'
              onChange={handleChange}
              errorMessage={errorMessages.passwordError}
            />
            <br />
            {Button()}
          </form>
        </div>
      </div>
  )
}

export default SignUpForm;
