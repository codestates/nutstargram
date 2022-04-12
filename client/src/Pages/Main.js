/* eslint-disable */
import React, { Component, Routes, Route, BrowserRouter } from 'react';
import styled from 'styled-components';
import NavBar from '../Components/Nav';

const MainPage = () => {
  const postContainer = styled.div`
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
        <h1>ㅎㅇ</h1>
        <postContainer>{/* 게시물들이 저장될 곳? */}</postContainer>
      </div>
    </div>
  );
};

export default MainPage;
