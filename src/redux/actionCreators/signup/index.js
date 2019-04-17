import axios from 'axios';
import * as types from '../../constants/signupTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const signupSuccess = (data) => ({
  type: types.SIGNUP_SUCCESS,
  data
});

export const signupFailure = (errors) => ({
  type: types.SIGNUP_FAILURE,
  errors
});

export const signupRequest = () => ({
  type: types.SIGNUP_REQUEST
});

const signupActions = (data) => dispatch => {
  dispatch(signupRequest());
  const url = `${baseUrl}/customers`;
  return axios.post(url, data)
    .then(response => dispatch(signupSuccess(response.data)))
    .catch(error => dispatch(signupFailure(error)));
}

export default signupActions;
