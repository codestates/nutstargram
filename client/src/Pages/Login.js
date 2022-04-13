/* eslint-disable */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../almonds.png';
import '../Styles/Login.css';

export default function Login({ handleLoginSuccess }) {
  // props required w/ server
  // props에 setToken || handleLoginSuccess를 전달받아 로그인 함수에 전달.
  
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const handleInputValue = key => e => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
    //console.log(e.target.value);
  };

  const handleLogin = () => {
    if (loginInfo.email === '' || loginInfo === '') {
      setErrorMsg('이메일과 비밀번호를 입력하세요');
    } else {
      axios
        .post(
          // 'http://ec2-3-34-190-189.ap-northeast-2.compute.amazonaws.com/login',
          'http://localhost:4000/login',
          {
            email: loginInfo.email,
            password: loginInfo.password,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          },
        )
        .then(data => {
          //console.log(data) 유저 정보 들어온다
          handleLoginSuccess(data);
        });
      // 디비 조회못하고 메인으로 리디렉션중
    }
  };

  return (
    <div className='container'>
      <form className ='body' onSubmit={e => e.preventDefault()}>
        <img src={logo} className="logo"/>
        <div className='h1'>NUTSTAGRAM</div>
        
        <div className='inputA'>
          <input
            className="userEmail"
            placeholder="please write your email"
            onChange={handleInputValue('email')}
          ></input>
          <div>이메일</div>
          <input
            className="pwd"
            type="password"
            placeholder="비밀번호"
            onChange={handleInputValue('password')}
          ></input>
          <div>비밀번호</div>
        </div>

        <Link to="/main">
          {/* 임시로 써놓음 */}
          <button className="btn-login" type="submit" onClick={handleLogin}>
            로그인
          </button>
        </Link>

      <div className="error-box">{errorMsg}</div>
      <Link to="/Signup">
        <button className="btn-signup">회원가입</button>
      </Link>
      </form>
    </div>
  );
}
