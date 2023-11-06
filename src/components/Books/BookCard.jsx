import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../buttons/AddToCart';

const BookCard = ({ id, title, author, imageSrc, price, book }) => {

  return (
    <div className="card" style={{ height: '100%' }}>
      <div className="card-body d-flex flex-column">
        <div className="d-flex align-items-center">
          {imageSrc && (
            <Link to={`/books/${id}`}>
              <img src={imageSrc} className="card-img mb-3" alt="Book cover" />
            </Link>
          )}
        </div>

        <h5 className="card-title fixed-height">
          <Link to={`/books/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            {title}
          </Link>
        </h5>

        <p className="card-text">By {author}</p>
        <p className="card-text">₹ {price}</p>

        <div className="mt-auto">
          {/* <AddToCart text="Add To Cart" /> */}
          <AddToCart text="Add To Cart" book={book}/>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
