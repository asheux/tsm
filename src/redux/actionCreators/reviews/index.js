import axios from 'axios';
import * as types from '../../constants/reviewsTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const reviewsSuccess = (data) => ({
  type: types.FETCH_REVIEWS_SUCCESS,
  data
});

export const reviewsFailure = (errors) => ({
  type: types.FETCH_REVIEWS_FAILURE,
  errors
});

export const reviewsRequest = () => ({
  type: types.FETCH_REVIEWS_REQUEST
});

const reviewsActions = (productId) => dispatch => {
  dispatch(reviewsRequest());
  const url = `${baseUrl}/products/${productId}/reviews`;
  return axios(url)
    .then(response => dispatch(reviewsSuccess(response.data)))
    .catch(error => dispatch(reviewsFailure(error)))
}

export default reviewsActions;
