import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const MyPage = () => {
  // axios({
  //   method: 'get',
  //   url: 'http://localhost:4000/userinfo',
  // })
  //   .then(res => {
  //     console.log('~~~~~~~~', res);
  //   })
  //   .catch(err => console.log(err.message));
  return (
    <div>
      <Link to="/edituserinfo">
        <button type="button">내정보 편집하깅 :)</button>
      </Link>
      <div>마이페이지</div>
      <div>마이마이한 내용</div>
      <h1>Users</h1>
    </div>
  );
};

export default MyPage;
