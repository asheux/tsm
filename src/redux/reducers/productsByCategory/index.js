import * as types from '../../constants/productsByCategoryTypes';
import initialState from '../initialState';
import * as paginateTypes from '../../constants/paginateTypes';

const productsByCategoryReducer = (state = initialState.products, action) => {
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

    case paginateTypes.PRODUCTS_PAGINATE_META_DATA:
      return {
        ...state,
        meta: {
          ...state.meta,
          ...action.meta
        }
      };

    case types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.data,
        meta: {
          ...state.meta,
          ...action.meta
        },
        loading: false
      };
    default:
      return state;
  }
}

export default productsByCategoryReducer;
