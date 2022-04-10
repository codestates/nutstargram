import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Edit_contents from '../Pages/Edit_contents';
import MyPage from '../Pages/Mypage';
import WritePage from '../Pages/Write';
import Login from '../Pages/Login';

export default function Nav() {
  return (
    <div>
      개발자님, 안녕하세요.
      <br />
      <Link to="/login">
        <button type="button">로그아웃</button>
      </Link>
      <Link to="/Edit_contents">
        <button type="button">Edit Contents!</button>
      </Link>
      <Link to="/MyPage">
        <button type="button">MyPage</button>
      </Link>
      <Link to="/WritePage">
        <button type="button">일기를 써보자!</button>
      </Link>
      <Routes>
        <Route path="/login" element={<Login />} exact={true} />
        <Route path="/Edit_contents" element={<Edit_contents />} exact={true} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/WritePage" element={<WritePage />} />
      </Routes>
    </div>
  );
}
