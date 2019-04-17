import axios from 'axios';
import * as types from '../../constants/attributesTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const attributesSuccess = (data) => ({
  type: types.FETCH_ATTRIBUTES_SUCCESS,
  data
});

export const attributesFailure = (errors) => ({
  type: types.FETCH_ATTRIBUTES_FAILURE,
  errors
});

export const attributesRequest = () => ({
  type: types.FETCH_ATTRIBUTES_REQUEST
});

const attributesActions = (productId) => dispatch => {
  dispatch(attributesRequest());
  const url = `${baseUrl}/attributes/inProduct/${productId}`;
  return axios(url)
    .then(response => dispatch(attributesSuccess(response.data)))
    .catch(error => dispatch(attributesFailure(error)))
}

export default attributesActions;
