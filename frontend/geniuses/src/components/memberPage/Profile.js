import React from 'react';
import profilePic from '../../pages/user_profile.png';

const Profile = ({ nickname, userDescription, isEditing, onEdit, onSave, onDescriptionChange }) => {
  return (
    <div className="profile-container flex flex-row items-center ml-5">
      <div className="profile-circle w-36 h-36 rounded-full border-2 border-black overflow-hidden flex justify-center items-center">
        <img src={profilePic} alt="Profile" className="profile-image w-full h-auto" />
      </div>
      <div className="profile-info flex flex-col text-left ml-5">
        <h3 className="nickname mb-0.5">{nickname}님</h3>
        {isEditing ? (
          <>
            <textarea
              className="user-description left border border-gray-300 rounded-md bg-gray-200 w-[300px] h-[80px] flex justify-start items-center text-left"
              value={userDescription}
              onChange={onDescriptionChange}
              rows={4}
            />
            <button className="edit-profile bg-green-500 text-white border-none rounded-sm cursor-pointer text-sm w-[80px] ml-auto hover:bg-green-600" onClick={onSave}>
              저장
            </button>
          </>
        ) : (
          <>
            <p className="user-description border border-gray-300 rounded-md bg-gray-200 w-[300px] h-[80px] flex justify-center items-center text-center">{userDescription}</p>
            <button className="edit-profile bg-green-500 text-white border-none rounded-sm cursor-pointer text-sm w-[80px] ml-auto hover:bg-green-600" onClick={onEdit}>
              프로필 수정
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
