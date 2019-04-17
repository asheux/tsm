import axios from 'axios';
import * as types from '../../constants/generateTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const generateSuccess = (data) => ({
  type: types.FETCH_GENERATE_UNIQUE_CART_ID_SUCCESS,
  data
});

export const generateFailure = (errors) => ({
  type: types.FETCH_GENERATE_UNIQUE_CART_ID_FAILURE,
  errors
});

export const generateRequest = () => ({
  type: types.FETCH_GENERATE_UNIQUE_CART_ID_REQUEST
});

const generateActions = () => dispatch => {
  dispatch(generateRequest());
  const url = `${baseUrl}/shoppingcart/generateUniqueId`;
  return axios(url)
    .then(response => dispatch(generateSuccess(response.data)))
    .catch(error => dispatch(generateFailure(error)))
}

export default generateActions;
