import {createSelector} from 'reselect';

import {AppState} from '../rootReducer';

const getProducts = (state: AppState) => state.product;

export const getProductsSelector = createSelector(
  getProducts,
  (products: any) => products,
);
