import * as types from '../../constants/getOrderTypes';
import initialState from '../initialState';

const getOrderReducer = (state = initialState.getOrder, action) => {
  switch(action.type) {
    case types.FETCH_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_ORDER_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default getOrderReducer;
