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

    const [selectedItems, setSelectedItems] = useState([]);
    
    let selected = [];

    const addToCart = (props) => {
        if (selectedItems.length < 4) {
            const exist = selectedItems.find(product => product.id === props.id);
            if(!exist) {
                selected = [...selectedItems, props];
                setSelectedItems(selected);
            } 
        } else {
            alert("You can't select more than 4 items");
        }
    }



    const [choosen, setChoosen] = useState([]);

    const chooseOne = () => {
        const randomNumber = Math.floor(Math.random()* selectedItems.length);
        const choosenItem = selectedItems[randomNumber];

        if (choosenItem) {
            setChoosen(choosenItem);
        }
    }

  

    

    return (
        <div className='store'>
            <div className="products-container">
                {
                    products.map(product => <Product key = {product.id} product = {product} addToCartHandler = {addToCart}></Product>)
                }
            </div>
            <div className="selected-product-container">
                {
                    <Cart selected = {selectedItems} choosenItem = {choosen} chooseOne = {chooseOne}></Cart>
                }

               
            </div>

            
               
                    
               
            
            
        </div>
    );
};

export default Store;