/* eslint-disable */
import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Edit_userInfo= (userinfo) => {
  console.log(userinfo)
  const [userInfo,setUserInfo]=useState({
    username:userinfo.username,
    user_img:userinfo.user_img,
    mobile:userinfo.mobile,
    password:userinfo.password,
  });
  console.log(userInfo.username);

const handleEditPage = (event) => {

  if(event.target.name ) setUserInfo({...userInfo, [event.taget.name]:event.taget.value});
  console.log(userInfo);

  editUser = (event) =>{
    event.preventDefault()
    const userEdit = this.state.userinfo
  }

  axios({
    method:'patch',
    //url:'http://ec2-3-34-190-189.ap-northeast-2.compute.amazonaws.com/edituser'
    url: 'http://loaclhost:4000/edituser',
  })
    .then(res => res.json)
     .then(res => {
       if (res.message === 'ok') {
         console.log('ok');
         Navigate('/mypage');
       }
      });
  };
  return (
    <div>
      <Link to="/mypage">
        <button type="button"> {`<-- 뒤로가기`} </button>
      </Link>
      수정할 내용
      <button type="btn-edituserinfo" onClick={handleEditPage}>저장하기</button>
      {/* 저장 완료 되었습니다. */}
    </div>
  );
};

export default Edit_userInfo;

// const userInfo = props.

// useEffect로 업데이트?
// const [userInfo,setUserInfo] =useState({})
// handleEdit=()=>{}
// useEffect(()=>{
//  setUserInfo({'username':userInfo,'email':userInfo.email, ...})
//  })

// 다른방법
// https://github.com/silverairplan/jitsimeet/blob/a76910f0b8fab293fbb99956deaa270e56461ccd/react/features/frontend/components/components/profile/profile.js