import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import FormInput from '../FormInput';

const Button = (handleSubmit) => {
  const divStyle = {
    border: '1px solid black',
    height: '1px',
    width: '300px'
  };
  return (
    <React.Fragment>
      <button type="submit" onClick={handleSubmit} className="auth-btn btn btn-default">
        <span className="glyphicon glyphicon-off"></span> Register
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
            <h1><i className="fa fa-lock" aria-hidden="true"></i> Register</h1>
          </div><br /><br />
          <FormInput
            type='text'
            name='name'
            value={attributes.name}
            placeholder='your name'
            onChange={handleChange}
            errorMessage={errorMessages.nameError}
            iconClass='fas fa-user-tie'
          />
          <br />
          <FormInput
            type='text'
            name='email'
            value={attributes.email}
            placeholder='email address'
            onChange={handleChange}
            errorMessage={errorMessages.emailError}
            iconClass='fas fa-user-tie'
          />
          <br />
          <FormInput
            type='password'
            name='password'
            value={attributes.password}
            placeholder='password'
            onChange={handleChange}
            errorMessage={errorMessages.passwordError}
            iconClass='fa fa-key icon'
          />
          <br />
          {Button(handleSubmit)}
        </div>
        <Footer />
      </div>
  )
}

export default SignUpForm;
