import axios from 'axios';
import * as types from '../../constants/regionsTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const regionsSuccess = (data) => ({
  type: types.FETCH_REGIONS_SUCCESS,
  data
});

export const regionsFailure = (errors) => ({
  type: types.FETCH_REGIONS_FAILURE,
  errors
});

export const regionsRequest = () => ({
  type: types.FETCH_REGIONS_REQUEST
});

const regionsActions = () => dispatch => {
  dispatch(regionsRequest());
  const url = `${baseUrl}/shipping/regions`;
  return axios(url)
    .then(response => dispatch(regionsSuccess(response.data)))
    .catch(error => dispatch(regionsFailure(error)))
}

export default regionsActions;
