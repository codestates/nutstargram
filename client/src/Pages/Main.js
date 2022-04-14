/* eslint-disable */
import React, { Component, Routes, Route, BrowserRouter } from 'react';
import styled from 'styled-components';
import {useState} from 'react'

const MainPage = ({ userinfo, content }) => {
   console.log(content);
  console.log(userinfo);
  const [posts, setPosts] = useState([]);
  const post = {
    //id: userinfo.data.data.id,
    content_img: content.content_img,
    content_text: content.content_text,
    createdAt: content.createdAt
  };

  const handlePosts = () => {
    setPosts([post, ...posts ]);
  }

  const test = async () => {
    console.log(await content)
    console.log(await post)
  }
  return (
    <div className="Main">
      <div>
        <h1>메인페이지 입니다.</h1> 
        <h3>scroll container</h3>
        <button onClick={test}> Contents info </button> {/*단순 유저인포 콘솔찍어보려보 만듦 */}
        <br />
        <button onClick={handlePosts}>일기 불러오기? </button>
        <div>
                {/* // <div key={post.id}>
                //   <PostImg>{post.content_img}</PostImg>
                //   <PostText>{post.content_text}</PostText>
                // </div> */}
          {content ?
          <PostContainer>
            <ul className='posts'>
              {posts.map((post) =><PostImg post={post} key={post.id}/> )}
            </ul></PostContainer> : <span>일기를 작성해주세요</span> }
                
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
