import React, { Component } from 'react';
import CustomerProfile from '../../components/CustomerProfile';
import Navbar from '../../components/Navbar';

class Customer extends Component {
  /**
   * Creates the ShoppingCart Component and initializes state
   * @constructor
   * @param {*} props - Super props inherited by Component
   */
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

  /**
   * Ensures that the component that updates the cart in mounted
   * Lifecycle implementation
   */
  componentDidMount() {
    this.fetchCustomerData();
  }

  /**
   * Listens to events and changes in form inputs
   *  @param {*} event
   */
  handleChange = (e) => {
    const { value, name } = e.target;
    const { userData, confirm } = this.state;
    userData[name] = value;
    confirm[name] = value;
    this.setState({userData, confirm});
  }

  /**
   * Fetchs customer data from the database and updates then
   * update the component to re-render
   */
  fetchCustomerData = () => {
    const { fetchcustomerActions } = this.props;
    fetchcustomerActions();
  }

  /**
   * Listens to an onClick event on a button in a form
   * if event the the server is queried which then updates the database
   *  @param {*} event
   */
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
