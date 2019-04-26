import * as types from '../../constants/searchengineTypes';
import initialState from '../initialState';

const searchReducer = (state = initialState.searchResults, action) => {
  switch(action.type) {
    case types.SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.SEARCH_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default searchReducer;
