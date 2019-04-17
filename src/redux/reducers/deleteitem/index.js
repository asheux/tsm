import * as types from '../../constants/deleteItemTypes';
import initialState from '../initialState';

const deleteItemReducer = (state = initialState.deleteItem, action) => {
  switch(action.type) {
    case types.DELETE_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_ITEM_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default deleteItemReducer;
