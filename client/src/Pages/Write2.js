import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const WritePage = () => {
  // Styled component
  const Container = styled.div`
    img {
      width: 200px;
      height: 200px;
      //object-fit: cover; 이거 쓰면 이미지 짤림
    }
  `;
  const formData = new FormData();
  const onFileChange = e => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append('file', e.target.files[0]);
    }
  };
  const submitFileData = () => {
    axios
      .post('https://localhost4000/write', { formData })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>일기 작성 페이지</h2>
      <Link to="/main">
        <button>뒤로가기</button>
      </Link>
      <form encType="multiport/form-data">
        <label htmlFor="upload-file">이미지 업로드 </label>
        <input
          id="uploadFile"
          type="file"
          accept="image/*"
          multiple
          onChange={e => onFileChange(e)}
        ></input>
      </form>
      <br />
      <span>미리보기..</span>
      <div className="imageContainer">
        <Container>
          <img
            src={
              {''} ||
              'https://vernixgroup.com/wp-content/themes/consultix/images/no-image-found-360x250.png'
            }
            alt="noImg"
          />
        </Container>
      </div>
      <textarea className="write" type="text"></textarea>
      <br />
      <button className="btn-post" onClick={submitFileData}>
        Submit Data
      </button>
    </div>
  );
};
export default WritePage;
