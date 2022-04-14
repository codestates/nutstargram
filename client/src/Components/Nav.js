/* eslint-disable */
import React, { useState } from 'react';
import { Route, Routes, NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../almonds.png';

const NavBar = ({ handleLogout }) => {
  const handlelogout = () => {
    handleLogout();
  };
  return (
    <Nav>
      <NavLogo to="/main" activestyle="true">
        <img src={LogoImg} alt="LogoImg" width="50" height="50" />
      </NavLogo>
      <NavMenu>
        <NavLink to="/WritePage" activestyle="true">
          일기를 써보자!
        </NavLink>
        {/* <NavLink to="/edituser" activestyle="true">
          편집하자!
        </NavLink> */}
        <NavLink to="/mypage" activestyle="true">
          마이페이지!!
        </NavLink>
        <NavLink to="/signup" activestyle="true">
          회원가입
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/" onClick={handlelogout}>
          log out
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  background: #edc6c0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const NavLink = styled(Link)`
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #e29091;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #e29091;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;

const NavBtnLink = styled(Link)`
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

const NavLogo = styled(Link)`
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  cursor: pointer;
  filter: invert(100%);
  margin-left: 24px;

  &.active {
    color: #e29091;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: invert(50%);
    /* filter: opacity(0.5) drop-shadow(0 0 0 #ff0000); */
  }
`;
