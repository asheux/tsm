import { connect } from "react-redux";
import customerActions from "../../redux/actionCreators/customer";
import fetchcustomerActions from "../../redux/actionCreators/getCustomerDetails";
import CustomerProfileDetails from "./CustomerProfileDetails";

/**
 * map state to props or updates the
 * component with infomation from the store
 * using the action creators
 *  @param {*} object
 */
const mapStateToProps = ({ updateCustomer, fetchCustomer }) => ({
    updatedCustomer: updateCustomer,
    fetchedCustomer: fetchCustomer
});

export default connect(mapStateToProps, {
    customerActions,
    fetchcustomerActions
})(CustomerProfileDetails);
