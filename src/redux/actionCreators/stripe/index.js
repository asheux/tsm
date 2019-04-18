import axios from 'axios';
import * as types from '../../constants/stripeTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const stripeSuccess = (data) => ({
  type: types.STRIPE_PAYMENT_SUCCESS,
  data
});

export const stripeFailure = (errors) => ({
  type: types.STRIPE_PAYMENT_FAILURE,
  errors
});

export const stripeRequest = () => ({
  type: types.STRIPE_PAYMENT_REQUEST
});

const stripeActions = (data) => dispatch => {
  dispatch(stripeRequest());
  const url = `${baseUrl}/stripe/charge`;
  return axios.post(url, data)
    .then(response => dispatch(stripeSuccess(response.data)))
    .catch(error => dispatch(stripeFailure(error)));
}

export default stripeActions;
