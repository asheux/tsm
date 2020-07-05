import initialState from "../initialState";
import * as types from "../../constants/addtocartTypes";

const addtocartReducer = (state = initialState.shoppingcart, action) => {
    switch (action.type) {
        case types.ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case types.ADD_TO_CART_FAILURE:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };
        default:
            return state;
    }
};

export default addtocartReducer;
