import Product from 'components/Product';
import { CartContext } from 'context/CartContext';
import React, { useContext, useEffect } from 'react';

interface Props {}

const Home = (props: Props) => {
  const {
    loadData,
    handleCart,
    updateCartItem,
    cartState: { products, cart },
  } = useContext(CartContext);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      {products.map((product) => {
        const cartItem = cart.find((x) => x.productId === product.id);
        return (
          <Product
            key={product.id}
            handleCart={handleCart}
            cartItem={cartItem}
            updateCartItem={updateCartItem}
            {...product}
          />
        );
      })}
    </>
  );
};

export default Home;
