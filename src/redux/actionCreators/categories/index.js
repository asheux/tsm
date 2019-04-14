import axios from 'axios';
import * as types from '../../constants/categoriesTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchCategoriesSuccess = (data) => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  data
});

export const fetchCategoriesFailure = (errors) => ({
  type: types.FETCH_CATEGORIES_FAILURE,
  errors
});

export const fetchCategoriesRequest = () => ({
  type: types.FETCH_CATEGORIES_REQUEST
});

const categoriesActions = () => dispatch => {
  dispatch(fetchCategoriesRequest());
  const url = `${baseUrl}/categories`;
  return axios(url)
    .then(response => dispatch(fetchCategoriesSuccess(response.data)))
    .catch(error => dispatch(fetchCategoriesFailure(error)))
}

export default categoriesActions;
