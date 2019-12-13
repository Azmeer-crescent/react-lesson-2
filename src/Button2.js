import React from 'react';
import './App.css';

function Button2(props){
    return (
      <p>
        <button type="button" className={props.buttonClass}>
          {props.buttonText}
        </button>
      </p>
    );
  }

export default Button2;
