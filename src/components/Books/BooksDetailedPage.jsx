import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddToCart from '../buttons/AddToCart';


const DetailedBookPage = () => {
  const { id } = useParams(); // Fetch the book ID from the URL params
  const booksData = useSelector((state) => state.books.data);

  // Find the book with the matching ID
  const book = booksData.find((item) => item.id === parseInt(id));


  if (!book) {
    return <div>Loading...</div>;
  }

  const { title, image_url, authors, description, num_pages, rating, Quote1, Quote2, Quote3, format, edition } = book;

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-3">
          <img src={image_url} alt="Book Cover" style={{ width: '100%' }} />
        </div>
        <div className="col-md-9">
          <h1 className='card-font-title'>{title}</h1>
          <p><b>By {authors}</b> &nbsp; &nbsp; ⭐{rating}</p>
          <p><b>₹ {num_pages}</b></p>
          <p><b>Format:</b> {format} &nbsp; &nbsp; <b>Edition:</b> {edition}</p>
          <p><b>Description:</b> {description}</p>
          <p><b>Famous Quotes From Books:</b></p>
          <ul>
            <li>{Quote1}</li>
            <li>{Quote2}</li>
            <li>{Quote3}</li>
          </ul>

          <AddToCart text="Add To Cart" book={book} />
          
        </div>
      </div>
    </div>
  );
};

export default DetailedBookPage;
