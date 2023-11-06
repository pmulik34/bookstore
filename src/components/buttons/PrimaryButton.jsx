import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ to, text }) => {
  return (
    <Link to={to} className='btn btn-primary'>
      {text}
    </Link>
  );
};

export default PrimaryButton;
