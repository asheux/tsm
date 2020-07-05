import initialState from "../initialState";
import * as types from "../../constants/loginTypes";

const loginReducer = (state = initialState.userData, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.errors
            };
        default:
            return state;
    }
};

export default loginReducer;
