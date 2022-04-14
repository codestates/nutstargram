/* eslint-disable */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import logo from '../almonds.png';
import Signup from './Signup';
import Modal from '../Components/Modals/Modalsignup';
import '../Styles/Login.css';

export default function Login({ handleLoginSuccess }) {
  const navigate = useNavigate();
  // props required w/ server
  // props에 setToken || handleLoginSuccess를 전달받아 로그인 함수에 전달.

  const swi = false;
  const [issign, setSign] = useState(swi);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const handleInputValue = key => e => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
    // console.log(e.target.value);
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
          // console.log(data) 유저 정보 들어온다
          handleLoginSuccess(data);
          navigate('/main');
        });
      // 디비 조회못하고 메인으로 리디렉션중
    }
  };

  return (
    <div>
      <img src={logo} className="logo" />
      <div className='h1'>NUTSTAGRAM</div>
      
      <div className='container'>
        <form className='inputA' onSubmit={e => e.preventDefault()}>
          <input
            className="userEmail"
            placeholder="please write your email"
            onChange={handleInputValue('email')}
          ></input>
          <input
            className="pwd"
            type="password"
            placeholder="비밀번호"
            onChange={handleInputValue('password')}
          ></input>
          <button className="btn-login" type="submit" onClick={handleLogin}>
            로그인
          </button>
          
        </form>
        
      </div>
      
    </div>
  );
}
