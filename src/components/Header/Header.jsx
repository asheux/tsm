import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="account row">
      <div className="col-md-2">
        <ul className="account-ul">
            <li className="nav-item">Hi! <Link to="/login" className="auth">Login</Link></li>
            <li className="nav-item">Or <Link to="/register" className="auth">Register</Link></li>
        </ul>
      </div>
      <div className="col-md-8">
        <ul className="account-ul">
            <li className="nav-item"><Link to="/deals" className="item">Daily Deals</Link></li>
            <li className="nav-item"><Link to="/sell" className="item">Sell</Link></li>
            <li className="nav-item"><Link to="/contact" className="item">Help & Contact</Link></li>
        </ul>
      </div>
      <div className="col-md-2">
        <ul className="account-ul">
            <li className="nav-item">
              <Link to="/shoppingcart" className="item"><i className="fas fa-cart-arrow-down"></i></Link>
            </li>
            <li className="nav-item">Your Bag: <span className="auth">&euro; 3.49</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
