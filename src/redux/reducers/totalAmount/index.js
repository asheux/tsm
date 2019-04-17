import * as types from '../../constants/totalAmountTypes';
import initialState from '../initialState';

const totalAmountReducer = (state = initialState.totalAmount, action) => {
  switch(action.type) {
    case types.FETCH_TOTAL_AMOUNT_CART_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_TOTAL_AMOUNT_CART_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_TOTAL_AMOUNT_CART_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default totalAmountReducer;
