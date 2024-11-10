import { useState, useEffect } from 'react';

const useFetchUserData = userId => {
  const [userName, setUserName] = useState('사용자 이름');
  const [userIntroduce, setUserIntroduce] = useState('사용자 소개');
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [applications, setApplications] = useState({ 진행중: [], 합격: [], 불합격: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`/api/MemberPage/${userId}`);
        const { userName, introduce, profileImageUrl } = await userResponse.json();
        if (userName) setUserName(userName);
        if (introduce) setUserIntroduce(introduce);
        if (profileImageUrl) setProfileImageUrl(profileImageUrl);

        // 지원서 데이터 fetch
        const appResponse = await fetch(`/api/applications/${userId}`);
        const data = await appResponse.json();

        const grouped = data.reduce((acc, app) => {
          acc[app.status].push(app);
          return acc;
        }, { 진행중: [], 합격: [], 불합격: [] });

        setApplications(grouped);
      } catch (error) {
        console.error('데이터 로딩 실패:', error);
      }
    };

    fetchData();
  }, [userId]);

  // 프로필 이미지 업데이트 함수
  const updateProfileImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`/api/MemberPage/${userId}/profile-image`, {
        method: 'POST',
        body: formData,
      });
      const { profileImageUrl } = await response.json(); // 서버에서 반환한 이미지 URL을 받아옴
      setProfileImageUrl(profileImageUrl); // 프로필 이미지 URL 상태 업데이트
    } catch (error) {
      console.error('프로필 이미지 업로드 실패:', error);
    }
  };

  return { userName, userIntroduce, setUserIntroduce, profileImageUrl, applications, updateProfileImage };
};

export default useFetchUserData;
