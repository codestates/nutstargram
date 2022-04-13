/* eslint-disable */
import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/signup.css';
import axios from 'axios';
import Modal from '../Components/Modals/Modalsignup'

axios.defaults.withCredentials = true;

const SignUpPage = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmpassword: '',
  });

  console.log(inputValue)
  // 값 상태 저장
  const [emailMessage, setEmailMessage] = useState(
    `Email은 '@'와 '.'이 필요합니다`,
  );

  const [passwordMessage, setPasswordMessage] = useState(
    `비밀번호는 특수문자를 포함한 8자 이상으로 작성해 주셔야 합니다`,
  );
  const [confirmPasswordMessage, setConfirmPasswordMessage] =
    useState(`비밀번호가 일치하지 않습니다`);
  // 입력규칙 오류메시지 저장

  const { username, email, mobile, password, confirmpassword } = inputValue;

  const isValidEmail = email.includes('@') && email.includes('.');
  // email 검사 : @ 와 . 포함 될 것
  const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  // 비밀번호 특수문자 확인을 위한 정규식 표현
  const isValidPassword = password.length >= 8 && specialLetter >= 1;
  // 특수문자 1자 이상, 전체 8자 이상
  const isValidConfirmPassword =
    confirmpassword === password &&
    confirmpassword.length !== 0 &&
    password.length !== 0;
  // 비밀번호 확인값도 같은지 확인
  const isValidInput =
    username.length >= 1 &&
    email.length >= 1 &&
    mobile.length >= 1 &&
    password.length >= 1 &&
    confirmpassword.length >= 1;
  // 모든 칸에 한자 이상 적었을 때
  const getIsActive =
    isValidEmail &&
    isValidPassword &&
    isValidInput &&
    isValidConfirmPassword === true;
  // 검사한 모든 로직이 true 일때, 버튼을 활성화 시킬 것

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    console.log(inputValue)

    // 값이 저장되는 로직

    if (isValidEmail) {
      setEmailMessage('올바른 이메일 입니다');
    } else {
      setEmailMessage(`Email은 '@'와 '.'이 필요합니다`);
    }

    if (isValidPassword) {
      setPasswordMessage('올바른 비밀번호 입니다');
    } else {
      setPasswordMessage(
        '비밀번호는 특수문자를 포함한 8자 이상으로 작성해 주셔야 합니다',
      );
    }

    if (isValidConfirmPassword) {
      setConfirmPasswordMessage('비밀번호 확인 되었습니다');
    } else {
      setConfirmPasswordMessage('비밀번호가 일치하지 않습니다');
    }
  };

  // setModal
  const [openModal, setOpenModal] = useState(false);

  // 모달 열고닫는 버튼
  const handleButtonValid = () => {
    setOpenModal(true)
  }
  // post 요청 함수 === submit버튼
  const handleAxios = () => {
    
    const data = {
      username: username,
      password: password,
      mobile: mobile,
      email: email,
    };

    axios({
      method: 'post',
      url: 'http://localhost:4000/signup',
      data: data,
      headers: {
        'Content-Type': `application/json`,
        withCredentials: true,
      },
    })
      .then(res => {
        navigate('/');
        console.log(res.data);
      })
      .catch(err => {
        if (err.message === 'Request failed with status code 409') {
          alert('이미 존재하는 이메일 입니다');
        }
      });
  }
  

return (
  
    <Fragment>
      <div className="top">
      {openModal && 
      <Modal className="Modal" 
      closeModal={setOpenModal} 
      handleAxios={handleAxios} 
      emailMessage={emailMessage} 
      passwordMessage={passwordMessage}
      confirmPasswordMessage={confirmPasswordMessage}
      />}
      {/* openModal === true 일 때 띄우기 */}
      {/* handleAxios 요청 보내기 */}
        <div className='h1'>회원가입 페이지 입니다</div>
        {/* input type text or textarea */}
        <form name="all" className="signUpInput">
          <div className="inputMessage">User Name *</div>
          <input type="text" name="username" onBlur={handleInput} onChange={handleInput}></input>
          <div className="inputMessage">Email *</div>
          <input type="text" name="email" onBlur={handleInput} onChange={handleInput}></input>
          <div className="inputMessage">Mobile *</div>
          <input type="text" name="mobile" onBlur={handleInput} onChange={handleInput}></input>
          <div className="inputMessage">Password *</div>
          <input type="password" name="password" className="password" onBlur={handleInput} onChange={handleInput}></input>
          <div className="inputMessage">Confirm Password *</div>
          <input
            type="password"
            name="confirmpassword"
            className="confirmpassword"
            onBlur={handleInput} onChange={handleInput}
          ></input>
        </form>
        <button
          className={
            getIsActive ? 'signUpButtonAction' : 'signUpButtonInaction'
          }
          type="button"
          name="submit"
          onClick={handleButtonValid}
        >
          회원가입
        </button>
      </div>
    </Fragment>
  );
};

export default SignUpPage;
