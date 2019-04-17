import * as types from '../../constants/reviewsTypes';
import initialState from '../initialState';

const reviewsReducer = (state = initialState.reviews, action) => {
  switch(action.type) {
    case types.FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default reviewsReducer;
