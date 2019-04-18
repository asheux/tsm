import axios from 'axios';
import * as types from '../../constants/customerAddressTypes';
import * as auth from '../../../utils';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const customerAddressSuccess = (data) => ({
  type: types.UPDATE_CUSTOMER_ADDRESS_SUCCESS,
  data
});

export const customerAddressFailure = (errors) => ({
  type: types.UPDATE_CUSTOMER_ADDRESS_FAILURE,
  errors
});

export const customerAddressRequest = () => ({
  type: types.UPDATE_CUSTOMER_ADDRESS_REQUEST
});

const customerAddressActions = (data) => dispatch => {
  dispatch(customerAddressRequest());
  const url = `${baseUrl}/customers/address`;
  return axios.put(url, data, {headers: {'user-key': auth.getToken()}})
    .then(response => dispatch(customerAddressSuccess(response.data)))
    .catch(error => dispatch(customerAddressFailure(error)))
}

export default customerAddressActions;
