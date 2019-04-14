import { combineReducers } from 'redux';
import departmentsReducer from './departments';
import categoriesReducer from './categories';
import productsReducer from './products';
import productsByCategoryReducer from './productsByCategory';
import productsDepartmentReducer from './productsByDepartment';
import categoriesDepartmentReducer from './categoriesByDepartment';

const rootReducer = combineReducers({
  departments: departmentsReducer,
  categories: categoriesReducer,
  products: productsReducer,
  productsByCategory: productsByCategoryReducer,
  productsDepartment: productsDepartmentReducer,
  categoriesDepartment: categoriesDepartmentReducer
});

export default rootReducer;
