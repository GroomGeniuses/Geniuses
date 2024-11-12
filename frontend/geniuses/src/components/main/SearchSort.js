import React from 'react';

const SearchSort = ({ searchTerm, setSearchTerm, sortType, setSortType }) => {
  return (
    <div className="search-section flex items-center w-full max-w-screen-md mx-auto mb-5">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-box w-9/12 p-2 text-lg border border-gray-300 rounded"
      />
      <div className="sorting flex ml-4">
        <button
          className={`px-4 py-2 ml-2 text-base cursor-pointer whitespace-nowrap ${sortType === 'popularity' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSortType('popularity')}
        >
          인기순
        </button>
        <button
          className={`px-4 py-2 ml-2 text-base cursor-pointer whitespace-nowrap ${sortType === 'post_at' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSortType('post_at')}
        >
          최신순
        </button>
      </div>
    </div>
  );
};

export default SearchSort;
