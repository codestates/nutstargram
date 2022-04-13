import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalBtn } from './ModalLogin';
/* eslint-disable */


export const ModalContainer = styled.div`
    background-color: rgba(0,0,0,0.8);
    height: 100vh;
    width: 100%;
    border-radius: none;
    text-align: center;
    z-index: 10;
    position: fixed
`;

export const ModalViewWrite = styled.div`    
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


export const ModalWriteBtn = styled.button`
  background-color: #aaa;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`;

const ModalWrite = props => {
    return (
        <div>
        <ModalContainer>
            <ModalViewWrite>
                {props.sendContent? (<div>
                    <ModalWriteBtn className='close-btn' onClick={props.closeModal}>X</ModalWriteBtn>
                    양식에 맞게 작성해주세요.
                </div>) : null}
            </ModalViewWrite>
        </ModalContainer>
        </div>
    )
};

export default ModalWrite;


