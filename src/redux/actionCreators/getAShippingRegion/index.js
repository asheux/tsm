import axios from 'axios';
import * as types from '../../constants/regionTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const regionSuccess = (data) => ({
  type: types.FETCH_REGION_SUCCESS,
  data
});

export const regionFailure = (errors) => ({
  type: types.FETCH_REGION_FAILURE,
  errors
});

export const regionRequest = () => ({
  type: types.FETCH_REGION_REQUEST
});

const regionActions = (shippingRegionId) => dispatch => {
  dispatch(regionRequest());
  const url = `${baseUrl}/shipping/regions/${shippingRegionId}`;
  return axios(url)
    .then(response => dispatch(regionSuccess(response.data)))
    .catch(error => dispatch(regionFailure(error)))
}

export default regionActions;
