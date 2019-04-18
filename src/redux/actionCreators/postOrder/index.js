import axios from 'axios';
import * as types from '../../constants/postorderTypes';
import * as auth from '../../../utils';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const postorderSuccess = (data) => ({
  type: types.POST_ORDER_SUCCESS,
  data
});

export const postorderFailure = (errors) => ({
  type: types.POST_ORDER_FAILURE,
  errors
});

export const postorderRequest = () => ({
  type: types.POST_ORDER_REQUEST
});

const postorderActions = (data) => dispatch => {
  dispatch(postorderRequest());
  const url = `${baseUrl}/orders`;
  return axios.post(url, data, {headers: {'user-key': auth.getToken()}})
    .then(response => dispatch(postorderSuccess(response.data)))
    .catch(error => dispatch(postorderFailure(error)))
}

export default postorderActions;
