import * as types from '../../constants/customerAddressTypes';
import initialState from '../initialState';

const customerAddressReducer = (state = initialState.customerAddress, action) => {
  switch(action.type) {
    case types.UPDATE_CUSTOMER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_CUSTOMER_ADDRESS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.UPDATE_CUSTOMER_ADDRESS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default customerAddressReducer;
