import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price} = props.product;
    const addToCart = props.addToCartHandler;
    return (
        <div className='product'>
            <img className='product-img' src= {img} alt={name} />
            <h2 className='product-name'>{name}</h2>
            <h4 className='product-price'>Price: ${price}</h4>
            <button className='cart-btn' onClick={()=> addToCart(props.product)}>Add to Cart <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;