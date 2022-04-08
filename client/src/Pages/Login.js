import React from 'react';
import styled from 'styled-components';
import logo from '../peanuts.png';

const style1 = {
  height: '100px',
  width: '100px',
  borderRadius: '100px',
};
const LoginPage = () => {
  return (
    <div>
      <img src={logo} style={style1} />
      <br />
      <input
        className="userEmail"
        placeHolder="please write your email"
      ></input>
    </div>
  );
};

export default LoginPage;
