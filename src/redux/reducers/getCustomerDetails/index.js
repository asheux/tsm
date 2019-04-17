import * as types from '../../constants/fetchfetchcustomerTypes';
import initialState from '../initialState';

const fetchfetchcustomerReducer = (state = initialState.customerDetails, action) => {
  switch(action.type) {
    case types.FETCH_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_CUSTOMER_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default fetchfetchcustomerReducer;
