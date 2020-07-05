import * as types from "../../constants/myordersTypes";
import initialState from "../initialState";

const getmyordersReducer = (state = initialState.myorders, action) => {
    switch (action.type) {
        case types.FETCH_MY_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_MY_ORDERS_FAILURE:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };
        case types.FETCH_MY_ORDERS_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        default:
            return state;
    }
};

export default getmyordersReducer;
