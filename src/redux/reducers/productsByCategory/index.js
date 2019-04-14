import * as types from '../../constants/productsByCategoryTypes';
import initialState from '../initialState';

const productsByCategoryReducer = (state = initialState.productsByCategory, action) => {
  switch(action.type) {
    case types.FETCH_PRODUCTS_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_PRODUCTS_BY_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default productsByCategoryReducer;
