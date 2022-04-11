import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Edit_contents from '../Pages/Edit_contents';
import MyPage from '../Pages/Mypage';
import WritePage from '../Pages/Write';
import Login from '../Pages/Login';

export default function Nav() {
  // mypage에서 정보를 렌더링 할 수 있도록 여기서 mypage로 이동할 때 발생시킬 handleUserinfo 이벤트 함수가 있어야한다.
  return (
    <div>
      개발자님, 안녕하세요. 안녕 못합니다...
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
        <Route path="/login*" element={<Login />} />
        {/* <Route path="/Edit_contents" element={<Edit_contents />} /> */}
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/WritePage" element={<WritePage />} />
      </Routes>
    </div>
  );
}
