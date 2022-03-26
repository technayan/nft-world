import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, id} = props.product;
    return (
        <div className='product'>
            <img className='product-img' src= {img} alt="" />
            <h2 className='product-name'>{name}</h2>
            <h4 className='product-price'>Price: {price}</h4>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;