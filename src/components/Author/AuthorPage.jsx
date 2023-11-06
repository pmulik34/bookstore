import React, { useState, useEffect } from 'react';
import AuthorCard from './AuthorCard';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination';
import SearchBar from '../SearchBar';

const AuthorPage = () => {
  const booksData = useSelector((state) => state.books.data); // Accessing book data from the Redux store
  const [currentPage, setCurrentPage] = useState(1); // Initializing current page state
  const itemsPerPage = 20; // Setting the number of items per page
  const [searchQuery, setSearchQuery] = useState(''); // Initializing search query state
  const [filteredAuthors, setFilteredAuthors] = useState([]); // Initializing filtered authors state

  // useEffect hook to filter the authors based on the book data
  useEffect(() => {
    const filtered = [...new Map(booksData.map(item => [item['authors'], item])).values()];
    setFilteredAuthors(filtered);
  }, [booksData]);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    const filtered = [...new Map(booksData.map(item => [item['authors'], item])).values()];
    const searchedAuthors = filtered.filter((book) => book.authors && book.authors.toLowerCase().includes(query.toLowerCase()));
    setFilteredAuthors(searchedAuthors);
  };

  // Calculating the start index of visible authors based on the current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleAuthors = filteredAuthors.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredAuthors.length / itemsPerPage); // Calculating the total number of pages

  return (
    <div className="container mt-4">
     
     
      <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} placeholder='Search Authors' />

      <div className="row">
        {/* Mapping through the visible authors and rendering the AuthorCard component */}
        {visibleAuthors.map((book) => (
          <div className="col-md-3 mt-3" key={book.id}>
            <AuthorCard author={book.authors} />
          </div>
        ))}
      </div>

      
      {searchQuery === '' && (
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default AuthorPage; 
