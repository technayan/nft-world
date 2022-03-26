import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        fetch ('fakeData.json')
        .then (res => res.json()) 
        .then (data => setProducts(data))
    }, []);


    return (
        <div className='store'>
            <div className="products-container">
                {
                    products.map(product => <Product key = {product.id} product = {product}></Product>)
                }
            </div>
            <div className="selected-product-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Store;