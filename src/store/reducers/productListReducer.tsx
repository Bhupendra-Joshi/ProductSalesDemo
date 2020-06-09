import {
    FETCH_PRODUCT_LIST_START,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILED
} from '../constants';

const initialState = {
    list: [],
    error: '',
    isLoading: false,
}

const productListReducer = (state = initialState, action: any) => {
    const {
        type,
        data,
        error,
    } = action;

    switch (type) {
        case FETCH_PRODUCT_LIST_START: {
            return {
                ...state,
                error: '',
                isLoading: true
            }
        }
        case FETCH_PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                list: data,
                isLoading: false
            }
        }
        case FETCH_PRODUCT_LIST_FAILED: {
            return {
                ...state,
                error: error,
                isLoading: false
            }
        }
        default: {
            return state
        }
    }
}

export default productListReducer