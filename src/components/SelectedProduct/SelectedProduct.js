import React from 'react';
import './SelectedProduct.css'

const SelectedProduct = (props) => {
    const {name, img} = props.item;
    return (
        <div className='selected-item'>
            <img className='selected-item-img' src={img} alt="" />
            <h3 className='selected-item-name'>{name}</h3>
        </div>
    );
};

export default SelectedProduct;