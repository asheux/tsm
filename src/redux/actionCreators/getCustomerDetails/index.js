import axios from 'axios';
import * as types from '../../constants/fetchfetchcustomerTypes';
import * as auth from '../../../utils';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchcustomerSuccess = (data) => ({
  type: types.FETCH_CUSTOMER_SUCCESS,
  data
});

export const fetchcustomerFailure = (errors) => ({
  type: types.FETCH_CUSTOMER_FAILURE,
  errors
});

export const fetchcustomerRequest = () => ({
  type: types.FETCH_CUSTOMER_REQUEST
});

const fetchcustomerActions = () => dispatch => {
  dispatch(fetchcustomerRequest());
  const url = `${baseUrl}/customer`;
  return axios.get(url, {headers: {'user-key': auth.getToken()}})
    .then(response => dispatch(fetchcustomerSuccess(response.data)))
    .catch(error => dispatch(fetchcustomerFailure(error)))
}

export default fetchcustomerActions;
