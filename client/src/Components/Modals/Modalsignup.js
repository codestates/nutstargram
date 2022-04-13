/* eslint-disable */
import React, { useState } from 'react';
import { Route, Routes, NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Modal = props => {
  console.log(props.emailMessage)
  return (
    <ModalBackGround>
      <ModalBody>
        <div>
        { props.emailMessage === `Email은 '@'와 '.'이 필요합니다` ? ( 

        <div>
        <CloseBtn onClick={() => props.closeModal(false)}>X</CloseBtn>
        <AlertMessage>Email은 '@'와 '.'이 필요합니다</AlertMessage> 
        </div>

        ) : props.passwordMessage === `비밀번호는 특수문자를 포함한 8자 이상으로 작성해 주셔야 합니다` ? (

        <div>
        <CloseBtn onClick={() => props.closeModal(false)}>X</CloseBtn>
        <AlertMessage>비밀번호는 특수문자를 포함한 8자 이상으로 작성해 주셔야 합니다</AlertMessage> 
        </div>

        ) : props.confirmPasswordMessage === '비밀번호가 일치하지 않습니다' ? (

        <div>
        <CloseBtn onClick={() => props.closeModal(false)}>X</CloseBtn>
        <AlertMessage>비밀번호가 일치하지 않습니다</AlertMessage> 
        </div>

        ) : ( 
        
          <div>
          <CloseBtn onClick={() => props.closeModal(false)}>X</CloseBtn>
          <SubmitBtn onClick={() => props.handleAxios()}>회원가입버튼</SubmitBtn> 
          </div>
        
        )}
        </div>
      </ModalBody>
    </ModalBackGround>
  );
};

export default Modal;

const ModalBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const AlertMessage = styled.div`
  font-size: large;
`


const ModalBody = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const CloseBtn = styled.button`
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  margin: 24px;
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

  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;

const SubmitBtn = styled.button`
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  margin: 24px;
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

  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;
