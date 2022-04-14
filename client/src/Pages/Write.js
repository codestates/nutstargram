import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const WritePage = ({ userinfo }) => {
  const Navigate = useNavigate();
  // Styled component
  const Container = styled.div`
    img {
      width: 200px;
      height: 200px;
      //object-fit: cover; 이거 쓰면 이미지 짤림
    }
  `;
  // eslint-disable-next-line react/prop-types
  console.log(userinfo.data.data.jwt.id);

  const [previewImg, setPreviewImg] = useState(null); // 미리보기 이미지 구현을 위한 데이터를 받을 state

  const [write, setWrite] = useState('');

  const handleTextChange = e => {
    setWrite(e.target.value);
    // console.log(e.target.value);
  };
  const formData = new FormData();

  const uploadImg = e => {
    // 이미지를 로컬에서 업로드하는 함수
    // console.log(e.target.files[0]); //성공적으로 이미지가 출력된다.
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // FileReader의 readAsDataURL method와 onloadend를 이용해서 base64의 스트링 데이터로 만들어서 사용할 것.
    }
    reader.onloadend = () => {
      // console.log(reader.result);
      const previewImgURL = reader.result; // reader.result는 이미지의 주소를 담고있다.

      if (previewImgURL) {
        // console.log(previewImgURL, 123); // 미리보기 이미지가 나온다!
        // previewImgURL이 있다면 previewImg에 해당 이미지의 주소를 넣어준다.
        setPreviewImg(previewImgURL);
      }

      formData.append('file', e.target.files[0]);
      // console.log(formData.entries());
    };
  };

  const submitContent = () => {
    if (previewImg) {
      // const formData = new FormData();
      formData.append('file', previewImg);
      // console.log(previewImg, '!!!!!!!!');
      console.log('사진 전송 버튼이 클릭되었습니다.');
      axios
        .post({
          // url: 'http://ec2-3-34-190-189.ap-northeast-2.compute.amazonaws.com/write',
          url: 'http://localhost:4000/write',
          data: formData,
          headers: {
            'Content-Type': `multipart/form-data; `,
            withCredentials: true,
          },
        })
        .then(res => {
          console.log(res);
        })
        .then(res => {
          if (res.message === 'ok') {
            Navigate('/main');
          }
        });
    } else {
      alert('컨텐츠가 부족합니다!');
    }
  };

  const sendContent = async () => {
    console.log('sending texts to server');
    if (write.length !== 0) {
      console.log('글자 내용이 존재함');
      await axios
        .post(
          // 'http://ec2-3-34-190-189.ap-northeast-2.compute.amazonaws.com/write',
          'http://localhost:4000/write',
          {
            content_text: write,
            // eslint-disable-next-line react/prop-types
            user_id: userinfo.data.data.jwt.id,
            content_img: previewImg,
          }, // formData는 객체라서 여기다 집어넣을수가 없음..
          {
            headers: {
              'Content-type': 'application/json',
              withCredentials: true,
            },
          },
        )
        .then(res => {
          if (res.statusText === 'OK') {
            console.log('텍스트 내용 전송이 성공적으로 전달되었습니다.');
            Navigate('/main');
          }
        });
    } else {
      alert('not enough text');
    }
  };

  return (
    <div>
      <h2>일기 작성 페이지</h2>
      <Link to="/main">
        <button>뒤로가기</button>
      </Link>
      <form encType="multipart/form-data">
        <label htmlFor="upload-file">이미지 업로드 </label>
        <input
          id="uploadFile"
          type="file"
          name="content_img"
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
      <button className="btn-post" onClick={sendContent}>
        일기 작성
      </button>
    </div>
  );
};
export default WritePage;
