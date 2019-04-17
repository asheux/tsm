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
  const { cartData } = props;

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
            <span class="caret"></span>
            <div class="dropdown-menu">
              <Link class="dropdown-item" to="/mybag"><i className="fas fa-cart-arrow-down"></i> My bag</Link>
              <Link class="dropdown-item" to="/profile"><i class="fas fa-user profile"></i> Profile</Link>
              <div class="dropdown-divider"></div>
              <Link class="dropdown-item" onClick={handleLogout} to="/"><i class="fas fa-sign-out-alt"></i> Log out</Link>
            </div>
          </ul>
          :
          <ul className="account-ul">
            <li className="nav-item">Hi!
              <Link to="/auth/login" className="auth">Login</Link>
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
                  <span class="badge badge-danger">{!cartData ? 0 : cartData.data.length}</span>
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
