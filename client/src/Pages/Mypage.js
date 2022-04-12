/* eslint-disable */
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const MyPage = () => {
  const [validUserInfo, setValidUserInfo] = useState({
    username: '',
    user_img: '',
  });

  axios({
    method: 'get',
    url: 'http://localhost:4000/userinfo',
    params: { email: 'hello@world.com' },
  })
    .then(res => {
      const { userInfo } = res.data.data;

      setValidUserInfo({
        username: userInfo.username,
        user_img: userInfo.user_img,
      });
    })
    .catch(err => console.log(err.message));

  // 0411 22:26 무한 루프중...
  return (
    <div>
      <Link to="/edituserinfo">
        <button type="button">내정보 편집하깅 :)</button>
      </Link>
      <div>마이페이지</div>
      <div>마이마이한 내용</div>
      <h1>Users</h1>
      <div></div>
    </div>
  );
};

export default MyPage;
