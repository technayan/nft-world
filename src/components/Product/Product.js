import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product} = props;
    console.log(product)
    return (
        <div className='product'>
            <img className='product-img' src= {product.img} alt="" />
            <h2 className='product-name'>{product.name}</h2>
            <h4 className='product-price'>Price: {product.price}</h4>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;