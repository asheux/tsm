import * as types from "../../constants/signupTypes";
import initialState from "../initialState";

const signupReducer = (state = initialState.userData, action) => {
    switch (action.type) {
        case types.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.SIGNUP_FAILURE:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        default:
            return state;
    }
};

export default signupReducer;
