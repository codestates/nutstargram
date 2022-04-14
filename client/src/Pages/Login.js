/* eslint-disable */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import logo from '../peanuts.png';
import Signup from './Signup';

export default function Login({ handleLoginSuccess }) {
  const navigate = useNavigate();
  // props required w/ server
  // props에 setToken || handleLoginSuccess를 전달받아 로그인 함수에 전달.
  const style1 = {
    height: '100px',
    width: '100px',
    borderRadius: '100px',
  };
  const swi = false;
  const [issign, setSign] = useState(swi);
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
  const handleSign = () => {
    setSign(!swi);
    navigate('/main');
  };
  return (
    <div>
      {!issign ? (
        <div>
          <img src={logo} style={style1} />
          <form onSubmit={e => e.preventDefault()}>
            <span>이메일</span>
            <input
              className="userEmail"
              placeholder="please write your email"
              onChange={handleInputValue('email')}
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
            <button className="btn-login" type="submit" onClick={handleLogin}>
              로그인
            </button>
            <br />
          </form>
          <div className="error-box">{errorMsg}</div>
          <button className="btn-signup" onClick={handleSign}>
            회원가입
          </button>
        </div>
      ) : (
        <div>
          <Signup />
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      )}
    </div>
  );
}
