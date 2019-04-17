import axios from 'axios';
import * as types from '../../constants/totalAmountTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchtotalAmountSuccess = (data) => ({
  type: types.FETCH_TOTAL_AMOUNT_CART_SUCCESS,
  data
});

export const fetchtotalAmountFailure = (errors) => ({
  type: types.FETCH_TOTAL_AMOUNT_CART_FAILURE,
  errors
});

export const fetchtotalAmountRequest = () => ({
  type: types.FETCH_TOTAL_AMOUNT_CART_REQUEST
});

const totalAmountActions = (cartId) => dispatch => {
  dispatch(fetchtotalAmountRequest());
  const url = `${baseUrl}/shoppingcart/totalAmount/${cartId}`;
  return axios(url)
    .then(response => dispatch(fetchtotalAmountSuccess(response.data)))
    .catch(error => dispatch(fetchtotalAmountFailure(error)))
}

export default totalAmountActions;
