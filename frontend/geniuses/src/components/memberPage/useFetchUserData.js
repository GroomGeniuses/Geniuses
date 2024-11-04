import { useEffect, useState } from 'react';

const useFetchUserData = userId => {
  const [userDescription, setUserDescription] = useState('사용자 설명');
  const [applications, setApplications] = useState({ 진행중: [], 합격: [], 불합격: [] });

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await fetch(`/api/users/${userId}`);
      const { description } = await userResponse.json();
      if (description) setUserDescription(description);

      const appResponse = await fetch(`/api/applications/${userId}`);
      const data = await appResponse.json();
      const grouped = data.reduce((acc, app) => {
        acc[app.status].push(app);
        return acc;
      }, { 진행중: [], 합격: [], 불합격: [] });
      setApplications(grouped);
    };

    fetchData();
  }, [userId]);

  return { userDescription, setUserDescription, applications };
};

export default useFetchUserData;
