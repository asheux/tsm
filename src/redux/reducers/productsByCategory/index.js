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
        errors: action.errors,
        loading: false
      };
    case types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default productsByCategoryReducer;
