import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const SignUpForm = () => {
  const divStyle = {
    border: '1px solid black',
    height: '1px',
    width: '300px'
  };
  return (
      <div className="register">
        <div className="container auth-user">
          <div className="row logo-row">
            <h1><i className="fa fa-lock" aria-hidden="true"></i> Register</h1>
          </div><br /><br />
          <div className="input-group">
    				<div className="input-group-prepend">
    					<span className="input-group-text"><i className="fas fa-user-tie"></i></span>
    				</div>
            <input type="text" name="" className="form-control" placeholder="username or email"/>
          </div><br />
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fa fa-key icon"></i></span>
            </div>
            <input type="Password" name="" className="form-control" placeholder="password"/>
      		</div><br />
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fa fa-key icon"></i></span>
            </div>
            <input type="Password" name="" className="form-control" placeholder="confirm password"/>
      		</div><br />
          <button type="submit" className="auth-btn btn btn-default">
            <span className="glyphicon glyphicon-off"></span> Register
          </button>
          <span>Or </span>
          <button type="submit" className="auth-btn btn btn-info">
            <i class="fab fa-facebook-square"></i> Login with Facebook
          </button><br /><br />
          <center>
            <div style={divStyle}></div>
          </center><br />
          <div className="login-footer">
            <p>Already have an Account! <Link to="/auth/login">Login Here</Link></p>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default SignUpForm;
