import * as types from '../../constants/departmentsTypes';
import initialState from '../initialState';

const departmentsReducer = (state = initialState.departments, action) => {
  switch(action.type) {
    case types.FETCH_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_DEPARTMENT_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_DEPARTMENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default departmentsReducer;
