import React from 'react';
import './Alert.css';
import Button from "../Button/Button";

const Alert = props => {
  return (
    <div
      className={['Alert', 'alert', `alert-${props.type}`].join(' ')}
      style={{
        transform: props.show ? 'translateX(0)' : 'translateX(100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
      <Button
        type={`${props.type} alert-dismiss`}
        onClick={props.dismiss}
      >
        X
      </Button>
    </div>
  );
};

export default Alert;