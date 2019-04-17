import axios from 'axios';
import * as types from '../../constants/singleProductTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchSingleProductSuccess = (data) => ({
  type: types.FETCH_SINGLE_PRODUCT_SUCCESS,
  data
});

export const fetchSingleProductFailure = (errors) => ({
  type: types.FETCH_SINGLE_PRODUCT_FAILURE,
  errors
});

export const fetchSingleProductRequest = () => ({
  type: types.FETCH_SINGLE_PRODUCT_REQUEST
});

const singleProductActions = (productId) => dispatch => {
  dispatch(fetchSingleProductRequest());
  const url = `${baseUrl}/products/${productId}`;
  return axios(url)
    .then(response => dispatch(fetchSingleProductSuccess(response.data)))
    .catch(error => dispatch(fetchSingleProductFailure(error)))
}

export default singleProductActions;
