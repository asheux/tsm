import axios from 'axios';
import * as types from '../../constants/loginTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
});

export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  data
});

export const loginFailure = (errors) => ({
  type: types.LOGIN_FAILURE,
  errors
});

const loginActions = (data) => dispatch => {
  dispatch(loginRequest());
  const url = `${baseUrl}/customers/login`;
  return axios.post(url, data)
      .then(response => dispatch(loginSuccess(response.data)))
      .catch(error => dispatch(loginFailure(error)));
}

export default loginActions;
