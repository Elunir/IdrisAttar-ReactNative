import {ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS} from './actionTypes';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
}

export interface ProductState {
  products: IProduct[];
}

export interface FetchProductRequest {
  type: typeof FETCH_PRODUCTS;
}

export interface AddProductRequest {
  type: typeof ADD_PRODUCT;
  product: {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    avatar: string;
    developerEmail: string;
  };
}

export interface DeleteProductRequest {
  type: typeof DELETE_PRODUCT;
  id: number;
}

export type ProductActions =
  | FetchProductRequest
  | AddProductRequest
  | DeleteProductRequest;
