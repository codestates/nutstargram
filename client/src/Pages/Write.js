import React, { useEffect, useState, Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ModalWrite from '../Components/Modals/ModalWrite';

const WritePage = () => {
  const [contents, setContents] = useState({
    user_id: '',
    content_img: [],
    content_text: '',
    content_emoji: null,
    content_weather: null,
  });
  // 만들어준 state에 파일객체를 담아서 서버에 업로드 요청을 보낸다.
  const [postfiles, setPostfiles] = useState([]); // 이미지 파일 자체를 받을 state

  const [previewImg, setPreviewImg] = useState(null); // 미리보기 이미지 구현을 위한 데이터를 받을 state

  const [write, setWrite] = useState('');

  const [showModal, setShowModal] = useState('false');

  const closeModal = () => {
    setShowModal(false);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(false);
  //   });
  // });
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
  // 서버에 파일을 업로드하기위해선 무조건 fromData, append method를 사용해야한다.
  // key, value를 보낼 수 있는데, Key = 'file'을, value에는 실제 이미지파일을 넣고 axios를 이용해서 api를 호출하면 서버에 이미지가 등록된다.
  // const sendImgToServer = async () => {
  //   if (postfiles.file) {
  //     const formData = new FormData();
  //     formData.append('file', previewImg); // formData 객체를 업데이트해준다.
  //     // console.log(formData); //formData는 키/값 쌍을 컴파일한 특수한 객체이기 때문에 문자열로 표현할 수 없다.
  //     // for (const keyValue of formData) console.log(keyValue);
  //     await axios
  //       .post({
  //         url: 'http://localhost:4000/write',
  //         method: 'post',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: formData, // JSON.stringify(previewImg),
  //       })
  //       .then(res => res.json())
  //       .then(res => {
  //         if (res.message === 'ok')
  //           // return history.push('/main'); // 서버에 성공적으로 이미지 업로드하면 Main 페이지로 이동
  //           console.log('ok!');
  //       });
  //     setPostfiles({
  //       file: 'file',
  //       previewURL: previewImg,
  //     });
  //     console.log(postfiles.file, postfiles.previewURL);
  //   } else {
  //     alert('사진을 선택해주세요!');
  //   }
  // };
  // const formData = new FormData();
  // const onFileChange = e => { //미리보기가 지원되지않는 기능
  //   console.log(e.target.files[0]);
  //   if (e.target && e.target.files[0]) {
  //     formData.append('file', e.target.files[0]);
  //   }
  // };
  // /axios.post ('url', { formData})

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
      // alert('컨텐츠가 부족합니다!');
      console.log('사진이 없어요');
    }
  };
  /* 위 함수에 body안에 write도 포함시켰기 때문에 더 이상 식을 분기하지 않아도 된다.  */
  // const sendTextContent = async () => {
  //   console.log('문자 전송 버튼 클릭됨');
  //   if (write.length !== 0) {
  //     console.log('조건문 확인');
  //     await axios({
  //       url: 'http://localhost:4000/write',
  //       method: 'post',
  //       headers: {
  //         'Content-type': "multipart/form-data",
  //       },
  //       body: write,
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         if (res.message === 'ok') {
  //           console.log('작성한 글이 성공적으로 서버에 보내졌습니다.');
  //         }
  //       });
  //   } else {
  //     alert('글을 입력해주세요');
  //   }
  // };
  const sendContent = async () => {
    console.log('sending texts to server');
    if (write.length !== 0) {
      console.log('글자 내용이 존재함');
      await axios
        .post(
          // 'http://ec2-3-34-190-189.ap-northeast-2.compute.amazonaws.com/write',
          'http://localhost:4000/write',
          { content_text: write, user_id: 1, content_img: previewImg }, // formData는 객체라서 여기다 집어넣을수가 없음..
          {
            headers: {
              'Content-type': 'application/json',
              withCredentials: true,
            },
          },
        )
        .then(res => res.json())
        .then(res => {
          if (res.message === 'ok') {
            console.log('텍스트 내용 전송이 성공적으로 전달되었습니다.');
            setShowModal(false);
            Navigate('/main');
          }
        });
      // axios.post( 'http://localhost:4000/write'), {email: userinfo.email};
    } else {
      setShowModal(true);
    }
  };

  // axios
  //   .post
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
  //   ();
  return (
    <div>
      {showModal && (
        <ModalWrite sendContent={sendContent} closeModal={closeModal} />
      )}
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
      <div className="t-a">
        <Textarea>
          <textarea
            // className="write"
            type="text"
            onChange={handleTextChange}
            placeholder="오늘의 기분"
          ></textarea>
        </Textarea>
      </div>
      <br />
      <button className="btn-post" onClick={sendContent}>
        일기 작성
      </button>
    </div>
  );
};
export default WritePage;

const Container = styled.div`
  img {
    width: 200px;
    height: 200px;
    //object-fit: cover; 이거 쓰면 이미지 짤림
  }
`;
const Textarea = styled.textarea`
  width: 40%;
  height: 30%;
`;
