import {
    FETCH_PRODUCT_LIST_START,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILED,
} from '../constants';

const productsData = require('../../assets/data/products.json');

const productListStart = () => ({
    type: FETCH_PRODUCT_LIST_START,
})

const productListSuccess = (data) => ({
    type: FETCH_PRODUCT_LIST_SUCCESS,
    data,
})

const productListFailure = (error: string) => ({
    type: FETCH_PRODUCT_LIST_FAILED,
    error
})

export const fetchProductList = () => dispatch => {
    dispatch(productListSuccess(productsData));

}
