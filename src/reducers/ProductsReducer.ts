import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';

export type ProductReducerType = {
  cart: CartResponse[];
  products: ProductResponse[];
};

export const productsInitialState = {
  cart: [],
  products: [],
};

type LoadDataSuccess = {
  type?: 'LOAD_DATA_SUCCESS';
  payload?: ProductReducerType;
};

// type AddCartSuccess = {
//   type?: 'ADD_CART_SUCCESS';
//   payload?: CartResponse;
// };

type ProductActionType = LoadDataSuccess;

export default (
  state: ProductReducerType,
  { type, payload }: ProductActionType,
) => {
  switch (type) {
    case 'LOAD_DATA_SUCCESS':
      return { ...state, ...payload };

    // case 'ADD_CART_SUCCESS':
    //   return { ...state, cart: [...state.cart, payload] };

    default:
      return state;
  }
};
