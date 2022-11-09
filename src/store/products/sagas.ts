import {all, takeLatest} from 'redux-saga/effects';
import {FETCH_PRODUCTS} from './actionTypes';

/*
  Worker Saga: Fired on FETCH_Product_REQUEST action
*/
function* fetchProductSaga() {
  yield 'Product';
}

/*
  Starts worker saga on latest dispatched `FETCH_Product_REQUEST` action.
  Allows concurrent increments.
*/
function* ProductSaga() {
  yield all([takeLatest(FETCH_PRODUCTS, fetchProductSaga)]);
}

export default ProductSaga;
