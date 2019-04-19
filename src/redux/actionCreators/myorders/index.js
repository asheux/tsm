import axios from 'axios';
import * as types from '../../constants/myordersTypes';
import * as auth from '../../../utils';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const myordersSuccess = (data) => ({
  type: types.FETCH_MY_ORDERS_SUCCESS,
  data
});

export const myordersFailure = (errors) => ({
  type: types.FETCH_MY_ORDERS_FAILURE,
  errors
});

export const myordersRequest = () => ({
  type: types.FETCH_MY_ORDERS_REQUEST
});

const myordersActions = () => dispatch => {
  dispatch(myordersRequest());
  const url = `${baseUrl}/orders/inCustomer`;
  return axios(url, {headers: {'user-key': auth.getToken()}})
    .then(response => dispatch(myordersSuccess(response.data)))
    .catch(error => dispatch(myordersFailure(error)))
}

export default myordersActions;
