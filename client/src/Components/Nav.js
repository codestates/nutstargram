import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import EditPage from '../Pages/Edit';
import LoginPage from '../Pages/Login';
import MainPage from '../Pages/Main';
import MyPage from '../Pages/Mypage';
import SignUpPage from '../Pages/Signup';
import WritePage from '../Pages/Write';

const NavBar = () => {
  return (
    <div>
      nav 입니다.
      <Link to="/">
        <button type="button">Login</button>
      </Link>
      <Link to="/EditPage">
        <button type="button">Edit</button>
      </Link>
      <Link to="/MainPage">
        <button type="button">Main</button>
      </Link>
      <Link to="/MyPage">
        <button type="button">MyPage</button>
      </Link>
      <Link to="/SignUpPage">
        <button type="button">SignUp</button>
      </Link>
      <Link to="/WritePage">
        <button type="button">Write</button>
      </Link>
      <Routes>
        <Route path="/" element={<LoginPage />} exact={true} />
        <Route path="/EditPage" element={<EditPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/WritePage" element={<WritePage />} />
      </Routes>
    </div>
  );
};

export default NavBar;
