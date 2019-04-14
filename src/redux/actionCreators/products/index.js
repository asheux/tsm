import axios from 'axios';
import * as types from '../../constants/productsTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchProductsSuccess = (data) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  data
});

export const fetchProductsFailure = (errors) => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  errors
});

export const fetchProductsRequest = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const productsActions = () => dispatch => {
  dispatch(fetchProductsRequest());
  const url = `${baseUrl}/products`;
  return axios(url)
    .then(response => dispatch(fetchProductsSuccess(response.data)))
    .catch(error => dispatch(fetchProductsFailure(error)))
}

export default productsActions;
