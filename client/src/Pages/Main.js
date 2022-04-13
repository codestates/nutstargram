/* eslint-disable */
import React, { Component, Routes, Route, BrowserRouter } from 'react';
import styled from 'styled-components';

const MainPage = ({ userinfo }) => {
  // 일단 app.js 에서 프롭스로 유저정보를 받아오고
  //axios에서  유저아이디 넣어서 get요청
  console.log(userinfo);

  return (
    <div className="Main">
      <br />
      <div>
        <h1>메인페이지 입니다.</h1>
        <h3>scroll container</h3>
        <PostContainer>
          <PostImg></PostImg>
          <PostText></PostText>
        </PostContainer>
      </div>
    </div>
  );
};

const PostContainer = styled.div`
  overflow: scroll;
  width: 10px; /*가로 스크롤 넓이 */
  height: 10px; /*새로 스크롤 넓이 */
  border: 1px solid black;
  border-radius: 6px;
`;

const PostImg = styled.div``;
const PostText = styled.div``;

export default MainPage;
