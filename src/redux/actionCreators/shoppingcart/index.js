import axios from 'axios';
import * as types from '../../constants/shoppingcartTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchshoppingcartSuccess = (data) => ({
  type: types.FETCH_SHOPPING_CART_SUCCESS,
  data
});

export const fetchshoppingcartFailure = (errors) => ({
  type: types.FETCH_SHOPPING_CART_FAILURE,
  errors
});

export const fetchshoppingcartRequest = () => ({
  type: types.FETCH_SHOPPING_CART_REQUEST
});

const shoppingcartActions = (cartId) => dispatch => {
  dispatch(fetchshoppingcartRequest());
  const url = `${baseUrl}/shoppingcart/${cartId}`;
  return axios(url)
    .then(response => dispatch(fetchshoppingcartSuccess(response.data)))
    .catch(error => dispatch(fetchshoppingcartFailure(error)))
}

export default shoppingcartActions;
