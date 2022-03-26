import React from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css';

const Cart = (props) => {
    const {selected} = props;
    return (
        <div className='cart'>
            <h2>Selected NFT's</h2>
            <div className="selected-items">
                {
                    selected.map(product => <SelectedProduct key = {product.id} item = {product}></SelectedProduct>)
                }
            </div>
            <button className='choose-one-btn'>Choose 1 For Me</button>
            <button className='choose-again-btn'>Choose Again</button>
        </div>
    );
};

export default Cart;