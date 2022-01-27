import Product from 'components/Product';
import useError from 'hooks/useError';
import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import ProductsReducer, {
  ProductReducerType,
  productsInitialState,
} from 'reducers/ProductsReducer';
import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';
import axiosInstance from 'utils/axios';

interface Props {}

const Home = (props: Props) => {
  const [{ cart, products }, dispatch] = useReducer(
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
        payload: { cart: res[1].data, products: res[0].data },
      });
    } catch (error) {
      handleError(error);
    }
  }, [handleError]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleCart = useCallback(async (productId) => {
    try {
      const res = await axiosInstance.post<CartResponse>('660/cart', {
        quantity: 1,
        productId,
      });

      // setCart((val) => [...val, res.data]);
    } catch (error) {}
  }, []);

  return (
    <>
      {products.map((product) => {
        const cartItem = cart.find((x) => x.productId === product.id);
        return (
          <Product
            key={product.id}
            handleCart={handleCart}
            cartItem={cartItem}
            {...product}
          />
        );
      })}
    </>
  );
};

export default Home;
