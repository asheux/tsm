import React from 'react';
import { Link } from 'react-router-dom';
import AddressFormInput from '../AddressFormInput';

const CustomerAddress = () => {
  return (
    <div className="container shipping-container">
      <div className="row shipping">
        <div className="col-md-12">
          <h3 className="header-address">Shipping Address</h3>
          <hr />
          <div className="row">
            <AddressFormInput type="text" name="first_name" label="First Name *" />
            <AddressFormInput type="text" name="last_name" label="Last Name *" />
          </div>
          <div className="row">
            <AddressFormInput type="text" name="address" label="Address *" />
            <AddressFormInput type="text" name="city" label="City *" />
          </div>
          <div className="row">
            <AddressFormInput type="text" name="state" label="State *" />
            <AddressFormInput type="text" name="code" label="ZIP code *" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <Link
                  className="add-to-cart btn btn-default back-btn"
                  to="/">
                  Go back
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <Link
                className="add-to-cart btn btn-default pay"
                to="/stripe/charge">
                Proceed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerAddress;
