import * as types from '../../constants/attributesTypes';
import initialState from '../initialState';

const attributesReducer = (state = initialState.attributes, action) => {
  switch(action.type) {
    case types.FETCH_ATTRIBUTES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_ATTRIBUTES_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_ATTRIBUTES_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default attributesReducer;
