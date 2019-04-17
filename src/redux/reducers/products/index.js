import * as types from '../../constants/productsTypes';
import initialState from '../initialState';

const productsReducer = (state = initialState.products, action) => {
  switch(action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default productsReducer;
