import React, {  useState } from 'react';
import {  useSelector } from 'react-redux';
// import { fetchBooks } from '../../store/bookSlice';
import BookCard from './BookCard';
import Pagination from '../Pagination';
import SearchBar from '../SearchBar';

const BookPage = () => {
  // Dispatch and Selectors
  // const dispatch = useDispatch();
  const allBooksData = useSelector((state) => state.books.data);

  // States for Pagination and Filtering
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  // Fetching Books on Component Load
  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, [dispatch, searchQuery]);

  // Functions for Handling Page Change, Search, and Author Selection
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleAuthorChange = (author) => {
    setSelectedAuthor(author);
    setCurrentPage(1);
  };

  // Getting unique authors
  const allAuthors = Array.from(new Set(allBooksData.map((book) => book.authors)));

  // Filtering books based on selected author and search query
  const filteredBooks = allBooksData.filter(
    (book) =>
      (!selectedAuthor || book.authors === selectedAuthor) &&
      book.title &&
      typeof book.title === 'string' &&
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const visibleBooks = filteredBooks.slice(firstIndex, lastIndex);

  return (
    <>
      <div className="container">
        <div className='row mt-4 d-flex justify-content-between'>
          <div className='col-md-3'>
            {/* Search Bar Component */}
            <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQueryChange} placeholder='Search books by title' />
            
          </div>
          <div className='col-md-3'>
            {/* Dropdown for selecting authors */}
            <select
              className="custom-select"
              value={selectedAuthor}
              onChange={(e) => handleAuthorChange(e.target.value)}
            >
              <option value="">All Authors</option>
              {allAuthors.map((author, index) => (
                <option key={index} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>
        </div>


        {/* Rendering Book Cards */}
        <div className="row">
          {visibleBooks.length > 0 ? (
            visibleBooks.map((book) => (
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
            ))
          ) : (
            <p>No books found.</p>
          )}
        </div>

        {/* Pagination Component */}
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </>
  );
};

export default BookPage;
