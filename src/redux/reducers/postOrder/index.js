import * as types from "../../constants/postorderTypes";
import initialState from "../initialState";

const ordersReducer = (state = initialState.orders, action) => {
    switch (action.type) {
        case types.POST_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.POST_ORDER_FAILURE:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };
        case types.POST_ORDER_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        default:
            return state;
    }
};

export default ordersReducer;
