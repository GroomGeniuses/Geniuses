import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './MemberPage.css';
import profilePic from './user_profile.png';

const MemberPage = ({ isLoggedIn, nickname, onLogout }) => {
  const navigate = useNavigate();
  const [userDescription, setUserDescription] = useState('사용자 설명'); // 사용자 설명 상태 추가
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 추가
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가

  const handleWriteButtonClick = () => {
    navigate('/post'); // 글쓰기 버튼 클릭 시 /post로 이동
  };

  const handlePageClick = pageNumber => {
    setCurrentPage(pageNumber); // 클릭한 페이지 번호로 현재 페이지 업데이트
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const handleDescriptionChange = e => {
    setUserDescription(e.target.value); // 설명 업데이트
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing); // 수정 모드 토글
  };

  const handleSave = () => {
    // 저장 로직 (API 호출 등) 추가 가능
    setIsEditing(false); // 수정 모드 종료
    // 예: API에 저장하는 코드를 추가할 수 있습니다.
    console.log('저장된 설명:', userDescription);
  };

  return (
    <div className="profile-page">
      <Header isLoggedIn={isLoggedIn} nickname={nickname} onLogout={handleLogout} />
      <div className="member-container">
        <div className="profile-container">
          <div className="profile-circle">
            <img src={profilePic} alt="Profile" className="profile-image" />
          </div>
          <div className="profile-info">
            <h3>{nickname}님</h3>
            {isEditing ? (
              <>
                <textarea
                  className="user-description left" // 왼쪽 정렬 클래스 추가
                  value={userDescription}
                  onChange={handleDescriptionChange}
                  rows={4}
                />
                <button className="edit-profile" onClick={handleSave}>
                  저장
                </button>
              </>
            ) : (
              <>
                <p className="user-description">{userDescription}</p>
                <button className="edit-profile" onClick={handleEditProfile}>
                  프로필 수정
                </button>
              </>
            )}
          </div>
        </div>
        <div className="post-container">
          <div className="tabs">
            <span className="tab active">작성한 글</span>
            <span className="tab">신청한 글</span>
          </div>
          <button className="write-button" onClick={handleWriteButtonClick}>
            글쓰기
          </button>
          <div className="post-section">
            <div className="post-grid">
              {Array(9)
                .fill('')
                .map((_, index) => (
                  <div key={index} className="post-box"></div>
                ))}
            </div>
          </div>
          <div className="pagination">
            {Array(3)
              .fill('')
              .map((_, index) => {
                const pageNumber = index + 1; // 페이지 번호 설정
                return (
                  <span
                    key={pageNumber}
                    className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => handlePageClick(pageNumber)} // 클릭 시 핸들러 호출
                  >
                    {pageNumber}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
