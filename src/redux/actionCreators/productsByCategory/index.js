import axios from 'axios';
import * as types from '../../constants/productsByCategoryTypes';
import serializeQuery from '../../../utils/serialize';

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

const productsByCategoryActions = (categoryId) => (dispatch, getState) => {
  const { meta } = getState().products;
  const query = {page: meta.page, limit: meta.pageSize};
  dispatch(fetchProductsByCategoryRequest());
  const url =
    `${baseUrl}/products/inCategory/${categoryId}?${serializeQuery(query)}`;
  return axios(url)
    .then(response => dispatch(fetchProductsByCategorySuccess({
        data: response.data,
        meta: {
          page: 1,
          pageSize: 20,
          total: response.data.count,
        }
      })))
    .catch(error => dispatch(fetchProductsByCategoryFailure(error)))
}

export default productsByCategoryActions;
