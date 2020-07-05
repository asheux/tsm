import { combineReducers } from "redux";
import departmentsReducer from "./departments";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import productsByCategoryReducer from "./productsByCategory";
import productsDepartmentReducer from "./productsByDepartment";
import categoriesDepartmentReducer from "./categoriesByDepartment";
import singleProductReducer from "./singleProduct";
import reviewsReducer from "./reviews";
import signupReducer from "./signup";
import loginReducer from "./login";
import attributesReducer from "./attributes";
import generateReducer from "./generateUniqueCartId";
import addtocartReducer from "./addtocart";
import shoppingcartReducer from "./shoppingcart";
import totalAmountReducer from "./totalAmount";
import updataItemReducer from "./updateitem";
import deleteItemReducer from "./deleteitem";
import customerReducer from "./customer";
import fetchfetchcustomerReducer from "./getCustomerDetails";
import customerAddressReducer from "./customerAddress";
import regionsReducer from "./shippingRegions";
import regionReducer from "./getAShippingRegion";
import taxesReducer from "./allTaxes";
import ordersReducer from "./postOrder";
import getOrderReducer from "./getOrder";
import stripeReducer from "./stripe";
import getmyordersReducer from "./myorders";
import removecartitemReducer from "./removeCartItem";
import searchReducer from "./searchengine";

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
    updateitem: updataItemReducer,
    deleteitem: deleteItemReducer,
    updateCustomer: customerReducer,
    fetchCustomer: fetchfetchcustomerReducer,
    updateCustomerAddress: customerAddressReducer,
    regions: regionsReducer,
    region: regionReducer,
    taxes: taxesReducer,
    orders: ordersReducer,
    getOrder: getOrderReducer,
    stripe: stripeReducer,
    myorders: getmyordersReducer,
    removeCartItem: removecartitemReducer,
    searchResults: searchReducer
});

export default rootReducer;
