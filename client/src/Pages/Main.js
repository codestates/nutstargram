/* eslint-disable */
import React, { Component, Routes, Route, BrowserRouter } from 'react';
import styled from 'styled-components';

const MainPage = ({ userinfo, content }) => {
  console.log(content);
  return (
    <div className="Main">
      <div>
        <h1>메인페이지 입니다.</h1>
        <h3>scroll container</h3>
        <div>
          {content ? (
            content.map(post => {
              return (
                <div key={post.id}>
                  <PostImg>{post.content_img}</PostImg>
                  <PostText>{post.content_text}</PostText>
                </div>
              );
            })
          ) : (
            <div>로그인</div>
          )}
        </div>
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

const PostImg = styled.div`
  border: 1px black solid;
`;
const PostText = styled.div``;

export default MainPage;
