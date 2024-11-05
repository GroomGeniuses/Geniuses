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
// const axiosHeaders = {
//   'Content-Type': 'multipart/form-data',
//   'Access-Control-Allow-Credentials': true,
//   // 'Access-Control-Allow-Origin': 'https://localhost:8080, https://localhost:3000',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'Authorization, RefreshToken, Content-Type',
//   'Access-Control-Allow-Methods': '*',
//   // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
// };
const axiosApi = {
  login: data => {
    return axios
      .post(api.loginForm(), data)
      .then(response => {
        console.log(response.headers['authorization']);
        console.log(response.headers['refreshtoken']);
        window.location.href = '/';
      })
      .catch(error => {
        console.log(error.response);
        alert(error.response.data);
        console.log(error);
      });
  },
  signup: data => {
    return axios
      .post(api.signup(), data)
      .then(response => {
        window.location.href = '/login';
      })
      .catch(error => {
        console.log(error.response);
        alert(error.response.data);
        window.location.href = '/signup';
      });
  },
};
export default api;
export { axiosApi };
