import React from 'react';
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions'>
            <Question1></Question1>
            <Question2></Question2>
        </div>
    );
};

export default Questions;