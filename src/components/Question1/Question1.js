import React from 'react';
import './Question1.css'

const Question1 = () => {
    return (
        <div className='question1'>
            <h2>How React Works?</h2>
            <p className='answer'>React is a Javascript library, mostly used to create user interfaces for Single Page Applications and Mobile App. React use JSX (Javascript XML) syntax extension to create HTML. It's mostly similar to HTML. React creates a Virtual DOM and then if anything is changed in the DOM it compares it with the Virtual DOM and finds out the changes. After that react only updates those changes instead of updating the whole page.</p>
        </div>
    );
};

export default Question1;