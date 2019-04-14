import axios from 'axios';
import * as types from '../../constants/productsByCategoryTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchProductsByCategorySuccess = (data) => ({
  type: types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  data
});

export const fetchProductsByCategoryFailure = (errors) => ({
  type: types.FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
  errors
});

export const fetchProductsByCategoryRequest = () => ({
  type: types.FETCH_PRODUCTS_BY_CATEGORY_REQUEST
});

const productsByCategoryActions = (categoryId) => dispatch => {
  dispatch(fetchProductsByCategoryRequest());
  const url = `${baseUrl}/products/inCategory/${categoryId}`;
  return axios(url)
    .then(response => dispatch(fetchProductsByCategorySuccess(response.data)))
    .catch(error => dispatch(fetchProductsByCategoryFailure(error)))
}

export default productsByCategoryActions;
