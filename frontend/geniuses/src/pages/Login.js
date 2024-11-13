import React from 'react';
import api, { axiosApi } from '../_api/api';
import TextButton from '../components/TextButton';
import InputText from '../components/login/InputText';
import GoogleLogin from '../components/login/GoogleLogin';
import KakaoLogin from '../components/login/KakaoLogin';
import { Link } from 'react-router-dom';
export default function Login() {
  const handlerSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const jsonLogin = {
      loginId: formData.get('loginId'),
      password: formData.get('password'),
    };
    axiosApi.login(jsonLogin);
  };
  return (
    <div>
      <div className="font-bold text-2xl">로그인</div>
      <br />
      <form method="post" action={api.loginForm()}>
        {/* <form method="post" onSubmit={handlerSubmit}> */}
        <InputText type="text" id="loginId" placeHolder="example@google.com" />
        <InputText type="password" id="password" placeHolder="password" />
        <div className="text-right">
          <Link to="/signup">
            <TextButton type="button" text="회원가입" />
          </Link>
          <TextButton type="submit" text="로그인" />
        </div>
      </form>
      <br />
      <GoogleLogin />
      <KakaoLogin />
    </div>
  );
}
