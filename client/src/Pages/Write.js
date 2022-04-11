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

  // 사진을 로컬에서부터 업로드하는 기능이 있어야합니다.
  // 만들어준 state에 파일객체를 담아서 서버에 업로드 요청을 보낸다.
  const [postfiles, setPostfiles] = useState({
    file: [],
    previewURL: '',
  });

  const [previewImg, setPreviewImg] = useState(null); // 미리보기 이미지

  const [write, setWrite] = useState('');

  const handleTextChange = e => {
    setWrite(e.target.value);
  };

  const uploadImg = e => {
    // 이미지를 로컬에서 업로드하는 함수
    // console.log(e.target.files[0]); 성공적으로 이미지가 출력된다.
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // FileReader의 readAsDataURL method와 onloadend를 이용해서 base64의 스트링 데이터로 만들어서 사용할 것.
    }
    reader.onloadend = () => {
      console.log(reader);
      const previewImgURL = reader.result;

      if (previewImgURL) {
        // console.log(previewImgURL, 123); // 오 미리보기 이미지가 나온다!
        // previewImgURL이 있다면 previewImg에 해당 이미지의 주소를 넣어준다.
        setPreviewImg(previewImgURL);
      }
    };
  };
  // 서버에 파일을 업로드하기위해선 무조건 fromData, append method를 사용해야한다.
  // key, value를 보낼 수 있는데, Key = 'file'을, value에는 실제 이미지파일을 넣고 axios를 이용해서 api를 호출하면 서버에 이미지가 등록된다.
  const sendImgToServer = async () => {
    if (postfiles.file) {
      const formData = new FormData();
      formData.append('file', previewImg); // formData 객체를 업데이트해준다.
      // console.log(formData); //formData는 키/값 쌍을 컴파일한 특수한 객체이기 때문에 문자열로 표현할 수 없다.
      // for (const keyValue of formData) console.log(keyValue);
      await axios
        .post({
          url: 'http://localhost:4000/write',
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: formData, // JSON.stringify(previewImg),
        })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'ok')
            // return history.push('/main'); // 서버에 성공적으로 이미지 업로드하면 Main 페이지로 이동
            console.log('ok!');
        });
      setPostfiles({
        file: 'file',
        previewURL: previewImg,
      });
      console.log(postfiles.file, postfiles.previewURL);
    } else {
      alert('사진을 선택해주세요!');
    }
  };

  const sendTextToServer = async () => {
    console.log('문자 전송 버튼 클릭됨');
    if (write.length !== 0) {
      console.log('조건문 확인');
      await axios({
        url: 'http://localhost:4000/write',
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: write,
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'ok') {
            console.log('작성한 글이 성공적으로 서버에 보내졌습니다.');
          }
        });
    } else {
      alert('글을 입력해주세요');
    }
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
      <textarea
        className="write"
        type="text"
        onChange={handleTextChange}
      ></textarea>
      <br />
      <button
        className="btn-post"
        onClick={() => {
          sendImgToServer();
          sendTextToServer();
          /* onClick에 이벤트 여러개 적용하는 방법임  */
        }}
      >
        일기 작성
      </button>
    </div>
  );
};
export default WritePage;
