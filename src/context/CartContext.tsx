import useError from 'hooks/useError';
import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import ProductsReducer, {
  ProductReducerType,
  productsInitialState,
} from 'reducers/ProductsReducer';
import rootReducer, { RootInitialState } from 'reducers/rootReducer';
import { ProviderProps } from 'types';
import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';
import axiosInstance from 'utils/axios';

type CartContextType = {
  products: ProductReducerType;
  loading: any;
  error: any;
  loadData: () => Promise<void>;
  clearError: (key: string) => void;
  handleCart: (productId: any) => Promise<void>;
  updateCartItem: (cartItem: CartResponse) => Promise<void>;
  deleteCartItem: (cartItem: CartResponse) => Promise<void>;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);

export const CartProvider = ({ children }: ProviderProps) => {
  const [{ products, loading, error }, dispatch] = useReducer(
    rootReducer,
    RootInitialState,
  );

  const handleError = useError();

  const loadData = useCallback(async () => {
    try {
      dispatch({
        type: 'LOAD_DATA_REQUEST',
      });
      const res = await Promise.all([
        axiosInstance.get<ProductResponse[]>('660/products'),
        axiosInstance.get<CartResponse[]>('660/cart'),
      ]);
      dispatch({
        type: 'LOAD_DATA_SUCCESS',
        data: { cart: res[1].data, products: res[0].data },
      });
    } catch (error) {
      console.log('error', error);

      dispatch({ type: 'LOAD_DATA_FAIL', error: error as Error });
      handleError(error);
    }
  }, [handleError]);

  const handleCart = useCallback(async (productId) => {
    try {
      dispatch({
        type: 'ADD_CART_REQUEST',
        processId: productId,
      });
      const res = await axiosInstance.post<CartResponse>('660/cart', {
        quantity: 1,
        productId,
      });

      dispatch({
        type: 'ADD_CART_SUCCESS',
        cartItem: res.data,
        processId: productId,
      });
    } catch (error) {
      dispatch({
        type: 'ADD_CART_FAIL',
        error: error as Error,
        processId: productId,
      });
      console.error(error);
    }
  }, []);

  const updateCartItem = useCallback(async (cartItem: CartResponse) => {
    try {
      dispatch({
        type: 'UPDATE_CART_REQUEST',
        processId: cartItem.productId,
      });
      const res = await axiosInstance.put<CartResponse>(
        `660/cart/${cartItem.id}`,
        cartItem,
      );
      dispatch({
        type: 'UPDATE_CART_SUCCESS',
        cartItem: res.data,
        processId: cartItem.productId,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_CART_FAIL',
        error: error as Error,
        processId: cartItem.productId,
      });
      console.error(error);
    }
  }, []);

  const deleteCartItem = useCallback(async (cartItem: CartResponse) => {
    try {
      dispatch({
        type: 'DELETE_CART_REQUEST',
        processId: cartItem.productId,
      });
      await axiosInstance.delete<CartResponse>(`660/cart/${cartItem.id}`);
      dispatch({
        type: 'DELETE_CART_SUCCESS',
        cartItem,
        processId: cartItem.productId,
      });
    } catch (error) {
      dispatch({
        type: 'DELETE_CART_FAIL',
        error: error as Error,
        processId: cartItem.productId,
      });
      console.error(error);
    }
  }, []);

  const clearError = useCallback((key: string) => {
    dispatch({
      type: 'CLEAR_ERROR',
      key: key,
      error: new Error(''),
    });
  }, []);

  const value = useMemo(
    () => ({
      products,
      loadData,
      handleCart,
      updateCartItem,
      deleteCartItem,
      loading,
      error,
      clearError,
    }),
    [
      products,
      loadData,
      handleCart,
      updateCartItem,
      deleteCartItem,
      loading,
      error,
      clearError,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
