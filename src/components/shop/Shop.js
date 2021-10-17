import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);
  useEffect(() => {
    fetch('./products.JSON')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setDisplayProduct(data);
      });
  }, []);
  useEffect(() => {
    if (product.length) {
      const savedCard = getStoredCart();
      const storedCart = [];
      for (let key in savedCard) {
        const addedProduct = product.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCard[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [product]);
  const handleAddBtn = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProduct = product.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProduct(matchedProduct);
  };

  return (
    <div>
      <div className='search-container'>
        <input
          type='text'
          onChange={handleSearch}
          placeholder='search product'
        />
      </div>
      <div className='shop-container'>
        <div className='product-container'>
          {displayProduct.map((product) => (
            <Product
              handleBtn={handleAddBtn}
              key={product.key}
              product={product}
            ></Product>
          ))}
        </div>
        <div className='cart-container'>
          <Cart cart={cart}>
            <Link to='/review'>
              <button className='btn-regular'>Review your order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
