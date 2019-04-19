import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import StripeForm from '../../components/StripeForm';
import Navbar from '../../components/Navbar';

class Stripe extends Component {
  /**
   * Creates the ShoppingCart Component and initializes state
   * @constructor
   * @param {*} props - Super props inherited by Component
   */
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        address_1: '',
        address_2: '',
        city: '',
        region: '',
        postal_code: '',
        country: '',
        shipping_region_id: ''
      },
      addressSaved: false,
      shippingTypes: [],
      orderPayload: {
        tax_id: '',
        shipping_id: ''
      },
      error: '',
      message: '',
      orderID: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShippingType = this.handleShippingType.bind(this);
    this.handleTaxChange = this.handleTaxChange.bind(this);
  };


  componentDidMount() {
    const {
      fetchcustomerActions,
      taxesActions,
      regionsActions } = this.props;
    fetchcustomerActions();
    regionsActions();
    taxesActions();
  }
  /**
   * Listens to events and changes in form inputs
   *  @param {*} event
   */
  handleChange = (e) => {
    const { value, name } = e.target;
    const { payload } = this.state;
    payload[name] = value;
    this.setState({payload}, () => {
      const { payload } = this.state;
      const { regionActions } = this.props;
      regionActions(payload.shipping_region_id).then(data => {
        this.setState({shippingTypes: data.data})
      })
    });
  }

  handleShippingType = (e) => {
    const value = e.target.value;
    this.setState({orderPayload: {shipping_id: value}});
  }

  handleTaxChange = (e) => {
    const { value, name } = e.target;
    const { orderPayload,  } = this.state;
    orderPayload[name] = value;
    this.setState({orderPayload});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { payload, orderPayload } = this.state;
    const { fetchedCustomer, postorderActions, match } = this.props;
    const cartID = match.params.cartId;
    const customerID = fetchedCustomer.data.customer_id;
    const orderData = {
      tax_id: orderPayload.tax_id,
      cart_id: cartID,
      customer_id: customerID,
      shipping_id: orderPayload.shipping_id
    };
    const { customerAddressActions } = this.props;
    if (!orderData.tax_id || !orderData.shipping_id) {
      this.setState({error: 'Please fill all required fields!'});
    } else {
      const successMsg =
      "Order saved! Please add you credit card to complete payment.";
      customerAddressActions(payload)
      postorderActions(orderData).then(data => {
        if (data.data) {
          this.setState({
            message: successMsg,
            orderID: data.data.orderId
          });
        } else {
          this.setState({error: 'Sorry! order already placed'});
        }
      });
    }
  }

  handleDescription = (e) => {
    const { value } = e.target;
    this.setState({description: value})
  }

  render() {
    const {
      addressSaved,
      error,
      message,
      orderID,
      description,
      shippingTypes } = this.state;
    const {
      fetchedCustomer,
      fetchedTaxes,
      postedOrder,
      fetchedRegions } = this.props;
    const { loading } = postedOrder;
    return (
      <React.Fragment>
        <Navbar
          {...this.props}
          menuItems={[]}
        />
        <StripeProvider apiKey="pk_test_NcwpaplBCuTL6I0THD44heRe">
          <Elements>
            <StripeForm
              {...this.props}
              error={error}
              desc={description}
              orderID={orderID}
              handleDescription={this.handleDescription}
              message={message}
              loading={loading}
              saved={addressSaved}
              shippingTypes={shippingTypes}
              regions={fetchedRegions.data}
              taxes={fetchedTaxes.data}
              handleTaxChange={this.handleTaxChange}
              handleShippingType={this.handleShippingType}
              fetchedCustomer={fetchedCustomer.data}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Elements>
        </StripeProvider>
      </React.Fragment>
    );
  };
}

export default Stripe;
