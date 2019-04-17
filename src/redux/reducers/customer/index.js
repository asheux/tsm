import * as types from '../../constants/customerTypes';
import initialState from '../initialState';

const customerReducer = (state = initialState.customer, action) => {
  switch(action.type) {
    case types.UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_CUSTOMER_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default customerReducer;
