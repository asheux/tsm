import { combineReducers } from 'redux';
import departmentsReducer from './departments';
import categoriesReducer from './categories';
import productsReducer from './products';
import productsByCategoryReducer from './productsByCategory';
import productsDepartmentReducer from './productsByDepartment';
import categoriesDepartmentReducer from './categoriesByDepartment';
import singleProductReducer from './singleProduct';
import reviewsReducer from './reviews';
import signupReducer from './signup';
import loginReducer from './login';
import attributesReducer from './attributes';
import generateReducer from './generateUniqueCartId';
import addtocartReducer from './addtocart';
import shoppingcartReducer from './shoppingcart';
import totalAmountReducer from './totalAmount';
import updataItemReducer from './updateitem';

const rootReducer = combineReducers({
  departments: departmentsReducer,
  categories: categoriesReducer,
  products: productsReducer,
  productsByCategory: productsByCategoryReducer,
  productsDepartment: productsDepartmentReducer,
  categoriesDepartment: categoriesDepartmentReducer,
  singleProduct: singleProductReducer,
  reviews: reviewsReducer,
  signup: signupReducer,
  login: loginReducer,
  attributes: attributesReducer,
  generate: generateReducer,
  shoppingcart: addtocartReducer,
  shoppingcartData: shoppingcartReducer,
  totalAmount: totalAmountReducer,
  updateitem: updataItemReducer
});

export default rootReducer;
