import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalEditContent from '../Components/Modals/ModalEditContent';

const Edit_contents = content => {
  // props로 app.js에 받아온 정보들을 불러와야한다.
  // 아래에 Props로 내려받은 요소들은 app에서 어떻게 응답으로 받아오는지에 따라 달라 질 수 있음.

  const [editImg, setEditImg] = useState(content.content_img); // state의 초기값은 db에 저장되어있는 img주소이다.
  const [editWrite, setEditWrite] = useState(content.content_text);
  // const [newImg, setNewImg] = useState([]); // 새로운 이미지?

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(false);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(false);
  //   }, 3000);
  // });
  const handleTextChange = e => {
    setEditWrite(e.target.value);
    // console.log(e.target.value);
  };
  const formData = new FormData();

  const uploadImg = e => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      // 만약 이미지가 있으면,
      reader.readAsDataURL(e.target.files[0]); // dataurl로 읽어오는 메소드 실행
    }
    reader.onloadend = () => {
      console.log(reader.result);
      const selectedImgUrl = reader.result;
      if (selectedImgUrl) {
        setEditImg(selectedImgUrl); // 이미지가 선택이 되었다면, 기존 editImg에 새로운 이미지 url을 덮어씌운다.
      }
      formData.append('file', e.target.files[0]);
    };
  };

  const submitEditContent = async () => {
    await axios({
      method: 'PATCH',
      url: 'http://localhost4000/editdiary',
      body: { content_text: editWrite, content_img: editImg, user_id: 1 },
      headers: { 'Content-Type': 'application/json', withCredentials: true },
    })
      // const Edit_contents = () => {
      //   const handleEditContent = () => {
      //     axios({
      //       method: 'post',
      //       url: 'http://ec2-3-34-190-189.ap-northeast-2.compute.amazonaws.com/write',
      //     })
      .then(res => res.json)
      .then(res => {
        if (res.message === 'ok') {
          console.log('ok');
          // console.log(res.data);
          // 여기서 Modal로 게시물 수정을 완료하시겠습니가? 메시지를 띄어주고
          // 예 버튼 클릭 시 navigate 시켜주는건 어떨끼?
          setShowModal(false); // 성공적으로 요청을 보내고, 응답을 받으면 모달을 띄우지 않는다.
          Navigate('/main');
        }
      });
  };

  return (
    <div>
      <Link to="/main">
        <button>뒤로가기</button>
      </Link>
      <form encType="multipart/form-data">
        <label htmlFor="upload-file">이미지를 선택해주세요</label>
        <input
          id="uploadImg"
          type="file"
          name="edit_img"
          accept="image/*"
          onChange={e => uploadImg(e)}
        ></input>
        <br />
      </form>
      <span>그림</span>
      <Container>
        <img src={editImg} />
      </Container>
      <br />
      <textarea
        className="edit_write"
        type="text"
        onChange={handleTextChange}
      ></textarea>
      <br />
      {setShowModal ? (
        <ModalEditContent
          submitEditContent={submitEditContent}
          openModal={openModal}
        />
      ) : null}
      <button className="btn-editcontent" onClick={openModal}>
        게시물 수정
      </button>
    </div>
  );
};

export default Edit_contents;

const Container = styled.div`
  img {
    width: 200px;
    height: 200px;
    //object-fit: cover; 이거 쓰면 이미지 짤림
  }
`;
