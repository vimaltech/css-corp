import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';

export type ProductReducerType = {
  cart: CartResponse[];
  products: ProductResponse[];
  loading: boolean;
};

export const productsInitialState = {
  cart: [],
  products: [],
  loading: false,
};

type LoadingActions = {
  type:
    | 'LOAD_DATA_REQUEST'
    | 'ADD_CART_REQUEST'
    | 'UPDATE_CART_REQUEST'
    | 'DELETE_CART_REQUEST';
};

type LoadDataSuccess = {
  type: 'LOAD_DATA_SUCCESS';
  data: Omit<ProductReducerType, ''>;
};

type ChangeCartSuccess = {
  type: 'ADD_CART_SUCCESS' | 'UPDATE_CART_SUCCESS' | 'DELETE_CART_SUCCESS';
  cartItem: CartResponse;
};

type ProductActionType = LoadDataSuccess | ChangeCartSuccess | LoadingActions;

export default (state: ProductReducerType, action: ProductActionType) => {
  switch (action.type) {
    case 'LOAD_DATA_REQUEST':
    case 'ADD_CART_REQUEST':
    case 'UPDATE_CART_REQUEST':
    case 'DELETE_CART_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_DATA_SUCCESS':
      return { ...state, ...action.data, loading: false };

    case 'ADD_CART_SUCCESS':
      return {
        ...state,
        cart: [...state.cart, action.cartItem],
        loading: false,
      };

    case 'UPDATE_CART_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: state.cart.map((item) => {
          if (item.id === action.cartItem.id) {
            return action.cartItem;
          }
          return item;
        }),
      };

    case 'DELETE_CART_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: state.cart.filter((item) => item.id !== action.cartItem.id),
      };

    default:
      return state;
  }
};
