import useError from 'hooks/useError';
import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import ProductsReducer, {
  ProductReducerType,
  productsInitialState,
} from 'reducers/ProductsReducer';
import { ProviderProps } from 'types';
import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';
import axiosInstance from 'utils/axios';

type CartContextType = {
  cartState: ProductReducerType;
  loadData: () => Promise<void>;
  handleCart: (productId: any) => Promise<void>;
  updateCartItem: (cartItem: CartResponse) => Promise<void>;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);

export const CartProvider = ({ children }: ProviderProps) => {
  const [cartState, dispatch] = useReducer(
    ProductsReducer,
    productsInitialState,
  );

  const handleError = useError();

  const loadData = useCallback(async () => {
    try {
      const res = await Promise.all([
        axiosInstance.get<ProductResponse[]>('660/products'),
        axiosInstance.get<CartResponse[]>('660/cart'),
      ]);
      dispatch({
        type: 'LOAD_DATA_SUCCESS',
        data: { cart: res[1].data, products: res[0].data },
      });
    } catch (error) {
      handleError(error);
    }
  }, [handleError]);

  const handleCart = useCallback(async (productId) => {
    try {
      const res = await axiosInstance.post<CartResponse>('660/cart', {
        quantity: 1,
        productId,
      });

      dispatch({
        type: 'ADD_CART_SUCCESS',
        cartItem: res.data,
      });
    } catch (error) {}
  }, []);

  const updateCartItem = useCallback(async (cartItem: CartResponse) => {
    try {
      const res = await axiosInstance.put<CartResponse>(
        `660/cart/${cartItem.id}`,
        cartItem,
      );
      dispatch({
        type: 'UPDATE_CART_SUCCESS',
        cartItem: res.data,
      });
    } catch (error) {}
  }, []);

  const value = useMemo(
    () => ({
      cartState,
      loadData,
      handleCart,
      updateCartItem,
    }),
    [cartState, loadData, handleCart, updateCartItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
