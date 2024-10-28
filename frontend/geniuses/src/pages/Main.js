import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import "./Main.css";
import MemberPage from "./MemberPage";
import Header from '.Header';
import LoginPage from './Login';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState("");

  // 로그인 함수
  const handleLogin = (nickname) => {
    setIsLoggedIn(true);
    setNickname(nickname); // 닉네임 설정
  };

  // 로그아웃 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    setNickname(""); // 닉네임 초기화
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              isLoggedIn={isLoggedIn}
              nickname={nickname}
              handleLogout={handleLogout}
            />
          }
        />
        <Route 
          path="/MemberPage" 
          element={
            <MemberPage 
              isLoggedIn={true}
              nickname={nickname}
              onLogout={handleLogout} 
            />
          } 
        />
          
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />} // onLogin prop 전달
        />
      </Routes>
    </Router>
  );
};

const MainContent = ({ isLoggedIn, nickname, handleLogout }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("popularity");
  const navigate = useNavigate();

  // 샘플 게시물
  const posts = [
    { author: "작성자1", title: "글제목1", rating: 5, date: "2024-10-01" },
    { author: "작성자2", title: "글제목2", rating: 4, date: "2024-10-02" },
    { author: "작성자3", title: "글제목3", rating: 3, date: "2024-10-03" },
    { author: "작성자1", title: "글제목1", rating: 5, date: "2024-10-04" },
    { author: "작성자2", title: "글제목2", rating: 4, date: "2024-10-05" },
    { author: "작성자3", title: "글제목3", rating: 3, date: "2024-10-06" },
    { author: "작성자1", title: "글제목1", rating: 5, date: "2024-10-07" },
    { author: "작성자2", title: "글제목2", rating: 4, date: "2024-10-08" },
    { author: "작성자3", title: "글제목3", rating: 3, date: "2024-10-09" },
  ];

  // 게시물 정렬 및 필터링
  const sortedPosts = posts.sort((a, b) => {
    if (sortType === "popularity") {
      return b.rating - a.rating;
    }
    return new Date(b.date) - new Date(a.date);
  });

  const filteredPosts = sortedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='app'>
      <Header 
        isLoggedIn={isLoggedIn} 
        nickname={nickname} 
        onLogout={handleLogout} 
      />

      {/* 검색 및 정렬 */}
      <div className='search-section'>
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='sorting'>
          <button
            className={sortType === "popularity" ? "active" : ""}
            onClick={() => setSortType("popularity")}
          >
            인기순
          </button>
          <button
            className={sortType === "date" ? "active" : ""}
            onClick={() => setSortType("date")}
          >
            최신순
          </button>
        </div>
      </div>
        <div className='post-list'>
          <Link to='/post' className='add-button'>
            +
          </Link>
          <div style={{ marginTop: "40px" }}>
            {filteredPosts.map((post, index) => (
              <div key={index} className='post-item'>
                <div className='post-item-left'>
                  <span className='author'>{post.author}</span>
                  <span className='title'>{post.title}</span>
                </div>
                <div className='post-item-right'>
                  <span className='rating'>{"★".repeat(post.rating)}</span>
                  <span className='date'>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

// const LoginPage = ({ onLogin }) => {
//   const [inputNickname, setInputNickname] = useState(""); // 닉네임 입력 상태

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(inputNickname); // 로그인 성공 처리
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           placeholder='사용자 이름'
//           required
//           value={inputNickname}
//           onChange={(e) => setInputNickname(e.target.value)} // 닉네임 업데이트
//         />
//         <button type='submit'>로그인</button>
//       </form>
//     </div>
//   );
// };

export default Main;
