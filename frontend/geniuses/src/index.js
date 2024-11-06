import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './_store/store';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MemberPage from './pages/MemberPage';
import Base from './components/BaseAuth';
import Test from './pages/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="test" element={<Test />} />
          <Route path="" element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="login" element={<Base component={<Login />} />} />
          <Route path="signup" element={<Base component={<Signup />} />} />
          <Route path="member/:memberId" element={<MemberPage />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
