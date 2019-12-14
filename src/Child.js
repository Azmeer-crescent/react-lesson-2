import React from 'react';
import './App.css';

const Child = ({parentHandler}) => {
    return (
        <>
            <h3>Child</h3>
            <p>This text is from Child component</p>
            <button onClick={parentHandler}>Child button</button>
        </>
    );
}

export default Child;
