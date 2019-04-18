import { connect } from 'react-redux';
import customerAddressActions from '../../redux/actionCreators/customerAddress';
import fetchcustomerActions from '../../redux/actionCreators/getCustomerDetails';
import regionsActions from '../../redux/actionCreators/shippingRegions';
import regionActions from '../../redux/actionCreators/getAShippingRegion';
import taxesActions from '../../redux/actionCreators/allTaxes';
import postorderActions from '../../redux/actionCreators/postOrder';
import getOrderActions from '../../redux/actionCreators/getOrder';
import stripeActions from '../../redux/actionCreators/stripe';
import Stripe from './Stripe';

const mapStateToProps = ({
  updateCustomerAddress,
  fetchCustomer,
  regions,
  region,
  taxes,
  orders,
  getOrder,
  stripe
}) => ({
  updatedCustomerAddress: updateCustomerAddress,
  fetchedCustomer: fetchCustomer,
  fetchedRegions: regions,
  fetchedTaxes: taxes,
  postedOrder: orders,
  fetchedOrder: getOrder,
  stripePayment: stripe
});

export default connect(
  mapStateToProps,
  {
    customerAddressActions,
    fetchcustomerActions,
    regionsActions,
    regionActions,
    taxesActions,
    postorderActions,
    getOrderActions,
    stripeActions
  }
)(Stripe);
