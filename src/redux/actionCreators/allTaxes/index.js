import axios from 'axios';
import * as types from '../../constants/taxesTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const taxesSuccess = (data) => ({
  type: types.FETCH_TAXES_SUCCESS,
  data
});

export const taxesFailure = (errors) => ({
  type: types.FETCH_TAXES_FAILURE,
  errors
});

export const taxesRequest = () => ({
  type: types.FETCH_TAXES_REQUEST
});

const taxesActions = () => dispatch => {
  dispatch(taxesRequest());
  const url = `${baseUrl}/tax`;
  return axios(url)
    .then(response => dispatch(taxesSuccess(response.data)))
    .catch(error => dispatch(taxesFailure(error)))
}

export default taxesActions;
