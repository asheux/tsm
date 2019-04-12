import axios from 'axios';
import * as types from '../../constants/departmentsTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchDepartmentSuccess = (data) => ({
  type: types.FETCH_DEPARTMENT_SUCCESS,
  data
});

export const fetchDepartmentFailure = (errors) => ({
  type: types.FETCH_DEPARTMENT_FAILURE,
  errors
});

export const fetchDepartmentRequest = () => ({
  type: types.FETCH_DEPARTMENT_REQUEST
});

const departmentActions = (departmentId) => dispatch => {
  dispatch(fetchDepartmentRequest());
  const url =
  departmentId ? `${baseUrl}/departments/${departmentId}`
  : `${baseUrl}/departments`;
  return axios(url)
    .then(response => dispatch(fetchDepartmentSuccess(response.data)))
    .catch(error => dispatch(fetchDepartmentFailure(error)))
}

export default departmentActions;
