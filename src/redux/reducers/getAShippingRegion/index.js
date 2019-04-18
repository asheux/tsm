import * as types from '../../constants/regionTypes';
import initialState from '../initialState';

const regionReducer = (state = initialState.region, action) => {
  switch(action.type) {
    case types.FETCH_REGION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_REGION_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_REGION_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default regionReducer;
