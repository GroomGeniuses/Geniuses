import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchSort from '../components/main/SearchSort';
import Filtering from '../components/main/Filtering';
import './Main.css';

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
    <div className="main-content">
      <SearchSort 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortType={sortType}
        setSortType={setSortType}
      />
      <div className="post-list">
        <Link to="/post" className="add-button">+</Link>
        <div style={{ marginTop: '40px' }}>
          {filteredPosts.map((post, index) => (
            <div key={index} className="post-item">
              <div className="post-item-left">
                <span className="author">{post.author}</span>
                <span className="title">{post.title}</span>
              </div>
              <div className="post-item-right">
                <span className="rating">{'★'.repeat(post.rating)}</span>
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
