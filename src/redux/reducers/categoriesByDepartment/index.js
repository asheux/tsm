import * as types from '../../constants/categoriesByDepartmentTypes';
import initialState from '../initialState';

const categoriesDepartmentReducer = (state = initialState.categoriesByDepartment, action) => {
  switch(action.type) {
    case types.FETCH_CATEGORIES_BY_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_CATEGORIES_BY_DEPARTMENT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case types.FETCH_CATEGORIES_BY_DEPARTMENT_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default categoriesDepartmentReducer;
