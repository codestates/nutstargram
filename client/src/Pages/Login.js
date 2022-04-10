import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../peanuts.png';

export default function Login() {
  // props required w/ server
  // props에 setToken || handleLoginSuccess를 전달받아 로그인 함수에 전달.
  const style1 = {
    height: '100px',
    width: '100px',
    borderRadius: '100px',
  };
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const handleInputValue = key => e => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLoginSuccess = () => {};

  const handleLogin = () => {
    if (loginInfo.email === '' || loginInfo === '') {
      setErrorMsg('이메일과 비밀번호를 입력하세요');
    }
    axios
      .post(
        'https://localhost:4000/signin',
        {
          email: loginInfo.email,
          password: loginInfo.password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then(() => handleLoginSuccess());
  };

  return (
    <div>
      <img src={logo} style={style1} />
      <br />
      <form onSubmit={e => e.preventDefault()}>
        <span>이메일</span>
        <input
          className="userEmail"
          placeholder="please write your email"
        ></input>
        <br />
        <br />
        <span>비밀번호</span>
        <input
          className="pwd"
          type="password"
          placeholder="비밀번호"
          onChange={handleInputValue('password')}
        ></input>
        <br />
        <br />
        <Link to="/main">
          {/* 임시로 써놓음 */}
          <button className="btn-login" type="submit" onClick={handleLogin}>
            로그인
          </button>
        </Link>
      </form>

      <br />
      <div className="error-box">{errorMsg}</div>
      <br />
      <button className="google-login">Google Login</button>
      <br />
      <br />
      <Link to="/Signup">
        <button className="btn-signup">회원가입</button>
      </Link>
    </div>
  );
}
