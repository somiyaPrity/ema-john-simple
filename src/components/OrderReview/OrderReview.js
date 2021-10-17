import React from 'react';
import useProducts from '../useProducts/useProducts';
import useCart from '../useProducts/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
  const [products] = useProducts([]);
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const handlePlaceorder = () => {
    history.push('/placeorder');
    setCart([]);
    clearTheCart();
  };
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {cart.map((product) => (
          <ReviewItem
            handleRemove={handleRemove}
            key={product.key}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}>
          <button onClick={handlePlaceorder} className='btn-regular'>
            Place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
