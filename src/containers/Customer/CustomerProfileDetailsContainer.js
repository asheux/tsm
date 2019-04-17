import { connect } from 'react-redux';
import customerActions from '../../redux/actionCreators/customer';
import fetchcustomerActions from '../../redux/actionCreators/getCustomerDetails';
import CustomerProfileDetails from './CustomerProfileDetails';

const mapStateToProps = ({
  updateCustomer,
  fetchCustomer
}) => ({
  updatedCustomer: updateCustomer,
  fetchedCustomer: fetchCustomer
});

export default connect(
  mapStateToProps,
  {
    customerActions,
    fetchcustomerActions
  }
)(CustomerProfileDetails);
