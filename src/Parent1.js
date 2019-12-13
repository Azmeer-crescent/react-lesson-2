import React, { useState } from 'react';
import './App.css';
import Child from './Child';

var localCount = 0;

function Parent1() {
    const [count, setCount] = useState(0);

    const onClickHandle = () => {
        setCount(localCount++);
    }

    return (
        <>
            <h3>Parent 1</h3>
            <p>This text is from Parent 1 component</p>
            <p>Parent's onClick is handled within the same component.</p>

            <button onClick={() => onClickHandle()}>Parent button</button>

            <h1>Count: {count}</h1>
        </>
    );
}

export default Parent1;
