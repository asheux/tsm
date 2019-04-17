import * as types from '../../constants/shoppingcartTypes';
import initialState from '../initialState';

const shoppingcartReducer = (state = initialState.shoppingCart, action) => {
  switch(action.type) {
    case types.FETCH_SHOPPING_CART_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_SHOPPING_CART_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_SHOPPING_CART_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default shoppingcartReducer;
