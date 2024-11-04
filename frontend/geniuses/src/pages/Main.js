import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchSort from '../components/main/SearchSort';
import Filtering from '../components/main/Filtering';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('popularity');

  // 샘플 게시물
  const posts = [
    { author: '작성자1', title: '글제목1', rating: 5, date: '2024-10-01' },
    { author: '작성자2', title: '글제목2', rating: 4, date: '2024-10-02' },
    { author: '작성자3', title: '글제목3', rating: 3, date: '2024-10-03' },
    { author: '작성자1', title: '글제목1', rating: 5, date: '2024-10-04' },
    { author: '작성자2', title: '글제목2', rating: 4, date: '2024-10-05' },
    { author: '작성자3', title: '글제목3', rating: 3, date: '2024-10-06' },
    { author: '작성자1', title: '글제목1', rating: 5, date: '2024-10-07' },
    { author: '작성자2', title: '글제목2', rating: 4, date: '2024-10-08' },
    { author: '작성자3', title: '글제목3', rating: 3, date: '2024-10-09' },
  ];

  const filteredPosts = Filtering({ posts, searchTerm, sortType });

  return (
    <div className="app font-sans w-full mx-auto p-5">
      <SearchSort 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortType={sortType}
        setSortType={setSortType}
      />
      <div className="post-list w-11/12 border-t-4 pt-2 bg-gray-100 shadow-md p-2 relative border border-gray-300 mx-auto">
        <Link to="/post" className="add-button absolute right-1 top-1 w-10 h-10 text-2xl text-white bg-gray-300 border-none rounded-lg text-center leading-10 shadow-md no-underline hover:bg-gray-400">
          +
        </Link>
        <div className="mt-10">
          {filteredPosts.map((post, index) => (
            <div key={index} className="post-item flex justify-between items-center py-2 border-b border-gray-300">
              <div className="post-item-left flex text-left">
                <span className="author mr-5">{post.author}</span>
                <span className="title">{post.title}</span>
              </div>
              <div className="post-item-right flex text-right">
                <span className="rating mr-5">{'★'.repeat(post.rating)}</span>
                <span className="date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
