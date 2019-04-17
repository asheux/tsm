import React, { Component } from 'react';
import CustomerAddressForm from '../../components/CustomerAddressForm';
import Navbar from '../../components/Navbar';

class CustomerAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <React.Fragment>
        <Navbar menuItems={[]} />
        <CustomerAddressForm />
      </React.Fragment>
    );
  };
}

export default CustomerAddress;
