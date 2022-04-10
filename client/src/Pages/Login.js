import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import logo from '../peanuts.png';

const style1 = {
  height: '100px',
  width: '100px',
  borderRadius: '100px',
};

const Login = () => {
  return (
    <div>
      <img src={logo} style={style1} />
      <br />
      <input
        className="userEmail"
        placeholder="please write your email"
      ></input>
      <br />
      <input
        className="userPassword"
        placeholder="please write your password"
      ></input>
      <br />
      <button>Login</button>
      <br />
      <button>여기가 구글로그인 자리</button>
      <br />
      <Link to="/signup">Sign Up 하자</Link>
    </div>
  );
};

export default Login();
