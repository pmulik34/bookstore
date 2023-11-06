// AuthorDetailedPage.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../Books/BookCard';

const AuthorDetailedPage = () => {
  const { author } = useParams(); // Fetch the author's name from the URL params
  const booksData = useSelector((state) => state.books.data);

  // Find the books by the author's name
  const authorBooks = booksData.filter((item) => item.authors === author);

  return (
    <div className="container mb-5">
      <div className="row mt-4">
        <div className="col-md-12">
          <div className='card-font-title'>Books by {author}</div>
        </div>
      </div>
      <div className="row">
        {authorBooks.map((book) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4" key={book.id}>
            <BookCard
              id={book.id}
              title={book.title}
              author={book.authors ? book.authors : 'Unknown Author'}
              imageSrc={book.image_url}
              price={book.num_pages}
              book={book}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorDetailedPage;
