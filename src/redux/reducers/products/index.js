import * as types from "../../constants/productsTypes";
import * as paginateTypes from "../../constants/paginateTypes";
import initialState from "../../reducers/initialState";

const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case types.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };

        case paginateTypes.PRODUCTS_PAGINATE_META_DATA:
            return {
                ...state,
                meta: {
                    ...state.meta,
                    ...action.meta
                }
            };

        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: action.data,
                meta: {
                    ...state.meta,
                    ...action.meta
                },
                loading: false
            };

        default:
            return state;
    }
};

export default productsReducer;
