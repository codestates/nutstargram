import React, { Fragment, useState, useEffect } from 'react';
import '../Styles/signup.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

const SignUpPage = () => {
  const [inputValue, setInputValue] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmpassword: '',
  });
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

  const handleButtonValid = () => {
    if (!isValidInput) {
      alert('빈칸을 채워주세요');
    } else if (!isValidEmail) {
      alert('email에는 @와 . 이 포함되어야 합니다');
    } else if (!isValidPassword) {
      alert('비밀번호는 숫자8자리 이상이어야 합니다');
    } else if (!isValidConfirmPassword) {
      alert('비밀번호가 서로 같은지 확인해주세요');
    } else {
      // post 요청
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
        },
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          if (err.message === 'Request failed with status code 409') {
            alert('이미 존재하는 이메일 입니다');
          }
        });
    }
  };

  // email 인증메일 구현(advanced)
  const handleValidEmail = () => {};

  return (
    <Fragment>
      <h1>회원가입 페이지 입니다</h1>
      {/* input type text or textarea */}
      <form className="signUpInput">
        <div className="inputMessage">User Name *</div>
        <input name="username" onChange={handleInput}></input>
        <br />
        <div className="inputMessage">Email *</div>
        <input name="email" onChange={handleInput}></input>
        <br />
        <div
          onChange={handleInput}
          className={isValidEmail ? 'successMessage' : 'failMessage'}
        >
          {emailMessage}
        </div>
        <br />
        <button type="button" onClick={handleValidEmail}>
          인증메일 보내기(미구현)
        </button>
        <br />
        <div className="inputMessage">Mobile *</div>
        <input name="mobile" onChange={handleInput}></input>
        <br />
        <div className="inputMessage">Password *</div>
        <input name="password" onChange={handleInput}></input>
        <br />
        <div
          onChange={handleInput}
          className={isValidPassword ? 'successMessage' : 'failMessage'}
        >
          {passwordMessage}
        </div>
        <br />
        <div className="inputMessage">Confirm Password *</div>
        <input name="confirmpassword" onChange={handleInput}></input>
        <br />
        <div
          onChange={handleInput}
          className={isValidConfirmPassword ? 'successMessage' : 'failMessage'}
        >
          {confirmPasswordMessage}
        </div>
        <br />
      </form>
      <button
        className={getIsActive ? 'signUpButtonAction' : 'signUpButtonInaction'}
        type="button"
        onClick={handleButtonValid}
      >
        회원가입
      </button>
    </Fragment>
  );
};

export default SignUpPage;
