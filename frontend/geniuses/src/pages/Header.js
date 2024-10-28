import React from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from './user_profile.png';
import './Header.css';

const Header = ({ isLoggedIn, nickname, onLogout }) => {
  const navigate = useNavigate();

  return (
    <header>
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Geniuses
      </h1>
      <div className='profile-section'>
        {isLoggedIn && <span className='nickname'>{nickname}님</span>}
        <div>
          {isLoggedIn ? (
            <>
              <button className='mypage-btn' onClick={() => navigate("/MemberPage")}>
                MyPage
              </button>
              <img src={profilePic} alt='Profile Picture' className='profile-pic' />
              <button className='profile-btn' onClick={onLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <button className='profile-btn' onClick={() => navigate("/login")}>
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
