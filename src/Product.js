import React from 'react'
import './Product.css';
function renderStars(rating) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<p>⭐</p>);
  }
  return stars;
}
function Product({title,image,price,rating}) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title} </p>
      </div>
      <p className='product__price'>
        <small>Rs</small>
        <strong>{price} </strong></p>
       <div className='product__rating'>
       {renderStars(rating)}

        </div>
            <img src={image} alt='product-image'></img>
            <button>
                Add to Basket
            </button>
    </div>
  )
}

export default Product
