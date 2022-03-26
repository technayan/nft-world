import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h2>Selected NFT's</h2>
            <div className="selected-items">
                
            </div>
            <button className='choose-one-btn'>Choose 1 For Me</button>
            <button className='choose-again-btn'>Choose Again</button>
        </div>
    );
};

export default Cart;