import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={['btn', `btn-${props.type}`].join(' ')}
    >
      {props.children}
    </button>
  );
};

export default Button;