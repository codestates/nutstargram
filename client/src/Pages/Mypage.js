/* eslint-disable */
import React, { useState } from 'react';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.withCredentials = true;
// const navigate=useNavigate();

const MyPage = props => {
  const { username, user_img, email, mobile } = props.userinfo.data.data.jwt;
  const navigate = useNavigate();

  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  );
  console.log(Image);
  return (
    <Mypage>
      <MyBody>
        <MyHeader>{`${username}님 안녕하세요!`}</MyHeader>
        <img src={Image} style={{ margin: '20px' }} width="100" height="100" />
        <FixIndex>이메일 *</FixIndex>
        <MyEmail>{email}</MyEmail>
        <FixIndex>연락처 *</FixIndex>
        <MyMobile>{mobile}</MyMobile>
      </MyBody>
    </Mypage>
  );
};

export default MyPage;

const Mypage = styled.div`
  font-family: sans-serif;
  height: 100vh;
  width: 100vw;
`;

const MyBody = styled.div`
  position: relative;
  margin: 5% auto;
  height: 450px;
  width: 400px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`;

const MyHeader = styled.div`
  font-size: larger;
  font-weight: bold;
  color: grey;
  padding: 20px;
`;

const MyImg = styled.div``;

const MyEmail = styled.div`
  width: 220px;
  height: 32px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  border: none;
  outline: none;
  border-bottom: 1px solid #aaa;
  font-size: 15px;
  margin: auto;
`;

const MyMobile = styled.div`
  width: 220px;
  height: 32px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  border: none;
  outline: none;
  border-bottom: 1px solid #aaa;
  font-size: 15px;
  margin: auto;
`;

const EditBtn = styled.div`
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  margin: 24px;

  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;

const NavLink = styled(Link)`
  border-radius: 4px;
  background: #f9aa83;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f9aa83;
  }
`;

const FixIndex = styled.div`
  font-size: medium;
  font-weight: bold;
  color: grey;
  padding-top: 20px;
`;
