import axios from 'axios';
import * as types from '../../constants/updateItemTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const updateItemSuccess = (data) => ({
  type: types.UPDATE_ITEM_SUCCESS,
  data
});

export const updateItemFailure = (errors) => ({
  type: types.UPDATE_ITEM_FAILURE,
  errors
});

export const updateItemRequest = () => ({
  type: types.UPDATE_ITEM_REQUEST
});

const updateItemActions = (itemId, data) => dispatch => {
  dispatch(updateItemRequest());
  const url = `${baseUrl}/shoppingcart/update/${itemId}`;
  return axios.put(url, data)
    .then(response => dispatch(updateItemSuccess(response.data)))
    .catch(error => dispatch(updateItemFailure(error)))
}

export default updateItemActions;
