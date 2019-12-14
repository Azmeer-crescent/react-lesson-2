import React, { useState } from 'react';
import './App.css';
import Child from './Child';

var localCount = 0;

function Parent2() {
    const [count, setCount] = useState(0);

    const onClickHandle = () => {
        setCount(++localCount);
    }

    return (
        <>
            <h3>Parent 2</h3>
            <p>This text is from Parent 2 component</p>
            <p>Parent's onClick handler is passed on to child. When the child clicks the button, it calls the parent's handler.</p>
            <p>Child is updating the `state`, so the parent is re-drawn.</p>
            
            <Child parentHandler={onClickHandle} />

            <h1>Count: {count}</h1>
        </>
    );
}

export default Parent2;
