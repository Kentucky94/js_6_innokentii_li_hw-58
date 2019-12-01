import React from 'react';
import './Backdrop.css';

const Backdrop = ({onClick, show}) => {
  return (
    show ? <div className='Backdrop' onClick={onClick}/> : null
  );
};

export default Backdrop;