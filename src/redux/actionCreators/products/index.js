import axios from 'axios';
import * as types from '../../constants/productsTypes';
import serializeQuery from '../../../utils/serialize';

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

const productsActions = () => (dispatch, getState) => {
  const { meta } = getState().products;
  const query = {page: meta.page, limit: meta.pageSize}
  dispatch(fetchProductsRequest());
  const url = `${baseUrl}/products?${serializeQuery(query)}`;
  return axios(url)
    .then(response => dispatch(fetchProductsSuccess({
      data: response.data,
      meta: {
        page: 1,
        pageSize: 20,
        total: response.data.count,
      }
    })))
    .catch(error => dispatch(fetchProductsFailure(error)))
}

export default productsActions;
