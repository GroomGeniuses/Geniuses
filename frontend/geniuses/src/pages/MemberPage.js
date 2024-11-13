import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../components/memberPage/Profile';
import Tabs from '../components/memberPage/Tabs';
import useFetchUserData from '../components/memberPage/useFetchUserData';
import Pagination from '../components/memberPage/Pagination';

const MemberPage = ({ userId }) => {
  const navigate = useNavigate();
  const { userName, userIntroduce, setUserIntroduce, profileImageUrl, setProfileImageUrl } = useFetchUserData(userId);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('작성한 글');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleDescriptionChange = newDescription => {
    setUserIntroduce(newDescription);
  };

  const handleSave = async () => {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, introduce: userIntroduce }),
    });

    if (response.ok) setIsEditing(false);
  };

  const handleImageChange = newProfileImageUrl => {
    setProfileImageUrl(newProfileImageUrl);
  };

  const handlePageClick = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="profile-page mx-auto p-5">
      <div className="member-container flex flex-col items-center w-full max-w-xl p-2 border border-gray-300 rounded-lg bg-gray-100 shadow-md mx-auto">
        <Profile
          userId={userId}
          userName={userName}
          userDescription={userIntroduce}
          profileImageUrl={profileImageUrl}
          onDescriptionChange={handleDescriptionChange}
          onSave={handleSave}
          onImageChange={handleImageChange}
        />
        <div className="post-container flex flex-col items-center">
          <Tabs activeTab={activeTab} onTabClick={setActiveTab} />
          <button className="write-button px-3 py-1 bg-blue-600 text-white border-none rounded-md cursor-pointer text-sm ml-auto -mr-16 hover:bg-blue-700" onClick={() => navigate('/post')}>
            글쓰기
          </button>
          <div className="post-section flex flex-col items-start justify-end w-full max-w-2xl">
            {activeTab === '작성한 글' ? (
              <div className="post-grid grid grid-cols-3 grid-rows-3 gap-2 w-full max-w-[600px]">
                {Array(9)
                  .fill('')
                  .map((_, index) => (
                    <div key={index} className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                  ))}
              </div>
            ) : (
              <div className="status-section grid grid-cols-4 gap-2 -ml-[110px]">
                <div className="status-row contents">
                  <span className="status-label font-bold text-right h-[90px] leading-[100px]">진행중</span>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                </div>
                <div className="status-row contents">
                  <span className="status-label font-bold text-right h-[90px] leading-[100px]">합격</span>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                </div>
                <div className="status-row contents">
                  <span className="status-label font-bold text-right h-[90px] leading-[100px]">불합격</span>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                  <div className="post-box w-24 h-24 bg-gray-300 flex justify-center items-center rounded-md"></div>
                </div>
              </div>
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageClick={handlePageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
