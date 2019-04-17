import * as types from '../../constants/generateTypes';
import initialState from '../initialState';

const generateReducer = (state = initialState.uniqueid, action) => {
  switch(action.type) {
    case types.FETCH_GENERATE_UNIQUE_CART_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_GENERATE_UNIQUE_CART_ID_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_GENERATE_UNIQUE_CART_ID_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default generateReducer;
