import axios from 'axios';
import * as types from '../../constants/productsByDepartmentTypes';

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

const productsByDepartmentActions = (departmentId) => dispatch => {
  dispatch(fetchProductsByDepartmentRequest());
  const url = `${baseUrl}/products/inDepartment/${departmentId}`;
  return axios(url)
    .then(response => dispatch(fetchProductsByDepartmentSuccess(response.data)))
    .catch(error => dispatch(fetchProductsByDepartmentFailure(error)))
}

export default productsByDepartmentActions;
