import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchSort from '../components/main/SearchSort';
import Filtering from '../components/main/Filtering';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('popularity');
  // const [posts, setPosts] = useState([]); // 게시물 데이터 관리
  // const [loading, setLoading] = useState(true); // 로딩
  // const [error, setError] = useState(null); // 에러

  // useEffect(() => {
  //   // 게시물 데이터 받아오기
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch('/api/post');
  //       if (!response.ok) {
  //         throw new Error('데이터를 불러오는 데 실패했습니다.');
  //       }
  //       const data = await response.json();
  //       setPosts(data); // 받아온 데이터 업데이트
  //       setLoading(false); // 로딩 상태 종료
  //     } catch (error) {
  //       setError(error.message); // 에러 발생 시 상태
  //       setLoading(false); // 로딩 상태 종료
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  // 샘플 게시물
  const posts = [
    { user_id: '빨강', title: '이번주 토요일(10/5) 홍대 근처에서 만나실 팀원분들 모집합니다', interests: 1, post_at: '2024-10-01' },
    { user_id: '주황', title: '⭐️10/6 판교 근처 팀원분들 찾습니다⭐️', interests: 2, post_at: '2024-10-02' },
    { user_id: '노랑', title: '[Geniuses] 팀원 모집', interests: 3, post_at: '2024-10-03' },
    { user_id: '초록', title: '[🔥서울강남 팀원 모집중🔥]', interests: 4, post_at: '2024-10-04' },
    { user_id: '파랑', title: '❤Geniuses에서 함께하실 팀원을 찾습니다~!!❤', interests: 5, post_at: '2024-10-05' },
    { user_id: '남색', title: '다음주 금요일(10/11) 수원 근처에서 만나실 팀원분들 찾습니다!!!!!', interests: 1, post_at: '2024-10-06' },
    { user_id: '보라', title: '❤11월 15일 사당 근처 서바이벌 참가자 찾습니다~!!❤', interests: 2, post_at: '2024-11-07' },
    { user_id: '정민', title: '!!! 11월 17일 서바이벌 참가자 모십니다 !!!', interests: 3, post_at: '2024-11-08' },
    { user_id: '민호', title: '!!! 11월 16일 서바이벌 참가자 모십니다 !!!', interests: 4, post_at: '2024-11-09' },
    { user_id: '대혁', title: '[🔥경기수원 팀원 모집중🔥]', interests: 5, post_at: '2024-11-09' },
  ];

  const filteredPosts = Filtering({ posts, searchTerm, sortType });

  // if (loading) {
  //   return <div>로딩 중...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

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
          {filteredPosts.map((post, index) => {
              // const { title, user_id, interests, post_at } = post;
              return (
            <div key={index} className="post-item flex justify-between items-center py-2 border-b border-gray-300">
              <div className="post-item-left flex text-left">
                <span className="user_id mr-20">{post.user_id}</span>
                <span className="title mr-20">{post.title}</span>
              </div>
              <div className="post-item-right flex text-right">
                <span className="interests mr-20">{'★'.repeat(post.interests)}</span>
                <span className="post_at mr-20">{post.post_at}</span>
              </div>
            </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
