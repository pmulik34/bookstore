// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice'; 

const Cart = () => {
  const dispatch = useDispatch(); 
  const cartItems = useSelector((state) => state.cart); // Accessing cart items from Redux store

  // Initializing an object to store the count of each item in the cart
  const cartItemCounts = {};
  // Counting the occurrences of each item in the cart
  cartItems.forEach((item) => {
    if (cartItemCounts[item.id]) {
      cartItemCounts[item.id].count += 1;
    } else {
      cartItemCounts[item.id] = { ...item, count: 1 };
    }
  });

  // Function to calculate the total price of all items in the cart
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const key in cartItemCounts) {
      const item = cartItemCounts[key];
      totalPrice += item.num_pages * item.count;
    }
    return totalPrice;
  };

  // Function to handle the removal of an item from the cart
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  // If the cart is empty, display a message indicating no items in the cart
  if (Object.keys(cartItemCounts).length === 0) {
    return (
      <div className="container mt-5">
        <div className='row'>
          <div className='col-md-12 center'>
            <p>No items in cart.</p>
          </div>
        </div>
      </div>
    );
  }

  // If the cart has items, display the items along with their details
  return (
    <div className="container mt-4">
      {Object.values(cartItemCounts).map((item) => (
        <div className="row border-top border-bottom align-items-center m-2" key={item.id}>
          <div className="row main align-items-center">
            <div className="col-md-1 col-12">
              <img className="img-fluid p-1" src={item.image_url} style={{ width: '5rem' }} />
            </div>
            <div className="col-md-5 col-12">
              <div className="text-muted">{item.title}</div>
              <div>By {item.authors}</div>
            </div>
            <div className="col-md-2 col-12">Qty: {item.count}</div>
            <div className="col-md-2 col-12">₹ {item.num_pages * item.count}</div>
            <div className="col-md-2 col-12">
              <button onClick={() => handleRemove(item.id)} className="add-to-cart-btn btn btn-primary">
                &#10005; &nbsp; Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      
      <div className="text-end">
        <h5 className='card-title'>Total Price: ₹ {getTotalPrice()}</h5>
      </div>
    </div>
  );
};

export default Cart; 
