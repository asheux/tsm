import { combineReducers } from 'redux';
import departmentsReducer from './departments';
import categoriesReducer from './categories';
import productsReducer from './products';

const rootReducer = combineReducers({
  departments: departmentsReducer,
  categories: categoriesReducer,
  products: productsReducer
});

export default rootReducer;
