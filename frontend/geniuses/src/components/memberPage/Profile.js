import React, { useState, useEffect } from 'react';

const Profile = ({ userId, userName, userDescription, profileImageUrl, onDescriptionChange, onSave, onImageChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(userDescription);
  const [selectedImage, setSelectedImage] = useState(profileImageUrl);

  useEffect(() => {
    setNewDescription(userDescription);
    setSelectedImage(profileImageUrl);
  }, [userDescription, profileImageUrl]);

  const handleDescriptionChange = e => {
    setNewDescription(e.target.value);
  };

  const handleSave = () => {
    onDescriptionChange(newDescription);
    onSave();
    setIsEditing(false);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch(`/api/MemberPage/${userId}/profile-image`, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          setSelectedImage(data.profileImageUrl);
          onImageChange(data.profileImageUrl);
        })
        .catch(error => console.error('이미지 업로드 실패:', error));
    }
  };

  return (
    <div className="profile-container flex flex-row items-center ml-5">
      <div className="profile-circle w-36 h-36 rounded-full border-2 border-black overflow-hidden flex justify-center items-center">
        <img
          src={selectedImage || '/user_profile.png'}
          alt="Profile"
          className="profile-image w-full h-auto"
        />
      </div>
      <div className="profile-info flex flex-col text-left ml-5">
        <h3 className="nickname mb-0.5">{userName}님</h3>
        {isEditing ? (
          <>
            <textarea
              className="user-description left border border-gray-300 rounded-md bg-gray-200 w-[300px] h-[80px] flex justify-start items-center text-left"
              value={newDescription}
              onChange={handleDescriptionChange}
              rows={4}
            />
            <button className="edit-profile bg-green-500 text-white border-none rounded-sm cursor-pointer text-sm w-[80px] ml-auto hover:bg-green-600" onClick={handleSave}>
              저장
            </button>
          </>
        ) : (
          <>
            <p className="user-description border border-gray-300 rounded-md bg-gray-200 w-[300px] h-[80px] flex justify-center items-center text-center">{newDescription}</p>
            <div className="flex items-center space-x-2">
              <div className="profile-image-change">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer bg-green-500 text-white rounded hover:bg-green-600"
                >
                  이미지 변경
                </label>
              </div>
              <button className="edit-profile bg-green-500 text-white border-none rounded-sm cursor-pointer text-sm w-[80px] ml-auto hover:bg-green-600" onClick={() => setIsEditing(true)}>
                프로필 수정
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
