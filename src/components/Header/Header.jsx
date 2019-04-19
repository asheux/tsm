import React from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../../utils';
import * as accessCart from '../../utils/cart';
import handleLogout from '../../utils/Logout';


/**
 * This algorithm computes the item in the cart
 *  @param {*} array
 */
const computeTotal = (data) => {
  if (!data || data.length === 0) return '';
  let total = 0;
  for (let i = 0; i < data.length; i+=1) {
    if (data.length !== 0) {
      // eslint-disable-next-line
      Object.keys(data[i]).forEach(item => {
        if(item === 'quantity') {
          total += data[i][item];
        }
      });
    }
  };
  return total;
}

const Header = ({...props}) => {
  const token = auth.getToken();
  let userInfo = '';
  if (token) {
    userInfo = auth.userDetailsFromToken(token);
  }
  const { shoppingCart } = props;
  const total = computeTotal(shoppingCart)
  const generatedId = accessCart.getGeneratedCartId();

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
              <Link className="dropdown-item" to="/myorders"><i className="fas fa-cart-arrow-down"></i> My Orders</Link>
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
              <Link to={`/shoppingcart/${generatedId}`} className="item">
                <i className="fas fa-cart-arrow-down">
                  <span className="badge badge-danger">{total}</span>
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
