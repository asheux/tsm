import * as types from '../../constants/removecartitemTypes';
import initialState from '../initialState';

const removecartitemReducer = (state = initialState.removeItem, action) => {
  switch(action.type) {
    case types.REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.REMOVE_CART_ITEM_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default removecartitemReducer;
