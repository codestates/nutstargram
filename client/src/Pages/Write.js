/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const WritePage = () => {
  // Styled component
  const Container = styled.div`
    img {
      width: 300px;
      height: 300px;
      //object-fit: cover;
    }
  `;

  // 사진을 로컬에서부터 업로드하는 기능이 있어야합니다.
  // 만들어준 state에 파일객체를 담아서 서버에 업로드 요청을 보낸다.
  const [postfiles, setPostfiles] = useState({
    file: [],
    previewURL: '',
  });
  // 작성한 글?
  const [previewImg, setPreviewImg] = useState(null); // 미리보기 이미지

  const [write, setWrite] = useState('');

  const uploadImg = e => {
    // console.log(e.target.files[0]); 성공적으로 이미지가 출력된다.
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // FileReader의 readAsDataURL method와 onloadend를 이용해서 base64의 스트링 데이터로 만들어서 사용할 것.
    }
    reader.onloadend = () => {
      const previewImgURL = reader.result;

      if (previewImgURL) {
        console.log(previewImgURL, 123); // 오 미리보기 이미지가 나온다!
        setPreviewImg(previewImgURL);
      }
    };
  };

  axios
    .post
    // 서버에 업로드하는 파일들을 보내줘야한다.
    // 'http://localhost:4000/write',
    // {
    //   email: loginInfo.email,
    //   password: loginInfo.password,
    // },
    // {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // },
    ();
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
          onChange={e => uploadImg(e)}
        ></input>
      </form>
      <br />
      <span>미리보기..</span>
      <div className="imageContainer">
        <Container>
          <img
            src={
              previewImg ||
              'https://vernixgroup.com/wp-content/themes/consultix/images/no-image-found-360x250.png'
            }
            alt="noImg"
          />
        </Container>
      </div>
      <textarea></textarea>
      <br />
      <button className="btn-post">똥글 싸지르기</button>
    </div>
  );
};
export default WritePage;
