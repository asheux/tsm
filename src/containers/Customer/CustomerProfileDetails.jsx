import React, { Component } from 'react';
import CustomerProfile from '../../components/CustomerProfile';
import Navbar from '../../components/Navbar';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: '',
        email: '',
        password: '',
        day_phone: '',
        eve_phone: '',
        mob_phone: '',
      },
      confirm: {confirmPass: ''},
      message: '',
      error: ''
    };
  };

  componentDidMount() {
    this.fetchCustomerData();
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { userData, confirm } = this.state;
    userData[name] = value;
    confirm[name] = value;
    this.setState({userData, confirm});
  }

  fetchCustomerData = () => {
    const { fetchcustomerActions } = this.props;
    fetchcustomerActions();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userData, confirm } = this.state;
    if (userData.password !== confirm.confirmPass) {
      this.setState({error: 'The two passwords did not match!'});
    }else {
      const { customerActions } = this.props;
      customerActions(userData).then(data => {
        if (data.type === "UPDATE_CUSTOMER_SUCCESS") {
          this.setState({message: 'Profile updated successfully.'});
          this.fetchCustomerData();
        };
      })
    }
  }

  render() {
    const { message, error } = this.state;
    return (
      <React.Fragment>
        <Navbar menuItems={[]} />
        <CustomerProfile
          message={message}
          error={error}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          {...this.props}
        />
      </React.Fragment>
    );
  };
}

export default Customer;
