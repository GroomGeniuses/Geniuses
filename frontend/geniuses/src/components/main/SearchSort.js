import React from 'react';

const SearchSort = ({ searchTerm, setSearchTerm, sortType, setSortType }) => {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="sorting">
        <button
          className={sortType === 'popularity' ? 'active' : ''}
          onClick={() => setSortType('popularity')}
        >
          인기순
        </button>
        <button
          className={sortType === 'date' ? 'active' : ''}
          onClick={() => setSortType('date')}
        >
          최신순
        </button>
      </div>
    </div>
  );
};

export default SearchSort;
