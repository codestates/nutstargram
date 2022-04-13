import React, { useState } from 'react';
import styled from 'styled-components';
/* eslint-disable */


const ModalEditContent = props => {
  // 버튼을 클릭했을 때 게시물 수정을 완료하시겠습니까? Y/N 버튼이 나와야 한다.
  // Y => axios.patch 를 실행하고, main페이지로 navigate 시킨다.
  // props로 받을 것: showModal함수와 submitEditContent!

  return (<>
    <ModalContainer>
        <ModalViewEditContent>
            <div>
            <ModalEditBtn onClick={props.submitEditContent}>Yes</ModalEditBtn>
            <ModalEditBtn onClick={!props.openModal}>No</ModalEditBtn>
            </div>
        </ModalViewEditContent>
    </ModalContainer>
  </>);
};

export default ModalEditContent;


export const ModalContainer = styled.div`
    background-color: rgba(0,0,0,0.8);
    height: 100vh;
    width: 100%;
    border-radius: none;
    text-align: center;
    z-index: 10;
    position: fixed
`;


export const ModalViewEditContent = styled.div`    
    background-color: white;
    width: 200px;
    height:150px;
    text-align: center;
    box-shadow: 0 2px 2px #ccc;
    margin: 10% auto; 
    align-items: center;
    position: absolute;
    border-radius: 20px;
`;


export const ModalEditBtn = styled.button`
  background-color: #aaa;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`;

