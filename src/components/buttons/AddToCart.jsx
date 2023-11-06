// AddToCart.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';

const AddToCart = ({ book }) => {
  const dispatch = useDispatch();

  const handleAdd = (book) => {
    dispatch(add(book));
  };

  return (
    <div>
      <button onClick={()=>handleAdd(book)} className="add-to-cart-btn btn btn-primary">
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
