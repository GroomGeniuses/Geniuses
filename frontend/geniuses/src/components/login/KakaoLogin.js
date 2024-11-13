import React from 'react';
import api from '../../_api/api';
import SocialLoginButton from './SocialLoginButton';

export default function KakaoLogin() {
  return (
    <SocialLoginButton
      provider={api.loginKakaoAuth()}
      bgColor="bg-yellow-300"
      viewBox="0 0 2500 2500"
      enableBackground="new 0 0 2500 2500"
      text="Kakao Login"
      path={
        <path
          fill="#000000"
          d="M1250,351.6c-560.9,0-1015.6,358.5-1015.6,800.8c0,285.9,190.1,536.8,476.1,678.5c-15.6,53.7-100,345.2-103.3,368.1
  c0,0-2,17.2,9.1,23.8c11.1,6.6,24.2,1.5,24.2,1.5c32-4.5,370.5-242.3,429.1-283.6c58.5,8.3,118.8,12.6,180.4,12.6
  c560.9,0,1015.6-358.5,1015.6-800.8C2265.6,710.1,1810.9,351.6,1250,351.6L1250,351.6z"
        />
      }
    />
  );
}
