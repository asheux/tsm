import * as types from '../../constants/regionsTypes';
import initialState from '../initialState';

const regionsReducer = (state = initialState.regions, action) => {
  switch(action.type) {
    case types.FETCH_REGIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_REGIONS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_REGIONS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default regionsReducer;
