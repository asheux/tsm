import axios from 'axios';
import * as types from '../../constants/removecartitemTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const removecartitemSuccess = (data) => ({
    type: types.REMOVE_CART_ITEM_SUCCESS,
  data
});

export const removecartitemFailure = (errors) => ({
    type: types.REMOVE_CART_ITEM_FAILURE,
  errors
});

export const removecartitemRequest = () => ({
    type: types.REMOVE_CART_ITEM_REQUEST
});

const removecartitemActions = (itemId) => dispatch => {
  dispatch(removecartitemRequest());
  const url = `${baseUrl}/shoppingcart/removeProduct/${itemId}`;
  return axios.delete(url)
    .then(response => dispatch(removecartitemSuccess(response.data)))
    .catch(error => dispatch(removecartitemFailure(error)))
}

export default removecartitemActions;
