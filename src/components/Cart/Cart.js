import React from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css';



const Cart = (props) => {
    const {name, img} = props.choosenItem;
    const {selected, chooseOne,} = props;
    return (
        <div className='cart'>
            <h2>Selected NFT's</h2>
            <div className="selected-items">
                {
                    selected.map(product => <SelectedProduct key = {product.id} item = {product}></SelectedProduct>)
                }
            </div>
            <button className='choose-one-btn' onClick={()=> chooseOne()}>Choose 1 For Me</button>
            <div className='choosen-item'>
                <img className='choosen-item-img' src={img} alt={name} />
                <h3 className='choosen-item-name'>{name}</h3>
            </div>
            <button className='choose-again-btn' >Choose Again</button>
        </div>
    );
};

export default Cart;