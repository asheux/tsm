import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { CardElement, injectStripe } from 'react-stripe-elements';
import CustomerAddressForm from '../CustomerAddressForm';

class StripeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payError: '',
      curr: '',
      stripeSuccess: ''
    }
  }

  handleCurrency = (e) => {
    const { value } = e.target;
    this.setState({curr: value})
  }

  handleClick = (e) => {
    e.preventDefault();
    const {
      stripe,
      getOrderActions,
      stripeActions,
      desc,
      orderID } = this.props;
    const { curr } = this.state;
    stripe.createToken({name: 'brian mboya'}).then(({token}) => {
      if (orderID) {
        getOrderActions(orderID).then(res => {
          const data = res.data[0];
          const totalAmount = Math.round(data.subtotal) * 100;
          const payload = {
            stripeToken: token.id,
            description: desc,
            order_id: orderID,
            amount: totalAmount,
            currency: curr
          };
          stripeActions(payload).then(data => {
            if (data.data) {
              this.setState({
                stripeSuccess: 'Payment successfull!! Thank you for shopping with us.'
              });
            }
          })
        });
      } else {
        this.setState({payError: 'Please place an order and try again!'})
      }
    });
  };

  render() {
    const {
      handleSubmit,
      loading,
      handleDescription
    } = this.props;
    const { payError, stripeSuccess } = this.state;

    const response = stripeSuccess || payError;
    const resSuccess = 'alert alert-success';
    const resErr = 'alert alert-danger';
    
    return (
      <div className="container shipping-container">
        <div className="row shipping checkout">
          <form className="col-md-12" onSubmit={handleSubmit}>
            <CustomerAddressForm
              {...this.props}
            />
            <br />
            <div className="row">
              <div className="col-md-6">
                <button
                  onSubmit={handleSubmit}
                  name="submit"
                  type="submit"
                  className="add-to-cart btn btn-default">
                  {loading ? 'Loading...' : 'Save Order'}
                </button>
              </div>
            </div>
            <br />
            <h3 className="header-address">Credit Card</h3>
            <hr />
            <div className="stripe">
              {response
                ? <span
                className={
                  response === payError
                  ? resErr
                  : resSuccess}>{response}
                  </span>
                  : ''
              }
            </div>
            <br />
            <div className="stripe">
              <i className="fab fa-cc-stripe"></i>
            </div>
            <br />
            <CardElement />
            <br />
            <div className="row">
              <div className="review-form-desc col-md-6" noValidate="novalidate">
                <label className="control-label" htmlFor="desc">Description *</label>
                <textarea
                  onChange={handleDescription}
                  name="message"
                  placeholder="Order description">
                </textarea>
              </div>
              <div onChange={this.handleCurrency} className="col-md-3 offset-1">
                <select className="form-control" >
                  <option value="">Select Curency</option>
                  <option value="USD">USD</option>
                  <option value="EURO">AMD</option>
                  <option value="KSH">AED</option>
                  <option value="KSH">AFN*</option>
                  <option value="KSH">ANG</option>
                  <option value="KSH">AUD</option>
                  <option value="KSH">BDT</option>
                  <option value="KSH">BBD</option>
                  <option value="KSH">BND</option>
                  <option value="KSH">BWP</option>
                </select>
              </div>
            </div>
            <br />
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
                <button
                  onClick={this.handleClick}
                  name="submit"
                  type="submit"
                  className="add-to-cart btn payStripe btn-default">
                  Pay
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default injectStripe(StripeForm);
