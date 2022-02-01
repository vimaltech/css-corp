import { CartResponse } from 'types/CartResponse';
import { ProductReducerType } from './ProductsReducer';

export type LoadingActions = {
  type:
    | 'LOAD_DATA_REQUEST'
    | 'ADD_CART_REQUEST'
    | 'UPDATE_CART_REQUEST'
    | 'DELETE_CART_REQUEST';
  processId?: number;
};

export type ErrorActions = {
  type:
    | 'LOAD_DATA_FAIL'
    | 'ADD_CART_FAIL'
    | 'UPDATE_CART_FAIL'
    | 'DELETE_CART_FAIL'
    | 'CLEAR_ERROR';
  processId?: number;
  error: Error;
  key?: string;
};

export type LoadDataSuccess = {
  type: 'LOAD_DATA_SUCCESS';
  data: Omit<ProductReducerType, 'loading'>;
  processId?: number;
};

export type ChangeCartSuccess = {
  type: 'ADD_CART_SUCCESS' | 'UPDATE_CART_SUCCESS' | 'DELETE_CART_SUCCESS';
  cartItem: CartResponse;
  processId: number;
};

export type RootState = {
  products: ProductReducerType;
  error: any;
  loading: any;
};

export type RootAction =
  | LoadingActions
  | ErrorActions
  | LoadDataSuccess
  | ChangeCartSuccess;
