import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Edit_contents from '../Pages/Edit_contents';
import MyPage from '../Pages/Mypage';
import WritePage from '../Pages/Write';
import Login from '../Pages/Login';

export default function Nav() {
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
      <Link to="/mypage">
        <button type="button">MyPage</button>
      </Link>
      <Link to="/WritePage">
        <button type="button">일기를 써보자!</button>
      </Link>
      {/* <Routes> */}
      {/* <Route path="/login*" element={<Login />} /> */}
      {/* <Route path="/Edit_contents" element={<Edit_contents />} /> */}
      {/* <Route path="/MyPage" element={<MyPage />} /> */}
      {/* <Route path="/WritePage" element={<WritePage />} /> */}
      {/* </Routes> */}
      {/* Nav Bar 를 app단 위에 항상 띄우는 방식의 구현을 해보려 합니다. */}
      {/* Nav Bar의 Routes 를 살려두면 페이지에 2번 렌더링 되는 모습을 볼 수 있습니다 :) */}
    </div>
  );
}
