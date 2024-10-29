import React from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://localhost:8080';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://localhost:8080, https://localhost:3000';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Origin, Authorization, RefreshToken, Content-Type';
// axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
// axios.defaults.withCredentials = true;

const API_BASE_URL = 'http://localhost:8080';
const API = '/api';
// auth
const AUTH = '/auth';
// login
const KAKAOLOGIN = '/login/kakao';
const GOOGLELOGIN = '/login/google';
const FORMLOGIN = '/login/form';
// signup
const SIGNUP = '/signup';
// logout
const LOGOUT = '/logout';

const api = {
  loginKakaoAuth: () => API_BASE_URL + API + AUTH + KAKAOLOGIN,
  loginGoogleAuth: () => API_BASE_URL + API + AUTH + GOOGLELOGIN,
  loginForm: () => API_BASE_URL + API + AUTH + FORMLOGIN,
  signup: () => API_BASE_URL + API + AUTH + SIGNUP,
  logout: () => API_BASE_URL + API + AUTH + LOGOUT,
};
const axiosHeaders = {
  'Content-Type': 'multipart/form-data',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': 'https://localhost:8080, https://localhost:3000',
  'Access-Control-Allow-Headers': 'Authorization, RefreshToken, Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
};
const axiosApi = {
  login: (loginId, password) => {
    alert(loginId, password);
    return axios
      .post(
        api.loginForm(),
        {
          loginId: loginId,
          password: password,
        },
        {
          axiosHeaders,
        },
      )
      .then(response => {
        console.log(response.headers.getAuthorization());
        console.log(response.headers.RefreshToken);
      })
      .catch(error => {
        alert('error');
        console.log(error);
      });
  },
};
export default api;
export { axiosApi };
