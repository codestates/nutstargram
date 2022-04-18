/* eslint-disable */
import React, { useState } from 'react';
import { Route, Routes, NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const EditPage = props => {
  const { username, user_img, email, mobile } = props.userinfo;
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  );
  const inputUsername = username
  console.log(inputUsername)
  const [editUserName, setEditUserName] = useState(username)
  const [editEmail, setEditEmail] = useState(email)
  const [editMobile, setEditMobile] = useState(mobile)
  const [inputValue, setInputValue] = useState({
    username: inputUsername,
    email: email,
    mobile: mobile,
  });

  const handleInput = event => {
    const { name, value } = event.target;
    console.log(value + '   value 입니다.')
    console.log(name + '   name 입니다.')
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  const handlePatch = () => {
    axios({
      method: 'patch',
      url: 'http://localhost:4000/edituser',
      data: data,
      headers: {
        'Content-Type': `application/json`,
        withCredentials: true,
      },
    })
      .then(res => {
        console.log(res.data);
      })

      .then(res => {
        navigate('/mypage');
        console.log(res.data);
      })
      .catch(err => {
        if (err.message === 'Request failed with status code 409') {
          alert('이미 존재하는 이메일 입니다');
        }
      });
  }

  



  return (
    <Editpage>
      <EditBody>
        <button>{handlePatch}</button>
        <EditUserName 
        name='username'
        type="text"
        onChange={handleInput}
        ></EditUserName>
        {/* username 변경 공간 */}
        <img src={Image} style={{ margin: '20px' }} width="100" height="100" />
        <EditImgBtn>여기 프로필 이미지 수정 버튼</EditImgBtn>
        {/* 로컬에서 이미지 선택해서 반영시킬 공간 */}
        <FixIndex>이메일 *</FixIndex>
        <EditEmail 
        name='email'
        type="text"
        onChange={handleInput}
        />
        {/* 이메일 변경 공간 */}
        <FixIndex>연락처 *</FixIndex>
        <EditMobile
        name='mobile' 
        type="text"
        onChange={handleInput}
        />
        {/* 모바일 변경 공간 */}
        <EditBtn>
          <NavLink to="/mypage" activeStyle="true">
            수정하기
          </NavLink>
        </EditBtn>
      </EditBody>
    </Editpage>
  );
};

export default EditPage;

const Editpage = styled.div`
  font-family: sans-serif;
  height: 100vh;
  width: 100vw;
`;

const EditBody = styled.div`
  position: relative;
  margin: 5% auto;
  height: 450px;
  width: 400px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`;

const EditUserName = styled.input`
  font-size: larger;
  font-weight: bold;
  color: grey;
  padding: 20px;
`;

const EditImgBtn = styled.div``;

const EditEmail = styled.input`
  width: 220px;
  height: 32px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  border: none;
  outline: none;
  border-bottom: 1px solid #aaa;
  font-size: 15px;
  margin: auto;
`;

const EditMobile = styled.input`
  width: 220px;
  height: 32px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  border: none;
  outline: none;
  border-bottom: 1px solid #aaa;
  font-size: 15px;
  margin: auto;
`;

const EditBtn = styled.div`
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  margin: 24px;

  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;

const NavLink = styled(Link)`
  border-radius: 4px;
  background: #f9aa83;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f9aa83;
  }
`;

const FixIndex = styled.div`
  font-size: medium;
  font-weight: bold;
  color: grey;
  padding-top: 20px;
`;

  


// const userInfo = props.

// useEffect로 업데이트?
// const [userInfo,setUserInfo] =useState({})
// handleEdit=()=>{}
// useEffect(()=>{
//  setUserInfo({'username':userInfo,'email':userInfo.email, ...})
//  })

// 다른방법
// https://github.com/silverairplan/jitsimeet/blob/a76910f0b8fab293fbb99956deaa270e56461ccd/react/features/frontend/components/components/profile/profile.js

