import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import FormInput from '../FormInput';

const Button = (handleSubmit) => {
  const divStyle = {
    border: '1px solid #DC143C',
    height: '1px',
    width: '300px'
  };

  return (
    <React.Fragment>
      <div className="checkbox">
        <label><input type="checkbox" value=""/> Remember me</label>
      </div><br />
      <button type="submit" onClick={handleSubmit} className="auth-btn btn btn-default">
        <span className="glyphicon glyphicon-off"></span> Sign In
      </button>
      <span>Or </span>
      <button type="submit" className="auth-btn btn btn-info">
        <i className="fab fa-facebook-square"></i> Login with Facebook
      </button><br /><br />
      <center>
        <div style={divStyle}></div>
      </center><br />
      <div className="login-footer">
        <p>Don't have an Account! <Link to="/auth/register">Sign Up Here</Link></p>
        <p>Forgot <Link to="/auth/reset/password">Password?</Link></p>
      </div>
    </React.Fragment>
  )
}

const LoginForm = ({...props}) => {
  const {
    errorMessages,
    handleChange,
    handleSubmit,
    attributes
  } = props;

  return (
      <div className="login">
        <div className="container auth-user">
          <div className="row logo-row">
            <h1><i className="fa fa-lock" aria-hidden="true"></i> Sign In</h1>
          </div><br /><br />
          <form onSubmit={handleSubmit}>
            <FormInput
              type='text'
              name='email'
              required="required"
              placeholder='email address'
              value={attributes.email}
              onChange={handleChange}
              errorMessage={errorMessages.emailError}
            />
            <br />
            <FormInput
              type='password'
              name='password'
              required='required'
              placeholder='password'
              value={attributes.password}
              onChange={handleChange}
              errorMessage={errorMessages.passwordError}
            />
            <br />
            {Button()}
          </form>
        </div>
        <Footer />
      </div>
  )
}

export default LoginForm;
