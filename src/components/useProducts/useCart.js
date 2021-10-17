import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCard = getStoredCart();
      const storedCart = [];
      for (let key in savedCard) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCard[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  return [cart, setCart];
};

export default useCart;
