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
        error: action.error
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default productsReducer;
