import * as types from "../../constants/stripeTypes";
import initialState from "../initialState";

const stripeReducer = (state = initialState.stripe, action) => {
    switch (action.type) {
        case types.STRIPE_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.STRIPE_PAYMENT_FAILURE:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };
        case types.STRIPE_PAYMENT_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        default:
            return state;
    }
};

export default stripeReducer;
