import axios from 'axios';
import * as types from '../../constants/customerTypes';
import * as auth from '../../../utils';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const customerSuccess = (data) => ({
  type: types.UPDATE_CUSTOMER_SUCCESS,
  data
});

export const customerFailure = (errors) => ({
  type: types.UPDATE_CUSTOMER_FAILURE,
  errors
});

export const customerRequest = () => ({
  type: types.UPDATE_CUSTOMER_REQUEST
});

const customerActions = (data) => dispatch => {
  dispatch(customerRequest());
  const url = `${baseUrl}/customer`;
  return axios.put(url, data, {headers: {'user-key': auth.getToken()}})
    .then(response => dispatch(customerSuccess(response.data)))
    .catch(error => dispatch(customerFailure(error)))
}

export default customerActions;
