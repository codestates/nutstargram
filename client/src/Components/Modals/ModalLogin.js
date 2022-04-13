import React, { useState } from 'react';
import styled from 'styled-components';
/* eslint-disable */

export const ModalContainer = styled.div`
  background-color: rgba(0,0,0,0.8);
  height: 100vh;
  width: 100%;
  border-radius: none;
  text-align: center;
  z-index: 10;
  position: fixed;
`;

export const ModalBtn = styled.button`
  background-color: #aaa;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999; //모달을 Layer 가장 위에 올리기위해 큰 수를 줬다.
`;

export const ModalView = styled.div.attrs(props => ({
  role: 'dialog',
  
}))`
  background: white;
  border-radius: 10px;
  font-size: 2em;
  width: 180px;
  height: 100px;
  display: flex;
  text-align: center;
  font-size: 14px;
  align-items: center;
  box-shadow: 0 2px 2px #ccc;
  margin: 10% auto;  

  > div.close_btn {
    margin-top: auto;
    margin-left: auto;
    cursor: pointer;
    align-self: center;
    margin: auto;
  }
  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
`;

const ModalLogin = props => {
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalContainer>
        <ModalView>{props.handleLogin ? (<div>
          <ModalBtn className="close_btn" onClick={props.closeModal}> X
          </ModalBtn>
          잘못된 정보입니다. 
          </div> ): null}</ModalView>
      </ModalContainer>
    </>
  );
};

export default ModalLogin
