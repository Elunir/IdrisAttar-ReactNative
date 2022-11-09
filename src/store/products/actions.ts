import {ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS} from './actionTypes';
import {
  FetchProductRequest,
  AddProductRequest,
  DeleteProductRequest,
  IProduct,
} from './types';

export const fetchProductsRequest = (): FetchProductRequest => ({
  type: FETCH_PRODUCTS,
});

export const addProduct = (product: IProduct): AddProductRequest => ({
  type: ADD_PRODUCT,
  product,
});

export const deleteProduct = (id: number): DeleteProductRequest => ({
  type: DELETE_PRODUCT,
  id,
});
