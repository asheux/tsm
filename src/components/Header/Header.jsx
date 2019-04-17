import React from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../../utils';
import handleLogout from '../../utils/Logout';

const Header = ({...props}) => {
  const token = auth.getToken();
  let userInfo = '';
  if (token) {
    userInfo = auth.userDetailsFromToken(token);
  }
  const { cartData, totalItemInCart } = props;

  return (
    <div className="account row">
      <div className="col-md-2">
        {auth.isAuthenticated()
          ?
          <ul className="account-ul dropdown">
            <li className="nav-item dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">Hi!
              <Link to="!#" className="auth">{userInfo.name}</Link>
            </li>
            <span className="caret"></span>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/mybag"><i className="fas fa-cart-arrow-down"></i> My bag</Link>
              <Link className="dropdown-item" to="/customer"><i className="fas fa-user profile"></i> Profile</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" onClick={handleLogout} to="/"><i className="fas fa-sign-out-alt"></i> Log out</Link>
            </div>
          </ul>
          :
          <ul className="account-ul">
            <li className="nav-item">Hi!
              <Link to="/auth/login" className="auth">Sign In</Link>
            </li>
            <li className="nav-item">Or
              <Link to="/auth/register" className="auth">Register</Link>
            </li>
        </ul>
      }
      </div>
      <div className="col-md-8">
        <ul className="account-ul">
            <li className="nav-item"><Link to="/" className="item">Daily Deals</Link></li>
            <li className="nav-item"><Link to="/" className="item">Sell</Link></li>
            <li className="nav-item"><Link to="/" className="item">Help & Contact</Link></li>
        </ul>
      </div>
      <div className="col-md-2">
        <ul className="account-ul">
            <li className="nav-item">
              <Link to="/shoppingcart/:cartId" className="item">
                <i className="fas fa-cart-arrow-down">
                  <span className="badge badge-danger">{(cartData.data.length - 1) + totalItemInCart}</span>
                </i>
              </Link>
            </li>
            <li className="nav-item">Your Bag: <span className="auth">&euro; 3.49</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
