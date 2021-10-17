import React from 'react';
import Rating from 'react-rating';

const ReviewItem = (props) => {
  const { name, price, seller, stock, star, key } = props.product;
  const { handleRemove } = props;
  return (
    <div className='product'>
      <div>
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
          <button onClick={() => handleRemove(key)} className='btn-regular'>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
