export const INDEX_PAGE_SIZE_DEFAULT = 20;
export const INDEX_PAGE_SIZE_OPTIONS = ["5", "10", "19", "30", "50", "100"];

export default {
    departments: {
        data: [],
        errors: null,
        loading: false
    },
    categories: {
        data: [],
        errors: null,
        loading: false
    },
    products: {
        data: [],
        errors: null,
        loading: false,
        meta: {
            page: 1,
            pageSize: INDEX_PAGE_SIZE_DEFAULT,
            pageSizeOptions: INDEX_PAGE_SIZE_OPTIONS,
            total: 0
        }
    },
    categoriesByDepartment: {
        data: [],
        errors: null,
        loading: false
    },
    singleProduct: {
        data: {},
        errors: null,
        loading: false
    },
    reviews: {
        data: [],
        errors: null,
        loading: false
    },
    userData: {
        data: {},
        errors: null,
        loading: false
    },
    attributes: {
        data: [],
        errors: null,
        loading: false
    },
    uniqueid: {
        data: {},
        errors: null,
        loading: false
    },
    shoppingcart: {
        data: [],
        errors: null,
        loading: false
    },
    shoppingCart: {
        data: [],
        errors: null,
        loading: false
    },
    totalAmount: {
        data: {},
        errors: null,
        loading: false
    },
    updataItem: {
        data: {},
        errors: null,
        loading: false
    },
    deleteItem: {
        data: {},
        errors: null,
        loading: false
    },
    customer: {
        data: {},
        errors: null,
        loading: false
    },
    customerDetails: {
        data: {},
        errors: null,
        loading: false
    },
    customerAddress: {
        data: {},
        errors: null,
        loading: false
    },
    regions: {
        data: [],
        errors: null,
        loading: false
    },
    region: {
        data: [],
        errors: null,
        loading: false
    },
    taxes: {
        data: [],
        errors: null,
        loading: false
    },
    orders: {
        data: {},
        errors: null,
        loading: false
    },
    getOrder: {
        data: [],
        errors: null,
        loading: false
    },
    stripe: {
        data: {},
        errors: null,
        loading: false
    },
    myorders: {
        data: [],
        errors: null,
        loading: false
    },
    removeItem: {
        data: {},
        errors: null,
        loading: false
    },
    searchResults: {
        data: [],
        errors: null,
        loading: false
    }
};
