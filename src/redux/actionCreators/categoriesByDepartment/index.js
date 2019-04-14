import axios from 'axios';
import * as types from '../../constants/categoriesByDepartmentTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchCategoriesByDepartmentSuccess = (data) => ({
  type: types.FETCH_CATEGORIES_BY_DEPARTMENT_SUCCESS,
  data
});

export const fetchCategoriesByDepartmentFailure = (errors) => ({
  type: types.FETCH_CATEGORIES_BY_DEPARTMENT_FAILURE,
  errors
});

export const fetchCategoriesByDepartmentRequest = () => ({
  type: types.FETCH_CATEGORIES_BY_DEPARTMENT_REQUEST
});

const categoriesByDepartmentActions = (departmentId) => dispatch => {
  dispatch(fetchCategoriesByDepartmentRequest());
  const url = `${baseUrl}/categories/inDepartment/${departmentId}`;
  return axios(url)
    .then(response => dispatch(fetchCategoriesByDepartmentSuccess(response.data)))
    .catch(error => dispatch(fetchCategoriesByDepartmentFailure(error)))
}

export default categoriesByDepartmentActions;
