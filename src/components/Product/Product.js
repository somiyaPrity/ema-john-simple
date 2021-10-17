import React from 'react';
import Rating from 'react-rating';

import './Product.css';

const Product = (props) => {
  const { name, img, price, seller, stock, star } = props.product;

  return (
    <div className='product'>
      <div>
        <img src={img} alt='' />
      </div>
      <div className='product-details'>
        <h4 className='product-name'>{name}</h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>Price: {price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <Rating
          readonly
          initialRating={star}
          emptySymbol='far fa-star icon-color'
          fullSymbol='fas fa-star icon-color'
        ></Rating>
        <br />
        <button
          onClick={() => props.handleBtn(props.product)}
          className='btn-regular'
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
