import axios from 'axios';
import * as types from '../../constants/deleteItemTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const deleteItemSuccess = (data) => ({
    type: types.DELETE_ITEM_SUCCESS,
  data
});

export const deleteItemFailure = (errors) => ({
    type: types.DELETE_ITEM_FAILURE,
  errors
});

export const deleteItemRequest = () => ({
    type: types.DELETE_ITEM_REQUEST
});

const deleteItemActions = (cartId) => dispatch => {
  dispatch(deleteItemRequest());
  const url = `${baseUrl}/shoppingcart/empty/${cartId}`;
  return axios.delete(url)
    .then(response => dispatch(deleteItemSuccess(response.data)))
    .catch(error => dispatch(deleteItemFailure(error)))
}

export default deleteItemActions;
