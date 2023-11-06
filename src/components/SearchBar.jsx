import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, placeholder }) => {
  return (
    <div className="mb-4">
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
