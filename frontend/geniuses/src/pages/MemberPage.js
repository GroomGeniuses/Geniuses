import React from 'react';
import TestMemberPage from '../components/memberPage/TestMemberPage';
import { useParams } from 'react-router-dom';
export default function MemberPage() {
  const params = useParams();
  return (
    <div>
      memberPage / member : {params.memberId}
      <TestMemberPage />
    </div>
  );
}
