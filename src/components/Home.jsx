import React, { useEffect } from 'react';
import girlReadingImage from "../assets/girl-reading-books-online.png";
import PrimaryButton from './buttons/PrimaryButton';
import BookCard from './Books/BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../store/bookSlice';

const Home = () => {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.books.data);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Sort the booksData based on the rating in descending order
  const sortedBooks = [...booksData].sort((a, b) => b.rating - a.rating);

  // Get the top 4 books with the highest rating
  const featuredBooks = sortedBooks.slice(0, 4);

  return (
    <>
      <section className='hero'>
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-lg-6 col-md-9 col-12'>
              <div className='copy'>
                <div className='text-hero-bold'>
                  Welcome to our Bookstore
                </div>
                <div className='text-hero-regular'>
                Discover our diverse collection of books for all interests and reading levels. Whether you love to read or are just getting started, we've got something for you!
                </div>

                <div className='cta'>
                  <PrimaryButton to='/books' text='Explore Now' />
                </div>

              </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-end'>
              <img className=' hide-img' src={girlReadingImage} alt='girlReadingImage' style={{ width: '35rem' }} />
            </div>
          </div>
        </div>
      </section>
      {/* Featured section  */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className='text-hero-medium center'>Featured Books</div>
            <div className='text-hero-regular center'>"Join the Trend" - Dive into these captivating stories and see what makes them bestsellers.</div>
          </div>
          {featuredBooks.map((book) => (
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
    </>
  );
};

export default Home;
