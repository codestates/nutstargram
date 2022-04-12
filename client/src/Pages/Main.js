/* eslint-disable */
import React, { Component, Routes, Route, BrowserRouter } from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';

const MainPage = () => {
  const PostContainer = styled.div`
    overflow: scroll;
    width: 10px; /*가로 스크롤 넓이 */
    height: 10px; /*새로 스크롤 넓이 */
    border: 1px solid black;
    border-radius: 6px;
  `;
  return (
    <div className="Main">
      <br />
      <div>
        <h1>메인페이지 입니다.</h1>
        <h3>scroll container</h3>
        <PostContainer>{/* 게시물들이 저장될 곳? */}</PostContainer>
      </div>
    </div>
  );
};

export default MainPage;
