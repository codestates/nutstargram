/* eslint-disable */
import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, NavLogo } from './Navstyle';
import LogoImg from '../almonds.png';

 const NavBar = props => {
  const returnProps = props;
  return (
    <Nav>
      <NavLogo to="/" activestyle="true">
        <img src={LogoImg} alt="LogoImg" width="50" height="50" />
      </NavLogo>
      <NavMenu>
        <NavLink to="/WritePage" activestyle="true">
          일기를 써보자!
        </NavLink>
        <NavLink to="/Edit_contents" activestyle="true">
          편집하자!
        </NavLink>
        <NavLink to="/mypage" activestyle="true">
          마이페이지!!
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/login" onClick={returnProps.handleLogout}>log out</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
export default NavBar;