import * as types from '../../constants/productsByDepartmentTypes';
import initialState from '../initialState';

const productsDepartmentReducer = (state = initialState.productsByDepartment, action) => {
  switch(action.type) {
    case types.FETCH_PRODUCTS_BY_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_PRODUCTS_BY_DEPARTMENT_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    case types.FETCH_PRODUCTS_BY_DEPARTMENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default productsDepartmentReducer;
