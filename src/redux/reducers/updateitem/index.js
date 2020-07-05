import * as types from "../../constants/updateItemTypes";
import initialState from "../initialState";

const updataItemReducer = (state = initialState.updataItem, action) => {
    switch (action.type) {
        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        default:
            return state;
    }
};

export default updataItemReducer;
