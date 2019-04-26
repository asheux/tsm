import axios from 'axios';
import * as types from '../../constants/productsByDepartmentTypes';
import serializeQuery from '../../../utils/serialize';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchProductsByDepartmentSuccess = (data) => ({
  type: types.FETCH_PRODUCTS_BY_DEPARTMENT_SUCCESS,
  data
});

export const fetchProductsByDepartmentFailure = (errors) => ({
  type: types.FETCH_PRODUCTS_BY_DEPARTMENT_FAILURE,
  errors
});

export const fetchProductsByDepartmentRequest = () => ({
  type: types.FETCH_PRODUCTS_BY_DEPARTMENT_REQUEST
});

const productsByDepartmentActions = (departmentId) => (dispatch, getState) => {
  const { meta } = getState().products;
  const query = {page: meta.page, limit: meta.pageSize};
  dispatch(fetchProductsByDepartmentRequest());
  const url =
    `${baseUrl}/products/inDepartment/${departmentId}?${serializeQuery(query)}`;
  return axios(url)
    .then(response => dispatch(fetchProductsByDepartmentSuccess({
        data: response.data,
        meta: {
          page: 1,
          pageSize: 20,
          total: response.data.count,
        }
      }
    )))
    .catch(error => dispatch(fetchProductsByDepartmentFailure(error)))
}

export default productsByDepartmentActions;
