import * as types from '../../constants/taxesTypes';
import initialState from '../initialState';

const taxesReducer = (state = initialState.taxes, action) => {
  switch(action.type) {
    case types.FETCH_TAXES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_TAXES_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_TAXES_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default taxesReducer;
