import * as types from '../../constants/singleProductTypes';
import initialState from '../initialState';

const singleProductReducer = (state = initialState.singleProduct, action) => {
  switch(action.type) {
    case types.FETCH_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default singleProductReducer;
