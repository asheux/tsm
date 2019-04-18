import axios from 'axios';
import * as types from '../../constants/getOrderTypes';
import * as auth from '../../../utils';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getOrderSuccess = (data) => ({
  type: types.FETCH_ORDER_SUCCESS,
  data
});

export const getOrderFailure = (errors) => ({
  type: types.FETCH_ORDER_FAILURE,
  errors
});

export const getOrderRequest = () => ({
  type: types.FETCH_ORDER_REQUEST
});

const getOrderActions = (orderId) => dispatch => {
  dispatch(getOrderRequest());
  const url = `${baseUrl}/orders/${orderId}`;
  return axios(url, {headers: {'user-key': auth.getToken()}})
    .then(response => dispatch(getOrderSuccess(response.data)))
    .catch(error => dispatch(getOrderFailure(error)))
}

export default getOrderActions;
