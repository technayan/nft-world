import React from 'react';
import './Question2.css'

const Question2 = () => {
    return (
        <div className='question2'>
            <h2>Differences Between State and Props?</h2>
            <p className="answer">The state is a structure that store data about the component and props is an attribute value storing object. State is updatable but props are immutable (read-only). State holds the data of the component but props help us to pass data as argument from one component to other component. State can't be accessed by the child components but props can be accessed by the child components. State can't make components reusable whereas props can make components reusable.</p>
        </div>
    );
};

export default Question2;